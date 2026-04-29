import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types";

type Props = {
  prev: () => void;
  next: () => void;
  current: number;
};

export const Navigation: FC<Props> = ({ prev, next }) => {
  return (
    <div className="flex justify-between md:justify-start items-center gap-4">
      <Button
        variant="text"
        className={cls(
          "px-4 py-2 transform !bg-black/20 stroke-black rotate-180",
        )}
        onClick={prev}
      >
        {ArrowRightIcon}
      </Button>
      <Button className={cls("px-4 py-2 stroke-white")} onClick={next}>
        {ArrowRightIcon}
      </Button>
    </div>
  );
};
