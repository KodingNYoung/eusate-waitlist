import { AppTab } from "@/components/shared/molecules/Tabs";
import { cls } from "@/utils/helpers";
import { HelpCenterKey } from "@/utils/enum";
import { HelpCenterQuestion } from "@/utils/types";
import { HELP_CENTER_TABS } from "@/utils/constants";
import { Accordion } from "@/components/shared/molecules/Accordion";
import { linkifyText } from "@/utils/linkify";

export const QuestionsDesktop = () => {
  return (
    <div className="w-full hidden md:flex">
      {/* FOR DESKTOP */}
      <AppTab<HelpCenterKey, HelpCenterQuestion[]>
        classNames={{
          panel: "flex-1 w-full sticky top-[130px] self-start",
          tabWrapper: "flex w-full",
          cursor: "w-0",
          tab: cls(
            "w-full justify-start py-3 !text-gray-400 text-medium-lg rounded-[8px]",
            "before:content-[''] before:absolute before:left-0 before:top-[20%] before:h-[60%] before:bg-[#F79009]",
            "data-[selected=true]:bg-gold-50 data-[selected=true]:!text-black data-[selected=true]:text-semibold-lg",
            "data-[selected=true]:before:w-[2.75px]",
          ),
          tabList: "w-full w-[300px] space-y-4",
        }}
        tabs={HELP_CENTER_TABS}
        aria-label="help-center-tabs"
        isVertical
      >
        {(content) => (
          <Accordion
            variant="splitted"
            itemClasses={{
              trigger: "justify-between text-gray-700",
              titleWrapper: "flex-0",
              title: "text-semibold-lg",
              base: "border border-gray-50 py rounded-x24",
              content: "[&_a]:underline",
            }}
            items={content.map(({ key, question, answer }) => ({
              key,
              title: question,
              content: linkifyText(answer),
            }))}
          />
        )}
      </AppTab>
    </div>
  );
};
