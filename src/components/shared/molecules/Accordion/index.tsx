
import { Accordion as AccordionBase, AccordionItem, AccordionProps } from "@heroui/accordion"

export type AccordionItem = {
  key: string,
  title: string,
  content: string,
}

type Props = Omit<AccordionProps, "children"> & {
  items: AccordionItem[];
}

export const Accordion = ({ items }: Props) => {
  return (
    <AccordionBase>
      {
        items.map(({ key, title, content }) => <AccordionItem key={key} aria-label={key} title={title}>{content}</AccordionItem>)
      }
    </AccordionBase>
  )
}

