import { ZodError } from "zod";
import { TWClassNames } from "./types";
import { RefObject } from "react";

export function cls(
  ...classNames: (TWClassNames | string | null | undefined | false)[]
) {
  const validClasses = classNames.filter(
    (className) => !!className
  ) as string[];
  return validClasses.join(" ");
}

export const extractZodErrors = (err: ZodError) => {
  return err.issues.reduce((err, curr) => {
    const field = curr.path[0];
    return { ...err, [field]: curr.message };
  }, {} as Record<string, string>);
};

export const getFormdataFromFormRef = (formRef: RefObject<HTMLFormElement>) => {
  const form = formRef.current;

  return form ? new FormData(form) : undefined;
};
