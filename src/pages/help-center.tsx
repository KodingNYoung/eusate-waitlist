import { Questions } from "@/components/routes/help-center/Question";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import MetaProps from "@/components/shared/molecules/MetaProps";

const HelpCenterPage = () => {
  return (
    <PageTemplate classNames={{ wrapper: "grid md:gap-y-20 mt-24 mb-20" }}>
      <MetaProps
        title="Help Center | Eusate Support"
        description="Find answers, browse guides, troubleshoot issues, and get the most out of your Eusate experience with our Help Center."
        path="/help-center"
        jsonLdData={{ type: "software" }}
      />
      <AnimatedBlock variants={fadeVariants}>
        <PageHero classNames={{ wrapper: "px-5" }}>
          <PageHeader
            chipLabel="Help center"
            title="Everything you need to know"
            description="Learn what to do if you're having trouble with any aspects of Eusate."
            classNames={{ container: "md:h-auto", root: "flex-col gap-8" }}
          />
        </PageHero>
      </AnimatedBlock>
      <AnimatedBlock variants={fadeVariants} delay={0.4} duration={2}>
        <Questions />
      </AnimatedBlock>
    </PageTemplate>
  );
};

export default HelpCenterPage;
