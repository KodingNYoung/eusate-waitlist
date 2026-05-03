import { FC, TWClassNames } from "@/utils/types";
import { DevIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import { cls } from "@/utils/helpers";

type Slots = "root";

type Props = {
  title: string;
  description: string;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const DevActionCard: FC<Props> = ({
  title,
  description,
  classNames,
}) => {
  return (
    <div
      className={cls(
        "grid items-between p-4 gap-4 rounded-lg bg-white min-h-[219px]",
        classNames?.root,
      )}
    >
      <span>{DevIcon}</span>
      <div className="space-y-4">
        <Typography variant="semibold-lg" className="text-gray-700">
          {title}
        </Typography>
        <Typography variant="regular-sm" className="text-gray-400">
          {description}
        </Typography>
      </div>
    </div>
  );
};
