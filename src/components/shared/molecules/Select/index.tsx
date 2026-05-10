import { FC, TWClassNames } from "@/utils/types";
import React, { ReactNode, useMemo, useRef, useState } from "react";
import Typography from "../../atoms/Typography";
import { cls } from "@/utils/helpers";
import HelperText from "../../atoms/HelperText";
import style from "../Input/style.module.css";
import { ChevronDown, CloseIcon, Tickcon } from "@/assets/icons";
import Input from "../Input";

type Item = { key: string; label: ReactNode };
type MenuSlots = "root" | "item";
type Slots =
  | "root"
  | "label"
  | "trigger"
  | "placeholder"
  | "helperText"
  | "icon";
type Props = {
  name: string;
  options: Item[];
  label?: string;
  isError?: boolean;
  isSuccess?: boolean;
  classNames?: { [slot in Slots]?: TWClassNames } & {
    ["menu"]?: { [mSlot in MenuSlots]?: TWClassNames };
  };
  placeholder?: string;
  onChange?: (value?: string) => void;
  helperText?: string;
};

type MenuProps = {
  classNames?: { [slot in MenuSlots]?: TWClassNames };
};

const Select: FC<Props> = ({
  name,
  options,
  label,
  isError,
  isSuccess,
  classNames,
  placeholder,
  onChange,
  helperText,
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Item>();

  const shouldOpenAbove = useMemo(() => {
    if (!open) return;
    const menuHeight = menuRef.current?.getClientRects()?.item(0)?.height;
    const triggerBottomDistanceToBottom =
      window.innerHeight -
      (triggerRef.current?.getClientRects()?.item(0)?.bottom || 0);

    if (triggerBottomDistanceToBottom < (menuHeight || 0) + 20) return true;

    return false;
  }, [open]);

  const handleSelectChange = (value?: Item) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value?.key);
    }
  };

  const Menu: FC<MenuProps> = ({ classNames }) => {
    return (
      <div
        className={cls(
          "relative shadow-soft-medium rounded-xl bg-white p-1 grid overflow-auto max-h-52",
          classNames?.root,
        )}
      >
        {options.map((option, idx) => {
          return (
            <button
              type="button"
              key={idx}
              onClick={() => {
                handleSelectChange(option);
                setOpen(false);
              }}
              className={cls(
                "p-3 text-medium-sm text-left fill-black text-black flex items-center justify-between [&_svg]:size-4",
                classNames?.item,
              )}
            >
              {option?.label}{" "}
              {option.key === selectedValue?.key ? (
                <span className="stroke-white">{Tickcon} </span>
              ) : null}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative text-input-group">
      {label && (
        <Typography
          variant="semibold-sm"
          className={cls("text-gray-500 px-2", classNames?.label)}
        >
          {label}
        </Typography>
      )}
      <div className="relative">
        <input name={name} value={selectedValue?.key || ""} hidden readOnly />
        <button
          type="button"
          className={cls(
            " rounded-[100px] relative w-full",
            "before:absolute before:bg-white focus:before:-inset-[1px] before:z-0 focus:before:size-[calc(100%_+_2px)] before:rounded-[inherit] before:duration-300",
            // "before:bg-[linear-gradient(90deg,_var(--inputColor1),_var(--inputColor2))]  before:transition-[all,_--inputColor1,_--inputColor2] ",
            classNames?.trigger,
            style.textInputContainer,
          )}
          data-open={open}
          data-error={isError}
          data-success={isSuccess}
          onClick={() => setOpen(true)}
          ref={triggerRef}
        >
          <div
            data-selected={!!selectedValue?.key}
            className={cls(
              "w-full h-full bg-white relative z-1 rounded-[inherit] text-regular-sm text-gray-400 flex items-center justify-between px-4 py-4.5 gap-2",
              "data-[selected=true]:text-gray-100",
              classNames?.placeholder,
            )}
          >
            {selectedValue?.label || (
              <Typography className="text-gray-500 text-medium-sm">
                {placeholder || "Select an option"}
              </Typography>
            )}
            {selectedValue && (
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectChange(undefined);
                }}
                className="stroke-gray-900 block ml-auto [&_svg]:size-4"
              >
                {CloseIcon}
              </p>
            )}
            <span
              className={cls(
                "stroke-gray-900 block transition-transform",
                open ? "rotate-180" : "rotate-0",
                classNames?.icon,
              )}
            >
              {ChevronDown}
            </span>
          </div>
        </button>
        {open && (
          <div
            className={cls(
              "absolute w-full z-2",
              shouldOpenAbove ? "bottom-full" : "top-full",
            )}
          >
            <div
              className="fixed top-0 left-0 w-full h-full"
              onClick={() => setOpen(false)}
            />
            <Menu classNames={{ ...classNames?.menu }} />
          </div>
        )}
        <div className="opacity absolute -left-[10000px]" ref={menuRef}>
          <Menu />
        </div>
      </div>
      {selectedValue?.key === "Other" ? (
        <Input
          name={name}
          placeholder="Please specify"
          isError={isError}
          onChange={(e) => {
            if (onChange) onChange(e.currentTarget.value);
          }}
        />
      ) : null}
      {helperText && (
        <HelperText
          isError={isError}
          isSuccess={isSuccess}
          className={cls(classNames?.helperText)}
        >
          {helperText}
        </HelperText>
      )}
    </div>
  );
};

export default Select;
