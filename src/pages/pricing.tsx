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

const Pricing = () => {
  return (
    <div>
      <PageTemplate
        gradientVariant="yellow"
        classNames={{
          container: "pt-[88px] px-5",
          wrapper: "md:py-20 space-y-20",
        }}
      >
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
              <Button size="sm" className="py-4.5 px-3">
                Compare our plans
              </Button>
            </Link>
          }
          description="We charge by value delivered, not vanity metrics. Transparent plans. No hidden fees. Cancel anytime."
        />

        {/* PRICING */}

        <PageSection classNames={{ base: "flex justify-center" }}>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {PRICING.map(({ key, ...pricing }) => (
              <PricingCard key={key} {...pricing} />
            ))}
          </div>
        </PageSection>

        {/* COMPARE PLANS */}

        <PageSection
          id="cp"
          classNames={{
            base: "flex flex-col items-center md:py-20",
            container: "!gap-y-20",
          }}
        >
          <SubHeader
            position="center"
            classNames={{
              container: "space-y-4",
              title: "text-bold-3xl md:text-bold-6xl text-center",
              description: "md:text-regular-xl text-center md:w-[70%] mx-auto",
              root: "flex-col gap-4 items-center ",
            }}
            title="Compare our plans"
            description="We charge by value delivered, not vanity metrics. Transparent
              plans. No hidden fees. Cancel anytime."
          />
          <CompareGrid
            headerTitle="Plan Features"
            headers={CATEGORY_LIST}
            data={COMPARE_PRICING_LIST}
          />
        </PageSection>

        {/* ADD ONs */}

        <PageSection
          header={
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
          }
        >
          <div className="space-y-4">
            {ADD_ON_LIST.map(({ id, ...addOn }) => (
              <AddOnCard key={id} {...addOn} />
            ))}
          </div>
        </PageSection>
      </PageTemplate>
    </div>
  );
};

export default Pricing;
