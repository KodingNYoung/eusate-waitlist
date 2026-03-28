import Image from "next/image";
import { FC } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";

type Props = {
  src: string;
  title: string;
  description: string;
  price: number;
  size: string;
};

export const AddOnCard: FC<Props> = ({
  src,
  title,
  description,
  price,
  size,
}) => {
  return (
    <div className="border flex justify-between border-gray-200 rounded-3xl px-6 py-8">
      <div className="flex gap-8">
        <div className="bg-gold-50 flex items-center justify-center rounded-full px-5">
          <Image src={src} width={30} height={30} alt="sate-token-icon" />
        </div>
        <div className="space-y-3">
          <Typography as="h3" variant="bold-2xl">
            {title}
          </Typography>
          <Typography as="p" variant="semibold-base" className="text-gray-400">
            {description}
          </Typography>
        </div>
      </div>
      <div className="flex gap-2">
        <Typography variant="semibold-3xl">${price}</Typography>
        <span className="text-bold-base text-gray-400">{size}</span>
      </div>
    </div>
  );
};
