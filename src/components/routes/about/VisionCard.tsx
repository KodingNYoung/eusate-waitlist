import Typography from "@/components/shared/atoms/Typography";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { FC } from "@/utils/types";

type Props = {
  animationDelay?: number;
  icon: JSX.Element;
  title: string;
  content: string;
};

export const VisionCard: FC<Props> = ({
  icon,
  title,
  content,
  animationDelay,
}) => {
  return (
    <AnimatedBlock
      variants={fadeVariants}
      delay={animationDelay ?? 1}
      className="bg-[linear-gradient(to_bottom,#FBF7E6_0%,transparent_30%,transparent_70%,#FBF7E6_100%)] px-4 py-8 min-h-[610px] w-full xl:w-[520px] grid rounded-x20"
    >
      <div className="bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FFFFFF_70%,transparent_100%)] h-full px-4 py-12 flex justify-center rounded-x20">
        <div className="w-full md:w-[80%] grid gap-4">
          <div className="grid gap-4">
            <span className="flex md:justify-center">{icon}</span>
            <Typography
              variant="bold-2xl"
              className="md:text-center text-gray-900"
            >
              {title}
            </Typography>
          </div>
          <Typography
            as="p"
            className="text-regular-base md:text-regular-xl md:text-center leading-[180%] text-gray-700"
          >
            {content}
          </Typography>
        </div>
      </div>
    </AnimatedBlock>
  );
};
