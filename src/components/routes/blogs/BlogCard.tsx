import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types";
import Typography from "../../shared/atoms/Typography";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  id: string;
  imgSrc: string;
  title: string,
  summary: string,
  readingSpan: string,
  spotlight?: boolean,
  timestamp: Date,
}

export const BlogCard: FC<Props> = ({ id, title, summary, readingSpan, spotlight, timestamp }) => {
  return (
    <Link href={"/blogs/" + id} className={cls("border group border-gray-50 min-w-[344px] cursor-pointer rounded-2xl p-4 space-y-4 shadow-soft-xxsmall", spotlight ? "w-full max-h-[351px]" : "max-w-[304px]")}>
      <div className={cls("relative",)}>
        <Image src={"/images/business-men.webp"} width={330} height={293} alt={title + "-img"} className={cls("w-full h-64 rounded-2xl", spotlight ? "object-cover " : "object-cover")} />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-2xl">
          <Typography className="text-white opacity-0 group-hover:opacity-100 transition">
            Read More
          </Typography>
        </div>
      </div>
      <Typography as="h4" variant="bold-2xl">{title}</Typography>
      <Typography as="p" variant="regular-lg" className="text-gray-600">{summary}</Typography>
      <div className="space-x-4">
        <Typography as="span" className="text-gray-600">{readingSpan}</Typography>
        <Typography as="span" className="text-gray-600">|</Typography>
        <Typography as="span" className="text-gray-600">{dayjs(timestamp).format("MMM DD, YYYY")}</Typography>
      </div>
    </Link>
  )
}
