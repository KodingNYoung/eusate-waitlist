import { ReactNode } from "react";
import { ROUTES } from "@/utils/constants";
import { TWClassNames } from "@/utils/types";

// TYPES
type Explore = {
  id: number;
  label: string;
  items: ExploreItem[];
};

type ExploreItem = {
  key: number | string;
  label: string;
  icon?: ReactNode;
  className?: TWClassNames;
  disabled?: boolean;
  redirect?: boolean;
  use?: "footer" | "nav" | "footer-nav"; // default = "footer-nav"
  link?: string;
  action?: () => void;
};

// CONSTANTS
export const NAV_EXPLORE_LIST: Explore[] = [
  {
    id: 1,
    label: "Product",
    items: [
      {
        key: 1,
        label: "Knowledge base",
        link: ROUTES.KNOWLEDGE_BASE,
      },
      {
        key: 2,
        label: "Helpdesk",
        link: ROUTES.HELP_DESK,
      },
      {
        key: 3,
        label: "Sate AI",
        link: ROUTES.SATE_AI,
      },
      {
        key: 4,
        label: "Devspace",
        link: ROUTES.DEVSPACE,
      },
      {
        key: 5,
        label: "Reports",
        link: ROUTES.REPORTS,
      },
    ],
  },
  {
    id: 2,
    label: "Company",
    items: [
      {
        key: 1,
        label: "About us",
        link: ROUTES.ABOUT,
      },
      {
        key: 3,
        label: "Integrations",
        link: ROUTES.INTEGRATIONS,
      },
      {
        key: 4,
        label: "Contact us",
        link: ROUTES.CONTACT,
      },
    ],
  },
  {
    id: 3,
    label: "Resources",
    items: [
      {
        key: 1,
        label: "Help center",
        link: ROUTES.HELP_CENTER,
      },
      {
        key: 3,
        label: "Blogs",
        link: ROUTES.BLOGS,
      },
    ],
  },
];

export const FOOTER_EXPLORE_LIST: Explore[] = [
  {
    id: 1,
    label: "Product",
    items: [
      {
        key: 1,
        label: "Knowledge base",
        link: ROUTES.KNOWLEDGE_BASE,
      },
      {
        key: 2,
        label: "Helpdesk",
        link: ROUTES.HELP_DESK,
      },
      {
        key: 3,
        label: "Sate AI",
        link: ROUTES.SATE_AI,
      },
      {
        key: 4,
        label: "Devspace",
        link: ROUTES.DEVSPACE,
      },
      {
        key: 5,
        label: "Reports",
        link: ROUTES.REPORTS,
      },
    ],
  },
  {
    id: 2,
    label: "Company",
    items: [
      {
        key: 1,
        label: "About us",
        link: ROUTES.ABOUT,
      },
      {
        key: 2,
        label: "Pricing",
        use: "footer",
        link: ROUTES.PRICING,
      },
      {
        key: 3,
        label: "Integrations",
        link: ROUTES.INTEGRATIONS,
      },
      {
        key: 4,
        label: "Contact us",
        link: ROUTES.CONTACT,
      },
    ],
  },
  {
    id: 3,
    label: "Resources",
    items: [
      {
        key: 1,
        label: "Help center",
        link: ROUTES.HELP_CENTER,
      },
      {
        key: 2,
        label: "Documentation",
        redirect: true,
        link: "https://docs.eusate.com/modules/devspace/introduction",
      },
      {
        key: 3,
        label: "Blogs",
        link: ROUTES.BLOGS,
      },
    ],
  },
];
