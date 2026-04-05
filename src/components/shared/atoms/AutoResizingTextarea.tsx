import { FC } from "@/utils/types"
import { Textarea, TextAreaProps } from "@heroui/input"
import React from "react"

type Props = Omit<TextAreaProps, "onChange"> & {
  onChange?: (value: string) => void
}

const AutoResizingTextarea: FC<Props> = ({
  onChange,
  classNames,
  ...props
}) => {
  return (
    <Textarea
      classNames={{
        ...classNames,
        inputWrapper: [
          "bg-white data-[hover=true]:bg-white group-data-[focus=true]:bg-white rounded-x20 transition-colors duration-500 !p-0",
          classNames?.inputWrapper,
        ],
        innerWrapper: ["", classNames?.innerWrapper],
        input: [
          "!text-regular-lg text-gray-900 placeholder:text-gray-300 font-app p-3 custom-scrollbar resize-none",
          classNames?.input,
        ],
      }}
      minRows={1}
      maxRows={3}
      onValueChange={onChange}
      {...props}
    />
  )
}

export default AutoResizingTextarea
