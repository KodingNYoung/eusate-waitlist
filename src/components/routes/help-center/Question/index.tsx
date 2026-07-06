import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { QuestionMobile } from "./QuestionMobile";
import { QuestionsDesktop } from "./QuestionDesktop";

export const Questions = () => {
  return (
    <PageSection>
      <QuestionsDesktop />
      <QuestionMobile />
    </PageSection>
  );
};
