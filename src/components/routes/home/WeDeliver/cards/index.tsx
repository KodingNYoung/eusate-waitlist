import { ReactElement } from "react";
import { cls } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import Typography from "@/components/shared/atoms/Typography";
import { motion } from "motion/react";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cls(
        "flex justify-center w-full md:w-[349px] h-[320px] overflow-hidden rounded-[24px] px-6 py-8",
        classNames?.root,
      )}
    >
      <div className="space-y-2 w-full">
        <div className="space-y-4">
          <Typography
            variant="semibold-base"
            className={cls(classNames?.description)}
          >
            {description}
          </Typography>
          <div
            className={cls("text-bold-4xl md:text-bold-6xl", classNames?.score)}
          >
            {score}
            {unit}
          </div>
        </div>
        <div className="w-full mx-auto relative">{graph}</div>
      </div>
    </motion.div>
  );
};
