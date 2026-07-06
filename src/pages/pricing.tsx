import {
  PRICING,
  ADD_ON_LIST,
  CATEGORY_LIST,
  COMPARE_PRICING_LIST,
  INTEGRATIONS_PRICING,
} from "@/utils/constants";
import Button from "@/components/shared/molecules/Button";
import { AddOnCard } from "@/components/routes/pricing/AddonsCard";
import { CompareGrid } from "@/components/routes/pricing/CompareGrid";
import { PricingCard } from "@/components/routes/pricing/PricingCard";
import {
  PageHeader,
  SubHeader,
} from "@/components/shared/organisms/PageHeader";
import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import Link from "next/link";
import { cls } from "@/utils/helpers";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { motion } from "motion/react";
import { staggerContainer } from "@/components/shared/organisms/AnimatedBlock/variants";
import { IntegrationPricingCard } from "@/components/routes/pricing/IntegrationPricingCard";
import { useCurrencyToggle } from "@/utils/hooks";
import CurrencyToggle from "@/components/shared/molecules/CurrencyToggle";
import MetaProps from "@/components/shared/molecules/MetaProps";

const Pricing = () => {
  const { currency, setCurrency, convert, symbol } = useCurrencyToggle();

  return (
    <div>
      <MetaProps
        title="Eusate Pricing | Flexible AI Support Plans"
        description="Find the right Eusate plan for your business. Scale customer support with AI, automation, analytics, and omnichannel communication."
        path="/pricing"
        jsonLdData={{ type: "software" }}
      />
      <PageTemplate
        gradientVariant="yellow"
        classNames={{
          wrapper: "grid gap-y-12 md:gap-y-20",
        }}
      >
        <div className="flex items-center justify-center mt-2.5 mb-8 sticky top-[98px]">
          <CurrencyToggle currency={currency} onChange={setCurrency} />
        </div>
        <PageHero classNames={{ base: "xl:!p-0" }}>
          <PageHeader
            chipLabel="Our Pricing"
            title="Unlock Full Access"
            classNames={{
              container: "md:h-auto px-5",
              root: "flex-col w-full md:w-[60%] gap-y-4",
              wrapper:
                "md:justify-between flex-col md:flex-row md:items-end space-y-8",
            }}
            endContent={
              <Link href="#cp" aria-label="compare-section">
                <Button size="sm" className="py-[15px] px-[18px]">
                  Compare our plans
                </Button>
              </Link>
            }
            description="We charge by value delivered, not vanity metrics. Transparent plans. No hidden fees. Cancel anytime."
          />
        </PageHero>
        {/* PRICING */}
        <PageSection
          classNames={{
            base: "flex justify-center",
            container: "md:max-w-full",
          }}
        >
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-4 justify-center"
          >
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
          </motion.div>
        </PageSection>
        {/* COMPARE PLANS */}
        <PageSection
          id="cp"
          classNames={{
            base: "flex flex-col items-center pt-[60px] md:py-20",
            container: "!gap-y-20 !max-w-[1512px]",
          }}
        >
          <AnimatedBlock>
            <SubHeader
              position="center"
              classNames={{
                container: "space-y-4",
                title: "text-bold-3xl md:text-bold-6xl text-center",
                root: "flex-col gap-4 items-center ",
              }}
              title="Compare our plans"
            />
          </AnimatedBlock>

          <CompareGrid
            convert={convert}
            symbol={symbol}
            headerTitle="Plan Features"
            headers={CATEGORY_LIST}
            data={COMPARE_PRICING_LIST}
          />
        </PageSection>
        {/* INTEGRATIONS */}
        <PageSection
          classNames={{
            container: "gap-y-10",
          }}
          header={
            <AnimatedBlock>
              <SubHeader
                classNames={{
                  root: "flex-col gap-4",
                  title:
                    "text-bold-3xl md:text-bold-6xl text-center md:text-left",
                  description:
                    "md:text-regular-xl md:text-left text-center text-gray-700",
                }}
                title="Integrations"
                description="Incorporate applications into your workspace at competitive rates to enhance your workflow."
              />
            </AnimatedBlock>
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS_PRICING.map(({ id, ...platform }) => (
              <AnimatedBlock key={id} delay={id / 10} duration={2}>
                <IntegrationPricingCard
                  convert={convert}
                  symbol={symbol}
                  {...platform}
                />
              </AnimatedBlock>
            ))}
          </div>
        </PageSection>
        {/* ADD ONs */}
        <PageSection
          classNames={{ container: "pt-[56px] md:pt-[0px] pb-20" }}
          header={
            <AnimatedBlock>
              <SubHeader
                classNames={{
                  root: "flex-col gap-4",
                  title:
                    "text-bold-3xl md:text-bold-6xl text-center md:text-left",
                  description:
                    "md:text-regular-xl md:text-left text-center text-gray-700",
                }}
                title="Add-ons"
                description="Expand your plan capacity with our friendly add ons. Add or remove anytime."
              />
            </AnimatedBlock>
          }
        >
          <div className="grid gap-y-6">
            {ADD_ON_LIST.map(({ id, ...addOn }) => (
              <AnimatedBlock key={id} delay={id / 10}>
                <AddOnCard
                  convert={convert}
                  symbol={symbol}
                  key={id}
                  {...addOn}
                />
              </AnimatedBlock>
            ))}
          </div>
        </PageSection>
      </PageTemplate>
    </div>
  );
};

export default Pricing;
