import { SubHeader } from "@/components/shared/organisms/PageHeader"
import { PRICING } from "@/utils/constants"
import { PricingCard } from "../pricing/PricingCard"
import Button from "@/components/shared/molecules/Button"
import { ArrowRightIcon } from "@/assets/icons"


export const Pricing = () => {
  return (
    <section className="container space-y-8">
      <SubHeader position="center" chipLabel="Our Pricing" title="Enterprise results. Startup pricing" />
      <div className="flex justify-center">
        <div className="flex gap-3 items-center">
          {PRICING.map(({ key, ...pricing }) => (
            <PricingCard key={key} {...pricing} />
          ))}
        </div>
      </div>
      <Button variant="tetiary" className="text-gray-600 w-full p-4" endContent={<span className="stroke-gray-600">{ArrowRightIcon}</span>}>Compare plans</Button>
    </section>
  )
}

