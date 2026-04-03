import { FC } from "@/utils/types"
import { DevIcon } from "@/assets/icons"
import Typography from "@/components/shared/atoms/Typography"

type Props = {
  title: string,
  description: string,
}

export const DevActionCard: FC<Props> = ({ title, description }) => {
  return (
    <div className="grid p-4 rounded-lg bg-white">
      <span>{DevIcon}</span>
      <div className="space-y-4">
        <Typography variant="semibold-lg" className="text-gray-700">{title}</Typography>
        <Typography variant="regular-sm" className="text-gray-400">{description}</Typography>
      </div>
    </div>
  )
}

