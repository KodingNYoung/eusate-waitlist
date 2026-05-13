import { AnimatePresence, motion } from "motion/react";
import { Card } from "./types";
import Typography from "@/components/shared/atoms/Typography";
import { cls } from "@/utils/helpers";
import { ReactElement } from "react";

type CardItemProps = {
  card: Card;
  isActive: boolean;
  onClick?: () => void;
  progressBar: ReactElement;
};

export const ActionCard = ({
  card: { num, title, desc },
  isActive,
  onClick,
  progressBar,
}: CardItemProps) => {
  return (
    <motion.div
      data-active={isActive}
      className={cls(
        "cursor-pointer rounded-2xl transition-colors duration-300 w-full md:w-[437px] overflow-hidden",
        "data-[active=true]:bg-white data-[active=true]:shadow-soft-xsmall",
      )}
    >
      {/* Progress bar */}
      {/* <ProgressBar */}
      {/*   key={`${index}-${timerKey}`} */}
      {/*   active={isActive} */}
      {/*   onComplete={onComplete} */}
      {/* /> */}
      {progressBar}
      <motion.div
        onClick={onClick}
        data-active={isActive}
        whileHover={{ scale: isActive ? 1 : 1.01 }}
        className="py-6 px-6"
      >
        {/* Title row */}
        <div className="flex items-start gap-6">
          <Typography
            variant="semibold-base"
            data-active={isActive}
            className={cls(
              "text-black/40 data-[active=true]:text-gradient transition-colors duration-300",
            )}
            as="span"
          >
            {num}
          </Typography>

          <Typography
            data-active={isActive}
            as="h3"
            variant="semibold-base"
            className={cls(
              "text-black/40 transition-colors duration-300",
              "data-[active=true]:text-black",
            )}
          >
            {title}
          </Typography>
        </div>

        {/* Expandable description */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="desc"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="ml-11 mt-2 leading-[1.55] text-[#666]">{desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
