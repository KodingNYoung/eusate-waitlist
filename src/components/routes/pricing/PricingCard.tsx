import { TickCircleIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Chip from "@/components/shared/molecules/Chip";
import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types"

type Props = {
  label: string,
  price: number,
  features: string[],
  recomended?: boolean,
}

export const PricingCard: FC<Props> = ({ label, price, features, recomended }) => {
  return (
    <div data-recomeded={recomended} className={cls("rounded-3xl grid gap-5 p-4 max-w-[392px]", recomended ? "bg-black" : "bg-gold-50")}>
      <header data-recomended={recomended} className={cls("rounded-2xl space-y-6 p-8", recomended ? "bg-[url('/images/pricing-card-bg.png') bg-contain bg-center w-full" : "bg-white")}>
        <Chip variant="light" className="text-semibold-base">{label}</Chip>
        <Typography variant="bold-5xl">${price}<span className="text-semibold-base">/per month</span></Typography>
      </header>
      <div className="grid gap-6">
        {
          features.map((feature, id) => (
            <div key={id} className="flex gap-3">
              <span>{TickCircleIcon}</span>
              <Typography variant="medium-lg" className="text-gray-700">{feature}</Typography>
            </div>
          ))
        }
      </div>
      <Button className="py-3" variant={recomended ? "outlined" : "primary"}>{recomended ? "Get started" : "Select plan"}</Button>
    </div>
  )
}

