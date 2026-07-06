"use client";

import { cls } from "@/utils/helpers";
import { NGFlagIcon, USFlagIcon } from "@/assets/icons";
import { FC, TWClassNames } from "@/utils/types";
import Typography from "../atoms/Typography";
import { Currency } from "@/utils/enum";
import { ReactNode } from "react";

type Slots = "root" | "button" | "text";
type Props = {
  currency: Currency;
  onChange: (currency: Currency) => void;
  classNames?: { [slot in Slots]?: TWClassNames };
};

const OPTIONS: Array<{
  value: Currency;
  label: string;
  flag: ReactNode;
}> = [
  { value: Currency.USD, label: "USD", flag: USFlagIcon },
  { value: Currency.NGN, label: "NGN", flag: NGFlagIcon },
];

const CurrencyToggle: FC<Props> = ({ currency, onChange, classNames }) => {
  return (
    <div
      className={cls(
        "bg-gray-50 rounded-full p-1 flex items-center gap-0.5",
        classNames?.root,
      )}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cls(
            "flex items-center gap-2.5 px-3 py-2.5 rounded-full transition-colors",
            currency === option.value ? "bg-white shadow-sm" : "",
            classNames?.button,
          )}
        >
          {option.flag}
          <Typography
            as="span"
            className={cls("text-black text-bold-base", classNames?.text)}
          >
            {option.label}
          </Typography>
        </button>
      ))}
    </div>
  );
};

export default CurrencyToggle;
