import Typography from "@/components/shared/atoms/Typography"
import { FC } from "@/utils/types"
import { ReactElement } from "react"

type Props = {
  icon: ReactElement,
  title: string,
  description: string,
}

export const SateFeatureCard: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/15 p-8 grid flex-0 gap-4 rounded-[7px] w-[328px] min-h-[185px]">
      <div>{icon}</div>
      <div className="space-y-2">
        <Typography variant="semibold-lg" className="text-white">{title}</Typography>
        <Typography variant="regular-sm" className="text-white/70">{description}</Typography>
      </div>
    </div>
  )
}

