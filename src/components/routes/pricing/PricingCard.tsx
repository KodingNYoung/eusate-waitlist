import {
  ArrowRightIcon,
  CloseCircleIcon,
  TickCircleIcon,
} from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Chip from "@/components/shared/molecules/Chip";
import { ROUTES } from "@/utils/constants";
import { cls } from "@/utils/helpers";
import { FC, InternalPath } from "@/utils/types";
import Link from "next/link";

type Props = {
  label: string;
  price: number;
  showCompare?: boolean;
  redirect: InternalPath;
  features: { text: string; checked: boolean }[];
  recomended?: boolean;
};

export const PricingCard: FC<Props> = ({
  label,
  price,
  features,
  redirect,
  recomended,
  showCompare,
}) => {
  return (
    <div
      data-featured={recomended}
      className={cls(
        "rounded-3xl h-fit grid gap-[10px] p-6 w-full max-w-full md:max-w-[322px] bg-gold-50",
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
          className="flex flex-wrap items-end data-[featured=true]:text-white"
        >
          ${price}
          <span className="text-semibold-base text-white-400">/per month</span>
        </Typography>
      </header>
      <div className="grid gap-6 py-6">
        {features.map(({ text, checked }, id) => (
          <div key={id} className="flex gap-3">
            <span>{checked ? TickCircleIcon : CloseCircleIcon}</span>
            <Typography
              data-featured={recomended}
              className={
                "data-[featured=true]:text-gray-200 text-medium-base md:text-medium-lg text-gray-700 leading-[150%]"
              }
            >
              {text}
            </Typography>
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        <Link href={process.env.NEXT_PUBLIC_BASE_URL + redirect}>
          <Button
            className="py-3 w-full"
            variant={recomended ? "outlined" : "primary"}
          >
            {recomended ? "Get started" : "Select plan"}
          </Button>
        </Link>
        {showCompare && (
          <Link href={ROUTES.PRICING + "#cp"} scroll>
            <Button
              variant="tetiary"
              data-featured={recomended}
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
        )}
      </div>
    </div>
  );
};
