import { cls } from "@/utils/helpers";
import { HELP_CENTER_TABS } from "@/utils/constants";
import { Accordion } from "@/components/shared/molecules/Accordion";
import { ArrowDown } from "@/assets/icons";
import { linkifyText } from "@/utils/linkify";

export const QuestionMobile = () => {
  return (
    <div className="md:hidden border broder-gray-50 py-2 rounded-x24 mt-[50px] mx-3">
      <Accordion
        indicator={
          <span
            className={cls(
              "stroke-black inline-block transition-transform ",
              "group-data-[open=true]:rotate-180",
            )}
          >
            {ArrowDown}
          </span>
        }
        itemClasses={{
          base: cls("group px-0"),
          heading: "relative overflow-hidden py-2 px-4 rounded-[18px] ",
          trigger: cls(
            "justify-between",
            "before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:bg-[#F79009]",
            "data-[open=true]:before:w-[2.75px]",
          ),
          titleWrapper: "flex-0",
          title: "text-semibold-lg text-left",
        }}
        variant="splitted"
        items={HELP_CENTER_TABS.map(({ key, label, content }) => ({
          key,
          title: label,
          content: (
            <Accordion
              variant="splitted"
              itemClasses={{
                trigger: "justify-between text-gray-700",
                titleWrapper: "flex-0",
                title: "text-semibold-sm text-left",
                base: "px-[8px] border border-gray-50 py rounded-x24",
                content: "[&_a]:underline"
              }}
              items={content.map(({ key, question, answer }) => ({
                key,
                title: question,
                content: linkifyText(answer),
              }))}
            />
          ),
        }))}
      />
    </div>
  );
};
