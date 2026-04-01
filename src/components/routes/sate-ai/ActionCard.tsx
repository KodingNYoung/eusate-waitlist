import Typography from "@/components/shared/atoms/Typography"
import { cls } from "@/utils/helpers"
import { Progress } from "@heroui/progress"

type Props = {
  id: number,
  title: string,
  description: string,
  isProgress?: boolean,
}

export const ActionCard = ({ id, title, description, isProgress }: Props) => {
  return (
    <div data-active={isProgress} className={cls("flex flex-col p-4", "data-[active=true]:bg-white")}>
      <Progress className="absolute top-0 w-[400px]" value={70} color="success" />
      <div className="flex gap-4">
        <Typography
          variant="semibold-base"
          data-active={isProgress}
          className={cls("text-black/40 data-[active=true]:text-gradient")}
          as="span"
        >
          0{id}.
        </Typography>
        <div className="space-y-4">
          <Typography as="h3" variant="semibold-base" className="text-black/40">{title}</Typography>
          {isProgress && <Typography>{description}</Typography>}
        </div>
      </div>
    </div>
  )
}


