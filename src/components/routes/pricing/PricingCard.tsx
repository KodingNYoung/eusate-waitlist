import { TickCircleIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Chip from "@/components/shared/molecules/Chip";
import { cls } from "@/utils/helpers";
import { FC, InternalPath } from "@/utils/types";
import Link from "next/link";

type Props = {
  label: string;
  price: number;
  redirect: InternalPath;
  features: string[];
  recomended?: boolean;
};

export const PricingCard: FC<Props> = ({
  label,
  price,
  features,
  redirect,
  recomended,
}) => {
  return (
    <div
      data-featured={recomended}
      className={cls(
        "rounded-3xl grid gap-5 p-4 max-w-[392px] bg-gold-50",
        "data-[featured=true]:bg-black",
      )}
    >
      <header
        data-featured={recomended}
        className={cls(
          "rounded-2xl space-y-6 p-8",
          recomended
            ? "bg-[url(/pricing/images/pricing-card-bg.webp)] bg-cover bg-no-repeat bg-center w-full"
            : "bg-white",
        )}
      >
        <Chip
          data-featured={recomended}
          variant="light"
          classNames={{
            base: cls(
              "text-semibold-base",
              "data-[featured=true]:text-white/60",
            ),
          }}
        >
          {label}
        </Chip>
        <Typography
          data-featured={recomended}
          variant="bold-5xl"
          className={"data-[featured=true]:text-white"}
        >
          ${price}
          <span className="text-semibold-base">/per month</span>
        </Typography>
      </header>
      <div className="grid gap-6">
        {features.map((feature, id) => (
          <div key={id} className="flex gap-3">
            <span>{TickCircleIcon}</span>
            <Typography
              data-featured={recomended}
              className={
                "data-[featured=true]:text-gray-200 text-medium-base md:text-medium-lg text-gray-700"
              }
            >
              {feature}
            </Typography>
          </div>
        ))}
      </div>
      <Link href={process.env.NEXT_PUBLIC_BASE_URL + redirect}>
        <Button className="py-3" variant={recomended ? "outlined" : "primary"}>
          {recomended ? "Get started" : "Select plan"}
        </Button>
      </Link>
    </div>
  );
};
