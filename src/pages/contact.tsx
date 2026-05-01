import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { SocialLinks } from "@/components/routes/contact/Socials";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { FormSection } from "@/components/routes/contact/FormSection";

const ContactPage = () => {
  return (
    <div>
      <PageTemplate
        classNames={{
          wrapper:
            "flex flex-wrap md:container sm: justify-between px-5 pt-20 md:pt-[196px] gap-12",
        }}
      >
        {/* CONTACT INFO */}
        <SectionTemplate classNames={{ container: "space-y-10 md:space-y-20" }}>
          <SubHeader
            chipLabel="Contact us"
            title="Get in touch."
            description="Do you have questions? We'd love to hear from you"
            classNames={{
              title: "md:text-bold-6xl",
              root: "flex-col space-y-4",
              titleContainer: "md:space-y-10",
              description: "md:text-regular-xl",
            }}
          />
          <SocialLinks />
        </SectionTemplate>

        {/* MESSAGE FORM */}
        <FormSection />
      </PageTemplate>
    </div>
  );
};

export default ContactPage;
