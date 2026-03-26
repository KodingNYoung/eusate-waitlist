import { ItemType } from "../../molecules/Popups/AppDropdown"

// TYPES
type ExploreItem = {
  id: number,
  label: string,
  items: ItemType[]
}

// CONSTANTS
export const EXPLORE_LIST: ExploreItem[] = [
  {
    id: 1,
    label: "Product",
    items: [
      {
        key: 1,
        label: "Knowlodge base",
        link: "",
      },
      {
        key: 2,
        label: "Helpdesk",
        link: "",
      },
      {
        key: 3,
        label: "Sate AI",
        link: "",
      },
      {
        key: 4,
        label: "Devspace",
        link: "",
      },
      {
        key: 5,
        label: "Reports",
        link: "",
      },
    ]
  },
  {
    id: 2,
    label: "Company",
    items: [
      {
        key: 1,
        label: "About us",
        link: ""
      },
      {
        key: 2,
        label: "Integrations",
        link: ""
      },
      {
        key: 3,
        label: "Contact us",
        link: ""
      }
    ]
  },
  {
    id: 3,
    label: "Resources",
    items: [
      {
        key: 1,
        label: "Help center",
        link: ""
      },
      {
        key: 2,
        label: "Blogs",
        link: ""
      }
    ]
  }
]
