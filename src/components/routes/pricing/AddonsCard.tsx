import Image from "next/image";
import { FC } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";

type Props = {
  src: string;
  title: string;
  description: string;
  price: number;
  size: string;
  convert: (amount: number) => number;
  symbol: string;
};

export const AddOnCard: FC<Props> = ({
  src,
  title,
  description,
  price,
  size,
  convert,
  symbol,
}) => {
  return (
    <div className="border flex flex-wrap gap-12 md:gap-8 justify-between border-gray-200 rounded-3xl px-6 py-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="bg-gold-50 flex items-center w-[68px] h-[68px] justify-center rounded-full px-5">
          <Image
            priority
            src={src}
            width={30}
            height={30}
            alt="sate-token-icon"
          />
        </div>
        <div className="space-y-3">
          <Typography as="h3" className="text-bold-base md:bold-2xl">
            {title}
          </Typography>
          <Typography
            as="p"
            className="text-gray-400 text-semibold-sm md:text-semibold-base max-w-[500px]"
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Typography className="text-semibold-xl md:text-semibold-3xl">
          {symbol}
          {convert(price).toLocaleString("en-US")}
        </Typography>
        <span className="text-bold-sm md:text-bold-base text-gray-400">
          {size}
        </span>
      </div>
    </div>
  );
};
