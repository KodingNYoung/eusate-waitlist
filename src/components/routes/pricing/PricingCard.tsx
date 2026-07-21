import {
  ArrowRightIcon,
  CloseCircleIcon,
  TickCircleIcon,
} from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { CURRENCY_SYMBOLS, FE_URL, ROUTES } from "@/utils/constants";
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
  convert?: (amount: number) => number;
  symbol?: string;
};

export const PricingCard: FC<Props> = ({
  label,
  price,
  features,
  redirect,
  recomended,
  showCompare,
  convert,
  symbol,
}) => {
  return (
    <div
      data-featured={recomended}
      className={cls(
        "rounded-3xl h-fit grid gap-[10px] p-5 w-full max-w-full md:max-w-[322px] bg-gold-50",
        "data-[featured=true]:bg-black group",
      )}
    >
      <header
        className={cls(
          "rounded-2xl space-y-6 p-8",
          recomended
            ? "bg-[url(/pricing/images/pricing-card-bg.webp)] bg-cover bg-no-repeat bg-center w-full"
            : "bg-white",
        )}
      >
        <Typography className="text-semibold-base text-gray-700 group-data-[featured=true]:text-white/60">
          {label}
        </Typography>
        <Typography
          variant="bold-4xl"
          className="flex flex-col items-start group-data-[featured=true]:text-white"
        >
          {symbol || CURRENCY_SYMBOLS.USD}
          {(convert ? convert(price) : price).toLocaleString("en-US")}
          <span className="text-semibold-base text-white-400">per month</span>
        </Typography>
      </header>
      <div className="grid gap-6 py-6">
        {features.map(({ text, checked }, id) => (
          <div key={id} className="flex gap-3">
            <span>{checked ? TickCircleIcon : CloseCircleIcon}</span>
            <Typography
              className={
                "group-data-[featured=true]:text-gray-200 text-medium-sm md:text-medium-base text-gray-700 leading-[150%]"
              }
            >
              {text}
            </Typography>
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        <Link href={FE_URL + redirect}>
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
              className="text-gray-600 w-full p-4 group-data-[featured=true]:text-white group-data-[featured=true]:hover:!bg-transparent"
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
