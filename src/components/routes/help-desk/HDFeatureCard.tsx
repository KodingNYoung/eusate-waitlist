import Image from "next/image";
import { cls } from "@/utils/helpers";
import { FC, InternalPath } from "@/utils/types"
import Typography from "@/components/shared/atoms/Typography"

type Props = {
  id: number,
  highlightTitle: string,
  title: string,
  description: string,
  imgSrc: InternalPath,
}

export const HDFeatureCard: FC<Props> = ({ id, title, highlightTitle, description, imgSrc }) => {
  return (
    <div className={cls("flex justify-between items-center", id % 2 ? "flex-row" : "flex-row-reverse")}>
      <div className="space-y-12 max-w-[500px]">
        <div>
          <Typography
            as="h2"
            variant="bold-3xl"
            className="bg-[url(/images/kb-text-bg.webp)] bg-cover bg-center bg-clip-text text-transparent"
          >
            {highlightTitle}
          </Typography>
          <Typography as="h2" variant="bold-3xl">
            {title}
          </Typography>
        </div>
        <Typography as="p" variant="regular-sm" className="text-gray-500">{description}</Typography>
      </div>
      <div className={cls("relative overflow-hidden border-4 rounded-3xl border-gray-50 w-[550px] h-[500px]", id % 2 ? "pt-8 pl-8" : "pb-8 pr-8")}>
        <div className="relative w-[1200px] h-[900px] object-bottom">
          <Image src={imgSrc} alt={highlightTitle} fill className={cls(id % 2 === 0 && "object-[right_2%]")} />
        </div>
      </div>
    </div>
  )
}

