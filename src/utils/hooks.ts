import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { extractZodErrors, getFormdataFromFormRef, round } from "./helpers";
import { ZodObject } from "zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CURRENCY_SYMBOLS, MOBILE_WIDTH } from "./constants";
import { Currency } from "./enum";
import { CurrencyRate } from "./types";
import { getCurrencyRate } from "@/actions";

type BatchParams = {
  key: string;
  value: string | null;
}[];

export const useValidation = (
  schema: ZodObject,
  formRef: RefObject<HTMLFormElement>,
) => {
  const schemaRef = useRef(schema);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [hasErrors, setHasErrors] = useState(true);

  // TODO: re-evaluate this function and know why it runs twice if used as dependency in useCallbacks and useEffects
  const validate = useCallback(
    (field?: string) => {
      const schema = schemaRef.current;

      const formdata = getFormdataFromFormRef(formRef);

      if (!formdata) return;
      if (!(schema instanceof ZodObject)) return;

      const payload = Object.fromEntries(formdata);

      const partialSchema = field ? schema.pick({ [field]: true }) : schema;

      const result = partialSchema.safeParse(payload);

      // filter the errors to keep only current field in the schema.
      let newErrors = Object.keys(errors).reduce(
        (acc, field) => {
          if (schema.shape?.[field]) {
            return { ...acc, [field]: errors[field] };
          }
          return acc;
        },
        {} as typeof errors,
      );
      if (result.success) {
        newErrors = field ? { ...newErrors, [field]: "" } : {};
      } else {
        const errors = extractZodErrors(result.error);
        newErrors = field ? { ...newErrors, ...errors } : errors;
      }

      // get the field errors
      const hasErrors = !!Object.values(newErrors).filter(Boolean).length;
      const fieldErrors: Record<string, string> = {};

      Object.keys(newErrors).forEach((field) => {
        fieldErrors[field] = touched[field] ? newErrors[field] : "";
      });

      //save to state
      setHasErrors(hasErrors);
      setFieldErrors(fieldErrors);
      setErrors(newErrors);
    },
    [formRef, touched, errors, fieldErrors],
  );

  const markFieldTouched = useCallback(
    (field: string) => {
      setTouched((curr) => ({ ...curr, [field]: true }));
      //to delay the validation for slow library fields
      setTimeout(() => validate(), 1);
    },
    [validate],
  );

  const onSubmit = useCallback(() => {
    const formdata = getFormdataFromFormRef(formRef);
    if (!formdata) return;
    const fields = Object.keys(Object.fromEntries(formdata)).reduce(
      (cumm, curr) => ({ ...cumm, [curr]: true }),
      {} as typeof touched,
    );

    setTouched(fields);
    validate();
  }, [formRef.current]);

  useEffect(() => {
    schemaRef.current = schema;
  }, [schema]);
  useEffect(() => {
    const form = formRef?.current;
    if (!form) return;
    form.addEventListener("submit", onSubmit);
    validate();
    return () => form?.removeEventListener("submit", onSubmit);
  }, [formRef.current, onSubmit]);

  return {
    touched,
    errors: fieldErrors,
    hasErrors,
    markFieldTouched,
  };
};

// Custom hook that builds on the useSearchParams to add the a `set` method
export const useQueryParams = () => {
  // hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // functions
  // gets the value of a specific search parameter.
  const get = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams],
  );
  // sets the value of a specific search parameter.
  const set = useCallback(
    (key: string, value: number | string | null) => {
      const url = new URLSearchParams(searchParams);
      if (value === null) {
        url.delete(key);
      } else {
        url.set(key, value.toString());
      }
      router.replace(pathname + "?" + url.toString());
    },
    [searchParams, pathname, router],
  );

  //   set the values for a batch of search params
  const batchSet = useCallback(
    (batch: BatchParams) => {
      const url = new URLSearchParams(searchParams);
      batch.forEach((entry) => {
        if (entry.value === null) {
          url.delete(entry.key);
        } else {
          url.set(entry.key, entry.value);
        }
      });
      router.replace("?" + url.toString());
    },
    [searchParams, router],
  );

  return useMemo(
    () => ({
      get,
      set,
      batchSet,
      searchParams: searchParams.toString(),
    }),
    [get, set, batchSet, searchParams],
  );
};

export const useMediaQuery = (query: string = MOBILE_WIDTH): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export const useCurrencyToggle = () => {
  const [currency, setCurrency] = useState<Currency>(Currency.USD);

  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState<CurrencyRate>();

  const convert = useCallback(
    (amount: number) =>
      currency === Currency.USD ? amount : round(amount * (rate?.rate ?? 0)),
    [currency, rate?.rate],
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getCurrencyRate();
      setRate(response?.data);
      setLoading(false);
    })();
  }, []);

  return {
    currency,
    loading,
    setCurrency,
    convert,
    symbol: CURRENCY_SYMBOLS[currency],
  };
};
