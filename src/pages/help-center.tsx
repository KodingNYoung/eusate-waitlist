import { Questions } from "@/components/routes/help-center/Question";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const HelpCenterPage = () => {
  return (
    <div>
      <PageTemplate classNames={{ wrapper: "grid gap-y-20 mt-24 mb-20" }}>
        <PageHero>
          <PageHeader
            chipLabel="Help center"
            title="Everything you need to know"
            description="Do you hae questons? We'd love to hear from you."
            classNames={{ container: "md:h-auto", root: "flex-col gap-8" }}
          />
        </PageHero>
        <Questions />
      </PageTemplate>
    </div>
  );
};

export default HelpCenterPage;
