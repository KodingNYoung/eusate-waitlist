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
          <div className="flex w-full">
            {/* FOR DESKTOP */}
            <AppTab<HelpCenterKey, HelpCenterQuestion[]>
              classNames={{
                panel: "flex-1 w-full",
                tabWrapper: "hidden md:flex w-full",
                cursor: "w-0",
                tab: cls(
                  "w-full justify-start py-3 border-[#F79009] !text-gray-400 text-medium-lg rounded-[8px]",
                  "data-[selected=true]:bg-gold-50 data-[selected=true]:!text-black data-[selected=true]:text-semibold-lg",
                  "data-[selected=true]:border-l-2",
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
          <div className="border broder-gray-50 p-2 rounded-x24">
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
                base: cls("group md:hidden px-0"),
                heading: cls(
                  "py-2 px-4 rounded-[18px] border-[#F79009]",
                  "data-[open=true]:border-l-4 ",
                ),
                trigger: "justify-between",
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
