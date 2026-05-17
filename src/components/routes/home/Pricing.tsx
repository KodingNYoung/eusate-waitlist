import { cls } from "@/utils/helpers";
import { PRICING } from "@/utils/constants";
import { PricingCard } from "../pricing/PricingCard";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";

export const Pricing = () => {
  return (
    <PageSection
      classNames={{ base: "py-20 px-5", container: "md:!gap-y-20 pb-20" }}
    >
      <AnimatedBlock variants={fadeVariants}>
        <SubHeader
          position="center"
          chipLabel="Our Pricing"
          title="Enterprise results. Startup pricing"
        />
      </AnimatedBlock>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {PRICING.map(({ key, id, ...pricing }) => (
            <div
              key={key}
              className={cls(
                id === 1 && "order-3 md:order-1",
                id === 2 && "order-1 md:order-2",
                id === 3 && "order-2 md:order-3",
              )}
            >
              <AnimatedBlock delay={id / 10}>
                <PricingCard showCompare {...pricing} />
              </AnimatedBlock>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};
