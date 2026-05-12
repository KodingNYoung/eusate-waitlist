import { cls } from "@/utils/helpers";
import { PRICING, ROUTES } from "@/utils/constants";
import { PricingCard } from "../pricing/PricingCard";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { useMediaQuery } from "@/utils/hooks";
import Link from "next/link";
import Button from "@/components/shared/molecules/Button";
import { ArrowRightIcon } from "@/assets/icons";

export const Pricing = () => {
  const isMobile = useMediaQuery();
  return (
    <PageSection classNames={{ base: "py-20 px-5", container: "md:!gap-y-20" }}>
      <SubHeader
        position="center"
        chipLabel="Our Pricing"
        title="Enterprise results. Startup pricing"
      />
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
              <PricingCard showCompare={isMobile} {...pricing} />
            </div>
          ))}
        </div>
      </div>
      <Link href={ROUTES.PRICING + "#cp"} scroll>
        <Button
          variant="tetiary"
          className="group text-gray-600 w-full p-4 data-[featured=true]:text-white data-[featured=true]:hover:!bg-transparent"
          endContent={
            <span className="stroke-gray-600 group-data-[featured=true]:stroke-white">
              {ArrowRightIcon}
            </span>
          }
        >
          Compare plans
        </Button>
      </Link>
    </PageSection>
  );
};
