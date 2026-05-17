import {
  PRICING,
  ADD_ON_LIST,
  CATEGORY_LIST,
  COMPARE_PRICING_LIST,
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

const Pricing = () => {
  return (
    <div>
      <PageTemplate
        gradientVariant="yellow"
        classNames={{
          wrapper: "grid gap-y-12 md:gap-y-20 px-5",
        }}
      >
        <PageHero classNames={{ container: "pt-20" }}>
          <PageHeader
            chipLabel="Our Pricing"
            title="Unlock Full Access"
            classNames={{
              container: "md:h-auto",
              root: "flex-col w-full md:w-[60%] gap-y-4",
              wrapper:
                "md:justify-between flex-col md:flex-row md:items-end space-y-8",
            }}
            endContent={
              <Link href="#cp">
                <Button size="sm" className="py-[15px] px-[18px]">
                  Compare our plans
                </Button>
              </Link>
            }
            description="We charge by value delivered, not vanity metrics. Transparent plans. No hidden fees. Cancel anytime."
          />
        </PageHero>

        {/* PRICING */}

        <PageSection classNames={{ base: "flex justify-center" }}>
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            {PRICING.map(({ key, id, ...pricing }) => (
              <div
                key={key}
                className={cls(
                  id === 1 && "order-3 md:order-1",
                  id === 2 && "order-1 md:order-2",
                  id === 3 && "order-2 md:order-3",
                )}
              >
                <AnimatedBlock duration={1} delay={id / 10} key={key}>
                  <PricingCard showCompare key={key} {...pricing} />
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
            container: "!gap-y-20",
          }}
        >
          <AnimatedBlock>
            <SubHeader
              position="center"
              classNames={{
                container: "space-y-4",
                title: "text-bold-3xl md:text-bold-6xl text-center",
                description:
                  "md:text-regular-xl text-center md:w-[70%] mx-auto",
                root: "flex-col gap-4 items-center ",
              }}
              title="Compare our plans"
              description="We charge by value delivered, not vanity metrics. Transparent
              plans. No hidden fees. Cancel anytime."
            />
          </AnimatedBlock>

          <CompareGrid
            headerTitle="Plan Features"
            headers={CATEGORY_LIST}
            data={COMPARE_PRICING_LIST}
          />
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
                <AddOnCard key={id} {...addOn} />
              </AnimatedBlock>
            ))}
          </div>
        </PageSection>
      </PageTemplate>
    </div>
  );
};

export default Pricing;
