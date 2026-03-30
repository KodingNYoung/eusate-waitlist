
import { FC } from "@/utils/types"
import { Accordion as AccordionBase, AccordionItem } from "@heroui/accordion"

export type AccordionItem = {
  key: string,
  title: string,
  content: string,
}

type Props = {
  items: AccordionItem[]
}
export const Accordion: FC<Props> = ({ items }) => {
  return (
    <AccordionBase>
      {
        items.map(({ key, title, content }) => <AccordionItem key={key} aria-label={key} title={title}>{content}</AccordionItem>)
      }
    </AccordionBase>
  )
}

