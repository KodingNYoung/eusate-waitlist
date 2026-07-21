import { PRICING } from "@/utils/constants";
import { PricingCard } from "../pricing/PricingCard";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { cls } from "@/utils/helpers";
import { useCurrencyToggle } from "@/utils/hooks";
import CurrencyToggle from "@/components/shared/molecules/CurrencyToggle";

export const Pricing = () => {
  const { currency, setCurrency, convert, symbol } = useCurrencyToggle();

  return (
    <PageSection
      classNames={{
        base: "py-20 px-5",
        container: "md:!gap-y-10 pb-20 md:!max-w-full",
      }}
    >
      <AnimatedBlock variants={fadeVariants}>
        <SubHeader
          position="center"
          chipLabel="Our Pricing"
          title="Enterprise results. Startup pricing"
        />
      </AnimatedBlock>
      <div className="flex items-center justify-center">
        <CurrencyToggle currency={currency} onChange={setCurrency} />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 justify-center">
          {PRICING.map(({ key, id, ...pricing }) => (
            <div
              key={key}
              className={cls(
                id === 1 && "order-4 md:order-1",
                id === 2 && "order-3 md:order-2",
                id === 3 && "order-2 md:order-3",
                id === 4 && "order-1 md:order-4",
              )}
            >
              <AnimatedBlock delay={id / 10}>
                <PricingCard
                  convert={convert}
                  symbol={symbol}
                  showCompare
                  {...pricing}
                />
              </AnimatedBlock>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};
