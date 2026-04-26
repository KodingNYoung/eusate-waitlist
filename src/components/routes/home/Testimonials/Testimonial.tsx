import Image from "next/image"
import { FC, InternalPath } from "@/utils/types"
import Typography from "@/components/shared/atoms/Typography"

type Props = {
  imgSrc: InternalPath,
  testimony: string,
  name: string,
  role: string,
}

export const Testimonial: FC<Props> = ({ imgSrc, testimony, name, role }) => {
  return (
    <div className="flex gap-6">
      <div className="relative w-[995px] object-cover h-[540px]">
        <Image src={imgSrc} fill alt={name} className="object-cover rounded-[24px]" />
      </div>
      <div className="flex flex-col justify-around">
        <Typography variant="bold-2xl" className="leading-[150%]">&quot;{testimony}&quot;</Typography>
        <div>
          <Typography variant="semibold-lg" className="leading-[150%]">{name}</Typography>
          <Typography className="leading-[150%] text-gray-700">{role}</Typography>
        </div>
      </div>
    </div>
  )
}

