import { ReactElement } from "react"
import { cls } from "@/utils/helpers"
import { FC, TWClassNames } from "@/utils/types"
import Typography from "@/components/shared/atoms/Typography"

type Slots = "root" | "description" | "score"
type Props = {
  description: string,
  score: number,
  unit: string,
  graph: ReactElement,
  classNames?: { [slot in Slots]?: TWClassNames }
}

export const WeDeliverCardTemplate: FC<Props> = ({ description, graph, score, unit, classNames }) => {
  return (
    <div className={cls("flex justify-center min-w-[349px] min-h-[320px] rounded-[24px] px-4 py-6", classNames?.root)}>
      <div className="space-y-2">
        <div className="space-y-4">
          <Typography variant="semibold-base" className={cls(classNames?.description)}>{description}</Typography>
          <Typography variant="bold-6xl" className={cls(classNames?.score)}>{score}{unit}</Typography>
        </div>
        <div>
          {graph}
        </div>
      </div>
    </div>
  )
}

