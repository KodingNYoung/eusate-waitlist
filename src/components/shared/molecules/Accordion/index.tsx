import { AddIcon } from "@/assets/icons";
import {
  Accordion as AccordionBase,
  AccordionItem,
  AccordionProps,
} from "@heroui/accordion";

export type AccordionItem = {
  key: string;
  title: string;
  content: string;
};

type Props = Omit<AccordionProps, "children"> & {
  items: AccordionItem[];
};

export const Accordion = ({ items, ...props }: Props) => {
  return (
    <AccordionBase {...props}>
      {items.map(({ key, title, content }) => (
        <AccordionItem indicator={<div className="bg-gray-50 rounded-full p-2">{AddIcon}</div>} key={key} aria-label={key} title={title}>
          {content}
        </AccordionItem>
      ))}
    </AccordionBase>
  );
};
