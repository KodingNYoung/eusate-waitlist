import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { SocialLinks } from "@/components/routes/contact/Socials";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { FormSection } from "@/components/routes/contact/FormSection";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { staggerContainer } from "@/components/shared/organisms/AnimatedBlock/variants";

const ContactPage = () => {
  return (
    <div>
      <AnimatedBlock variants={staggerContainer}>
        <PageTemplate
          classNames={{
            wrapper:
              "flex flex-wrap md:container sm: justify-between px-5 pt-20 md:pt-[196px] gap-10",
          }}
        >
          {/* CONTACT INFO */}
          <AnimatedBlock duration={2}>
            <PageSection classNames={{ container: "space-y-10 md:space-y-20" }}>
              <SubHeader
                chipLabel="Contact us"
                title="Get in touch."
                description="Do you have questions? We'd love to hear from you"
                classNames={{
                  title: "md:text-bold-6xl",
                  root: "flex-col space-y-4",
                  titleContainer: "md:space-y-10",
                  description: "md:text-regular-xl text-gray-700",
                }}
              />
              <SocialLinks />
            </PageSection>
          </AnimatedBlock>

          {/* MESSAGE FORM */}
          <FormSection />
        </PageTemplate>
      </AnimatedBlock>
    </div>
  );
};

export default ContactPage;
