import Typography from "@/components/shared/atoms/Typography";
import { Accordion } from "@/components/shared/molecules/Accordion";
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { HELP_CENTER_QUESTIONS } from "@/utils/constants";
import { HelpCenterKey } from "@/utils/enum";

export const FAQ = () => {
  return (
    <SectionTemplate
      classNames={{
        base: "bg-gray-50 flex",
        wrapper: "flex gap-8 flex-wrap justify-between",
      }}
    >
      <SubHeader
        chipLabel="Our FAQs"
        title={
          <Typography className="leading-[120%]" variant="bold-3xl">
            Questions?
            <br /> We&apos;ve got answers
          </Typography>
        }
      />
      <Accordion
        variant="splitted"
        itemClasses={{
          trigger: "justify-between text-gray-700",
          titleWrapper: "flex-0",
          title: "text-left text-semibold-lg",
          base: "bg-white rounded-x24 px-6 flex-1",
        }}
        items={HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED].map(
          (faq) => ({
            key: faq.key,
            title: faq.question,
            content: faq.answer,
          }),
        )}
      />
    </SectionTemplate>
  );
};
