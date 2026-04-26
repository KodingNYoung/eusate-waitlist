import { Accordion } from "@/components/shared/molecules/Accordion"
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate"
import { SubHeader } from "@/components/shared/organisms/PageHeader"
import { HELP_CENTER_QUESTIONS } from "@/utils/constants"
import { HelpCenterKey } from "@/utils/enum"


export const FAQ = () => {
  return (
    <SectionTemplate classNames={{ base: "bg-gray-50 flex", wrapper: "flex gap-8 justify-around" }}>
      <SubHeader chipLabel="Our FAQs" title="Questions? We&apos;ve got answers" />
      <Accordion
        variant="splitted"
        itemClasses={{ base: "w-[50%] bg-white rounded-x24" }}
        items={HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED].map((faq) => ({
          key: faq.key,
          title: faq.question,
          content: faq.answer,
        }))}
      />
    </SectionTemplate>
  )
}
