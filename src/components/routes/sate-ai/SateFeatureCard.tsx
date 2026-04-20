import Typography from "@/components/shared/atoms/Typography";
import { FC } from "@/utils/types";
import { ReactElement } from "react";

type Props = {
  color?: string;
  icon: ReactElement;
  title: string;
  description: string;
};

export const SateFeatureCard: FC<Props> = ({
  icon,
  title,
  color = "url(#paint0_linear_228_10568)",
  description,
}) => {
  return (
    <div className="bg-white/15 p-8 grid flex-0 gap-4 rounded-[7px] w-[328px] min-h-[185px]">
      <div style={{ fill: color }}>{icon}</div>
      <div className="space-y-2">
        <Typography variant="semibold-lg" className="text-white">
          {title}
        </Typography>
        <Typography variant="regular-sm" className="text-white/70">
          {description}
        </Typography>
      </div>
    </div>
  );
};
