import { FC } from "@/utils/types"
import { Tabs } from "@heroui/tabs"

type Tab = {
  key: string,
  title: string,
  content: string,
}
type Props = {
  tabs: Tab[]
}

export const AppTab: FC<Props> = () => {
  return (
    <Tabs>

    </Tabs>
  )
}

