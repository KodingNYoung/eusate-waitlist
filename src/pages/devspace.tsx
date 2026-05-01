import { DevAction } from "@/components/routes/devspace/DevAction";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const Devspace = () => {
  return (
    <PageTemplate
      hideGradient
      classNames={{
        base: "overflow-visible",
        wrapper: "relative md:space-y-24",
      }}
    >
      <PageHeader
        chipLabel="Dev Space"
        orientation="horizontal"
        classNames={{
          container:
            "bg-[url(/images/devspace-bg.webp)] bg-right md:bg-center flex items-end justify-center !h-[80vh]",
          root: "w-full !space-y-10 ",
          title:
            "text-white text-bold-4xl md:text-bold-5xl w-full md:w-[70%] leading-[120%]",
          description: "text-white",
          descriptionContainer: "w-full md:w-[50%]",
        }}
        title="Connect & Build integrations your way"
        description="Full API access for custom needs. Developer Space gives SATE the power to actually solve problems by connecting directly to your systems and taking real action."
      />

      <DevAction />
    </PageTemplate>
  );
};

export default Devspace;
