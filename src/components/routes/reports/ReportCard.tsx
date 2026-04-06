import Image from "next/image"
import { cls } from "@/utils/helpers"
import { FC, ReportFeature } from "@/utils/types"
import Typography from "@/components/shared/atoms/Typography"

type Props = Omit<ReportFeature, "id">

export const ReportCard: FC<Props> = ({ color, title, description, imgSrc }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cls("py-8 relative overflow-hidden px-16 flex gap-8 items-center rounded-x40 w-[1000px] h-[500px]")}>
      <div className="w-[500px] flex-none space-y-12">
        <Typography as="h3" variant="bold-3xl" className="leading-[125%]">{title}</Typography>
        <Typography as="p" variant="regular-lg" className="text-gray-700">{description}</Typography>
      </div>
      <div className="relative flex-none w-[1200px] h-[400px]">
        <div className="relative w-[700px] h-[700px] object-bottom" >
          <Image src={imgSrc} fill alt={title} />
        </div>
      </div>
    </div>
  )
}

