import { z } from "zod";
import { HTMLProps, PropsWithChildren, ReactElement } from "react";
import { ComparePlanCat1, HelpCenterKey, ProductKey } from "./enum";
import { contactFormSchema } from "./schemas";

export type TWClassNames = HTMLProps<HTMLElement>["className"];

export type TypographyVariants =
  | "caption-lg"
  | "regular-xxs"
  | "regular-xs"
  | "regular-sm"
  | "regular-base"
  | "regular-lg"
  | "regular-xl"
  | "regular-2xl"
  | "regular-3xl"
  | "regular-4xl"
  | "regular-5xl"
  | "medium-xxs"
  | "medium-xs"
  | "medium-sm"
  | "medium-base"
  | "medium-lg"
  | "medium-xl"
  | "medium-2xl"
  | "medium-3xl"
  | "medium-4xl"
  | "medium-5xl"
  | "semibold-xxs"
  | "semibold-xs"
  | "semibold-sm"
  | "semibold-base"
  | "semibold-lg"
  | "semibold-xl"
  | "semibold-2xl"
  | "semibold-3xl"
  | "semibold-4xl"
  | "semibold-5xl"
  | "bold-xxs"
  | "bold-xs"
  | "bold-sm"
  | "bold-base"
  | "bold-lg"
  | "bold-xl"
  | "bold-2xl"
  | "bold-3xl"
  | "bold-4xl"
  | "bold-5xl"
  | "bold-6xl"
  | "bold-7xl"
  | "bold-8xl"
  | "bold-9xl";

export type LogoVariants =
  | "icon-gradient"
  | "icon-white"
  | "icon-black"
  | "full-white"
  | "full-gray"
  | "full-black"
  | "full-gradient-white"
  | "full-gradient-black";

export type FC<PropsType = unknown> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown,
  ): ReactElement | null;
  displayName?: string;
};

export type Plan = "free" | "pro" | "basic";
export type CompareCategoryKey = "cat-1" | "cat-2";
export type CompareCategory =
  (typeof ComparePlanCat1)[keyof typeof ComparePlanCat1];
export type CompareCategoryData = {
  id: number;
  key: Plan;
  label: string;
  price: number;
  categories: {
    key: CompareCategoryKey;
    features: { [cat in CompareCategory]: boolean | { value: number } };
  }[];
  action: () => void;
};

export type CategoryList = {
  id: number;
  key: CompareCategoryKey;
  label: string;
  items: { key: CompareCategory; label: string }[];
};
export type PricingPlan = {
  id: number;
  key: Plan;
  label: string;
  price: number;
  redirect: InternalPath;
  features: string[];
  recomended?: boolean;
  action: () => void;
};

export type AddOn = {
  id: number;
  src: string;
  size: string;
  title: string;
  description: string;
  price: number;
};

export type HelpCenterTabKeys = "getting-started" | "account-info";
export type HelpCenterTab = {
  id: number;
  key: HelpCenterKey;
  label: string;
  content: HelpCenterQuestion[];
};
export type HelpCenterQuestion = {
  id: number;
  key: string;
  question: string;
  answer: string;
};
export type SateAiAction = "action-1" | "action-2" | " action-3" | "action-4";

export type Blog = {
  id: string;
  imgSrc: string;
  title: string;
  summary: string;
  readingSpan: string;
  spotlight?: boolean;
  timestamp: Date;
  content: {
    title: string;
    introduction: string;
    subheaders: {
      id: number;
      title: string;
      content: string;
    }[];
  };
};
export type InternalPath = `/${string}`;
export type HexColor = `#${string}`;
export type HDFeature = {
  id: number;
  highlightTitle: string;
  title: string;
  description: string;
  imgSrc: InternalPath;
};
export type ReportFeature = {
  id: number;
  imgSrc: InternalPath;
  title: string;
  color: HexColor;
  description: string;
};
export type ProductsTab = {
  id: number;
  icon: ReactElement;
  key: ProductKey;
  label: string;
  link: InternalPath;
  content: InternalPath;
};
export type Testimonial = {
  id: number;
  imgSrc: InternalPath;
  name: string;
  testimony: string;
  company: string;
  role: string;
  stats: {
    value: string;
    label: string;
  }[];
};
export type ContactForm = z.infer<typeof contactFormSchema>;
