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
            "flex flex-wrap md:container sm: items-center justify-between pt-16 md:pt-[150px] md:min-h-screen gap-12",
        }}
      >
        {/* CONTACT INFO */}
        <SectionTemplate className="space-y-24">
          <SubHeader
            chipLabel="Contact us"
            title="Get in touch."
            description="Do you have questions? We'd love to hear from you"
            classNames={{
              title: "md:text-bold-6xl",
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
