import { ReactElement } from "react";
import { cls } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";

type Slots = "root" | "description" | "score";
type Props = {
  description: string;
  score: number | ReactElement;
  unit: string;
  graph: ReactElement;
  classNames?: { [slot in Slots]?: TWClassNames };
};

export const WeDeliverCardTemplate: FC<Props> = ({
  description,
  graph,
  score,
  unit,
  classNames,
}) => {
  return (
    <div
      className={cls(
        "flex justify-center w-full md:w-[349px] h-[320px] overflow-hidden rounded-[24px] px-4 py-8",
        classNames?.root,
      )}
    >
      <div className="space-y-2">
        <div className="space-y-4">
          <Typography
            variant="semibold-base"
            className={cls(classNames?.description)}
          >
            {description}
          </Typography>
          <div className={cls("text-bold-6xl", classNames?.score)}>
            {score}
            {unit}
          </div>
        </div>
        <div className="w-full">{graph}</div>
      </div>
    </div>
  );
};
