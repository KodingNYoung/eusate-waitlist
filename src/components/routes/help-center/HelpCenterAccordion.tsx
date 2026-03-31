import { FC } from "@/utils/types"
import { Accordion as AccordionBase, AccordionItem } from "@heroui/accordion"

type Item = {
  key: string,
  title: string[]
  content: string,
}

type Props = {
  items: Item[]
}

export const HelpCenterAccordion: FC<Props> = ({ items }) => {
  return (
    <AccordionBase>
      {
        items.map(({ key, title, content }) => <AccordionItem key={key} aria-label={key} title={title}>{content}</AccordionItem>)
      }
    </AccordionBase>
  )
}
