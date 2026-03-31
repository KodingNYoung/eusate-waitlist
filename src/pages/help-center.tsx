import GradientBackground from "@/components/shared/atoms/GradientBackground";
import { Accordion } from "@/components/shared/molecules/Accordion";
import { AppTab } from "@/components/shared/molecules/Tabs";
import Navbar from "@/components/shared/organisms/navbar";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { HELP_CENTER_TABS } from "@/utils/constants";
import { HelpCenterKey } from "@/utils/enum";
import { HelpCenterQuestion } from "@/utils/types";

const HelpCenterPage = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="yellow" className="absolute" />
      <main className="pt-[88px]">
        <div className="container flex flex-col justify-between gap-16 mx-auto pt-20 max-w-[80%]">
          <PageHeader chipLabel="Help center" title="Everything you need to know" description="Do you hae questons? We'd love to hear from you." />
          <div className="flex w-full">
            <AppTab<HelpCenterKey, HelpCenterQuestion> classNames={{ tab: "w-full" }} tabs={HELP_CENTER_TABS} aria-label="help-center-tabs" isVertical>
              {(content) => (
                <Accordion items={content.map(c => ({ key: c.key, title: c.question, content: c.answer }))} />
              )
              }
            </AppTab>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HelpCenterPage;
