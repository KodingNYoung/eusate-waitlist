import { AddIcon } from "@/assets/icons";
import {
  Accordion as AccordionBase,
  AccordionItem,
  AccordionProps,
} from "@heroui/accordion";
import { ReactElement, ReactNode } from "react";

export type AccordionItem = {
  key: string;
  title: string;
  content: ReactNode | string;
};

type Props = Omit<AccordionProps, "children"> & {
  indicator?: ReactElement;
  items: AccordionItem[];
};

export const Accordion = ({ items, indicator, ...props }: Props) => {
  return (
    <AccordionBase {...props}>
      {items.map(({ key, title, content }) => (
        <AccordionItem
          key={key}
          title={title}
          aria-label={key}
          indicator={indicator ?? AddIndicator}
        >
          {content}
        </AccordionItem>
      ))}
    </AccordionBase>
  );
};

const AddIndicator = () => {
  return <div className="bg-gray-50 rounded-full p-2">{AddIcon}</div>;
};
