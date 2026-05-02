import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { PRICING } from "@/utils/constants";
import { PricingCard } from "../pricing/PricingCard";
import Button from "@/components/shared/molecules/Button";
import { ArrowRightIcon } from "@/assets/icons";
import { SectionTemplate } from "@/components/shared/organisms/PageTemplate";

export const Pricing = () => {
  return (
    <SectionTemplate
      classNames={{ base: "py-20 px-5", container: "md:space-y-20" }}
    >
      <div className="space-y-20">
        <SubHeader
          position="center"
          chipLabel="Our Pricing"
          title="Enterprise results. Startup pricing"
        />
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-3 items-center">
            {PRICING.map(({ key, ...pricing }) => (
              <PricingCard key={key} {...pricing} />
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="tetiary"
        className="text-gray-600 w-full p-4"
        endContent={<span className="stroke-gray-600">{ArrowRightIcon}</span>}
      >
        Compare plans
      </Button>
    </SectionTemplate>
  );
};
