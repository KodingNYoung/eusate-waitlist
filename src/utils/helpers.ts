import { ZodError } from "zod";
import { TWClassNames } from "./types";
import { RefObject } from "react";

type ClassValue =
  | TWClassNames
  | string
  | null
  | undefined
  | false
  | Record<string, boolean>;

export const cls = (...classNames: ClassValue[]) => {
  return classNames
    .flatMap((className) => {
      if (!className) return [];

      if (typeof className === "string") {
        return [className];
      }

      if (typeof className === "object") {
        return Object.entries(className)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }

      return [];
    })
    .join(" ");
};

export const extractZodErrors = (err: ZodError) => {
  return err.issues.reduce(
    (err, curr) => {
      const field = curr.path[0];
      return { ...err, [field]: curr.message };
    },
    {} as Record<string, string>,
  );
};

export const getFormdataFromFormRef = (formRef: RefObject<HTMLFormElement>) => {
  const form = formRef.current;

  return form ? new FormData(form) : undefined;
};
export const truncateWords = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return truncated.slice(0, lastSpace) + "...";
};
export const round = (num: number, dp: number = 2) => {
  const multiplier = Math.pow(10, dp || 0);
  return Math.round((Number(num) + Number.EPSILON) * multiplier) / multiplier;
};
