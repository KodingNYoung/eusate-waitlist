import { SendIcon, SettingsIcon } from "@/assets/icons";
import AutoResizingTextarea from "@/components/shared/atoms/AutoResizingTextarea";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Button from "@/components/shared/molecules/Button";
import TypingText from "@/components/shared/organisms/animata/text/typing";
import { useState } from "react";

export const ChatArea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative bg-black p-[4px] flex flex-col gap-4 rounded-x20">
      {!value.length && (
        <div className="pointer-events-none absolute left-4 top-4 z-10 w-full">
          <TypingText
            className="text-gray-300 text-medium-lg"
            text="Ask Eusate AI anything..."
          />
        </div>
      )}
      <AutoResizingTextarea
        maxRows={3}
        minRows={10}
        onChange={(value) => setValue(value)}
        classNames={{
          inputWrapper: "!bg-white/15",
          input:
            "text-white !text-medium-lg placeholder:text-gray-500 focus:border-0",
        }}
        placeholder=""
        // placeholder="Ask Eusate AI anything..."
      ></AutoResizingTextarea>
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-4">
          <GradientBorder
            classNames={{
              root: "w-fit rounded-[90px] group",
              container: "bg-black py-1.5 px-4",
            }}
            borderWidth={1}
            bgColor="bg-[linear-gradient(180deg,_#151515_0%,_#1C1B1B_100%)]"
            borderColor="bg-[linear-gradient(140deg,_rgba(194,_194,_194,_0.6)_9.8%,_rgba(194,_194,_194,_0)_39.18%),_linear-gradient(154.19deg,_rgba(204,_204,_204,_0)_70.34%,_rgba(194,_194,_194,_0.6)_94.92%)]"
          >
            <Button
              size="sm"
              variant="tetiaryText"
              className="text-medium-base text-white"
              startContent={<span>{SettingsIcon}</span>}
            >
              Set preferences
            </Button>
          </GradientBorder>
          <GradientBorder
            classNames={{
              root: "w-fit rounded-[90px] group",
              container: "bg-black py-1.5 px-4",
            }}
            borderWidth={1}
            bgColor="bg-[linear-gradient(180deg,_#151515_0%,_#1C1B1B_100%)]"
            borderColor="bg-[linear-gradient(140deg,_rgba(194,_194,_194,_0.6)_9.8%,_rgba(194,_194,_194,_0)_39.18%),_linear-gradient(154.19deg,_rgba(204,_204,_204,_0)_70.34%,_rgba(194,_194,_194,_0.6)_94.92%)]"
          >
            <Button
              size="sm"
              variant="tetiaryText"
              className="text-medium-base text-white"
              startContent={<span>{SettingsIcon}</span>}
            >
              Clear
            </Button>
          </GradientBorder>
        </div>

        <GradientBorder
          classNames={{
            root: "w-fit rounded-[90px] group",
            container: "bg-black/30",
          }}
          borderWidth={1}
          borderColor="bg-[linear-gradient(140deg,_rgba(194,_194,_194,_0.6)_9.8%,_rgba(194,_194,_194,_0)_39.18%),_linear-gradient(154.19deg,_rgba(204,_204,_204,_0)_70.34%,_rgba(194,_194,_194,_0.6)_94.92%)]"
        >
          <Button className="p-4" variant="tetiaryText">
            <span>{SendIcon}</span>
          </Button>
        </GradientBorder>
      </div>
    </div>
  );
};
