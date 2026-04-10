import { Tab, Tabs, TabsProps } from "@heroui/tabs";
import { ReactElement } from "react";

type Tab<K, T> = {
  id: number;
  key: K;
  label: string;
  content: T;
};

type Props<K, T> = Omit<TabsProps, "children" | "classNames"> & {
  tabs: Tab<K, T>[];
  endContent?: ReactElement;
  startContent?: ReactElement;
  classNames?: TabsProps["classNames"];
  children: (content: T) => ReactElement;
};

export const AppTab = <K, T = []>({
  children,
  startContent,
  classNames: { tab, ...classNames },
  endContent,
  tabs,
  ...props
}: Props<K, T>) => {
  return (
    <Tabs {...props}>
      {tabs.map(({ id, content, label }) => (
        <Tab key={id} title={
          <div className="space-x-3">
            {startContent}
            {label}
            {endContent}
          </div>
        }>
          {children(content)}
        </Tab>
      ))}
    </Tabs>
  );
};
