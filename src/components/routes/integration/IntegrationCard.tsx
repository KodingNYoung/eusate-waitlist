import Image from "next/image";
import { FC } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";

type Props = {
  icon: string;
  name: string;
  description: string;
};
const IntegrationCard: FC<Props> = ({ icon, name, description }) => {
  return (
    <section className="flex justify-center border-1 border-gray-100 rounded-x20 py-6 w-full max-w-[332.67px]">
      <div className="flex flex-col items-center justify-between w-[83%]">
        <Image width={80} height={80} alt={icon} src={icon} />
        <div className="grid gap-2">
          <Typography variant="semibold-xl" className="text-black text-center">
            {name}
          </Typography>
          <Typography
            variant="regular-base"
            className="text-gray-500 mx-auto text-center"
          >
            {description}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default IntegrationCard;
