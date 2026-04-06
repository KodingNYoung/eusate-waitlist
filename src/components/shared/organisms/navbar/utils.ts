import { ROUTES } from "@/utils/constants";
import { ItemType } from "../../molecules/Popups/AppDropdown";

// TYPES
type ExploreItem = {
  id: number;
  label: string;
  items: ItemType[];
};

// CONSTANTS
export const NAV_EXPLORE_LIST: ExploreItem[] = [
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
        link: "/",
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
        label: "Integrations",
        link: ROUTES.INTEGRATIONS,
      },
      {
        key: 3,
        label: "Contact us",
        link: "/",
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
        label: "Blogs",
        link: ROUTES.BLOGS,
      },
    ],
  },
];
