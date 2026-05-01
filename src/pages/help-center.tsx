import { ArrowDown } from "@/assets/icons";
import { Accordion } from "@/components/shared/molecules/Accordion";
import { AppTab } from "@/components/shared/molecules/Tabs";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { HELP_CENTER_TABS } from "@/utils/constants";
import { HelpCenterKey } from "@/utils/enum";
import { cls } from "@/utils/helpers";
import { HelpCenterQuestion } from "@/utils/types";

const HelpCenterPage = () => {
  return (
    <div>
      <PageTemplate classNames={{ wrapper: "md:pt-[100px]" }}>
        <PageHeader
          chipLabel="Help center"
          title="Everything you need to know"
          description="Do you hae questons? We'd love to hear from you."
          classNames={{ container: "md:h-auto", root: "flex-col gap-8" }}
        />
        <SectionTemplate>
          <div className="flex w-full hidden md:flex">
            {/* FOR DESKTOP */}
            <AppTab<HelpCenterKey, HelpCenterQuestion[]>
              classNames={{
                panel: "flex-1 w-full",
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
                  }}
                  items={content.map(({ key, question, answer }) => ({
                    key,
                    title: question,
                    content: answer,
                  }))}
                />
              )}
            </AppTab>
          </div>

          {/* FOR MOBILE */}
          <div className="md:hidden border broder-gray-50 p-2 rounded-x24">
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
                title: "text-semibold-lg",
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
                      base: "border border-gray-50 py rounded-x24",
                    }}
                    items={content.map(({ key, question, answer }) => ({
                      key,
                      title: question,
                      content: answer,
                    }))}
                  />
                ),
              }))}
            />
          </div>
        </SectionTemplate>
      </PageTemplate>
    </div>
  );
};

export default HelpCenterPage;
