import { cls, truncateWords } from "@/utils/helpers";
import { FC, TWClassNames } from "@/utils/types";
import Typography from "../../shared/atoms/Typography";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { ArrowRightIcon } from "@/assets/icons";

type Slots = "container";
type Variant = "inline" | "page";

type Props = {
  id: string;
  variant?: Variant;
  imgSrc: string;
  title: string;
  summary: string;
  readingSpan: string;
  spotlight?: boolean;
  timestamp: Date;
};

const spotlightVariant: { [slot in Slots]?: TWClassNames } = {
  container: cls("w-full min-w-full h-[351px]"),
};

export const BlogCard: FC<Props> = ({
  id,
  title,
  summary,
  imgSrc,
  variant = "page",
  readingSpan,
  spotlight,
  timestamp,
}) => {
  return (
    <Link
      href={"/blogs/" + id}
      className={cls(
        "border group border-gray-50 w-full min-w-[344px] md:w-[340px] cursor-pointer rounded-2xl p-4 space-y-4 shadow-soft-xxsmall",
        spotlight && spotlightVariant?.container,
      )}
    >
      <div className={cls("relative")}>
        <Image
          src={imgSrc ?? "/images/business-men.webp"}
          width={330}
          height={variant === "page" ? 293 : 223}
          alt={title + "-img"}
          className={cls("w-full h-64 rounded-2xl object-cover")}
        />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-2xl">
          <Typography className="text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
            Read More <span className="stroke-white">{ArrowRightIcon}</span>
          </Typography>
        </div>
      </div>
      <Typography
        data-spotlight={spotlight}
        as="h4"
        className="text-bold-xl data-[spotlight=true]:text-bold-2xl"
      >
        {title}
      </Typography>
      <Typography
        as="p"
        data-spotlight={spotlight}
        className="text-regular-base text-gray-600 data-[spotlight=true]:text-regular-lg"
      >
        {truncateWords(summary, 77)}
      </Typography>
      <div className="space-x-4">
        <Typography
          data-spotlight={spotlight}
          as="span"
          className="text-gray-600 text-regular-base data-[spotlight=true]:text-regular-lg"
        >
          {readingSpan}
        </Typography>
        <Typography
          data-spotlight={spotlight}
          as="span"
          className="text-gray-600 text-regular-base data-[spotlight=true]:text-regular-lg"
        >
          |
        </Typography>
        <Typography
          data-spotlight={spotlight}
          as="span"
          className="text-gray-600 text-regular-base data-[spotlight=true]:text-regular-lg"
        >
          {dayjs(timestamp).format("MMM DD, YYYY")}
        </Typography>
      </div>
    </Link>
  );
};
