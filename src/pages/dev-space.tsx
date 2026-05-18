import { DevAction } from "@/components/routes/devspace/DevAction";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const Devspace = () => {
  return (
    <PageTemplate
      hideGradient
      classNames={{
        base: "md:!px-0",
        wrapper: "relative md:space-y-24 pb-24",
      }}
    >
      <PageHero
        classNames={{
          base: "bg-[url(/images/devspace-bg.webp)] bg-right md:bg-center flex justify-center h-[600px] md:h-[600px] pb-12 md:pb-20 md:mx-4 px-5",
          container: "flex items-end h-full",
        }}
      >
        <AnimatedBlock variants={fadeVariants} duration={2}>
          <PageHeader
            chipLabel="Dev Space"
            orientation="horizontal"
            classNames={{
              container: "",
              root: "w-full gap-x-20 gap-y-10",
              title:
                "text-white text-bold-4xl md:text-bold-5xl w-full leading-[120%]",
              description: "text-white",
              descriptionContainer: "w-full ",
            }}
            title="Connect & Build integrations your way"
            description="Full API access for custom needs. Developer Space gives SATE the power to actually solve problems by connecting directly to your systems and taking real action."
          />
        </AnimatedBlock>
      </PageHero>

      <DevAction />
    </PageTemplate>
  );
};

export default Devspace;
