import Image from "next/image";
import Typography from "@/components/shared/atoms/Typography";
import { FC, IntegrationPricing } from "@/utils/types";

type Props = Omit<IntegrationPricing, "id">;

export const IntegrationPricingCard: FC<Props> = ({
  name,
  icon,
  description,
  price,
}) => {
  return (
    <div className="border-[1px] flex flex-col items-center gap-y-10 border-gray-100 p-8 rounded-x24">
      <div className="flex flex-col items-center gap-y-8">
        <Image width={48} height={48} alt={icon} src={icon} />
        <div className="grid gap-[11px]">
          <Typography
            variant="semibold-2xl"
            className="text-black text-center leading-[150%]"
          >
            {name}
          </Typography>
          <Typography
            variant="regular-base"
            className="text-gray-400 mx-auto text-center leading-[110%]"
          >
            {description}
          </Typography>
        </div>
      </div>
      <Typography variant="semibold-3xl" className="text-black">
        ${price}
      </Typography>
    </div>
  );
};
