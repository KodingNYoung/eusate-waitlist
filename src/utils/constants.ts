import z from "zod";
import {
  AddOn,
  CategoryList,
  CompareCategory,
  CompareCategoryKey,
  HelpCenterTab,
  PricingPlan,
} from "./types";
import { ComparePlanCat1, HelpCenterKey, Plan, PublicExtras } from "./enum";

export const MAX_WIDTH = "120px";

export const API_BASEURL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_URL;

export const PLAN_COST = {
  FREE: 0,
  PRO: 129,
  BASIC: 29,
} as const;

export const ROUTES = {
  PRICING: "/pricing",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-and-conditions",
  SATE_AI: "/sate-ai",
  INTEGRATIONS: "/integrations",
  BLOGS: "/blogs",
  ABOUT: "/about",
  DEVSPACE: "/devspace",
  KNOWLEDGE_BASE: "/knowledge-base",
  HELP_CENTER: "/help-center"
} as const;

export const EUSATE_SOCIALS = {
  LINKEDIN: "https://www.linkedin.com/company/eusate/",
  INSTAGRAM: "https://www.instagram.com/eusate_ai/",
  X: "https://x.com/eusate_ai",
};

export const EMAIL_REGEX_PATTERNS =
  /^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|mail\.com|yandex\.com|zoho\.com|protonmail\.com|gmx\.com|me\.com|live\.com$).+$/i;
export const PHONE_REGEX_PATTERN =
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

export const APPLICATION_FORM_FIELDS: Record<
  string,
  {
    label: string;
    hasSpecify: boolean;
    options: string[];
    placeholder?: string;
  }
> = {
  "what-customer-service-challenges-are-you-currently-facing": {
    label: "What customer service challenges are you currently facing?",
    hasSpecify: true,
    options: [
      "Long response times",
      "Inconsistent service quality",
      "High volume overwhelming team",
      "Limited availability",
      "Language barriers",
      "Complex query resolution",
      "Other",
    ],
  },

  "whats-your-monthly-customer-inquiry-volume": {
    label: "What's your monthly customer inquiry volume?",
    hasSpecify: false,
    options: ["Under 100", "100-500", "500-2,000", "2,000-10,000", "10,000+"],
  },

  "what-customer-service-tools-do-you-currently-use": {
    label: "What customer service tools do you currently use?",
    hasSpecify: true,
    options: [],
    placeholder: "Please specify",
  },

  "how-many-customer-service-agentsrepresentatives-do-you-currently-have": {
    label:
      "How many customer service agents/representatives do you currently have?",
    hasSpecify: false,
    options: [
      "No dedicated agents (handled by other staff)",
      "1-2 agents",
      "3-10 agents",
      "11-25 agents",
      "26-50 agents",
      "50+ agents",
      "Fully outsourced to third party",
    ],
  },

  "would-you-be-willing-to-provide-feedback-during-the-beta-period": {
    label: "Would you be willing to provide feedback during the beta period?",
    hasSpecify: false,
    options: [
      "Yes, weekly check-ins",
      "Yes, bi-weekly feedback",
      "Yes, monthly feedback",
      "Minimal feedback only",
      "Prefer not to provide regular feedback",
    ],
  },

  "would-you-be-open-to-being-a-case-study-or-reference-customer-if-the-beta-is-successful":
  {
    label:
      "Would you be open to being a case study or reference customer if the beta is successful?",
    hasSpecify: false,
    options: [
      "Yes, definitely",
      "Possibly, depending on results",
      "Prefer to remain private",
      "Need to discuss internally",
    ],
  },

  "whats-your-expected-timeline-for-making-a-purchasing-decision": {
    label: "What's your expected timeline for making a purchasing decision?",
    hasSpecify: false,
    options: [
      "Within 1 month of beta completion",
      "1-3 months after beta",
      "3-6 months after beta",
      "6+ months after beta",
      "Depends on beta results",
    ],
  },
};

export const betaFormSchema = z.object({
  email: z
    .email("Invalid email address")
    // .regex(EMAIL_REGEX_PATTERNS, {
    //   message: "Only company mails are allowed",
    // })
    .min(1, "Email is a required field"),
  fullname: z
    .string()
    .min(2, "Full name should not be less than 2 characters")
    .min(1, "Full name is a required field"),
  organisation_name: z
    .string()
    .min(2, "Company name should not be less than 2 characters")
    .min(1, "Company name is a required field"),
  organisation_website: z
    .url("Invalid URL format")
    .min(1, "Company wesbite is a required field"),
  organisation_phone: z
    .string()
    .regex(PHONE_REGEX_PATTERN, { message: "Invalid phone number format" })
    .min(1, "Company phone is a required field"),
  role: z.string().min(1, "Role is a required field"),
  ...Object.keys(APPLICATION_FORM_FIELDS).reduce(
    (cumm, curr) => ({
      ...cumm,
      [curr]: z.string().min(1, "This is a required field"),
    }),
    {},
  ),
});
export const waitlistFormSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email is a required field"),
});

export const PRICING: PricingPlan[] = [
  {
    id: 1,
    key: Plan.FREE,
    label: "Free Plan",
    price: PLAN_COST.FREE,
    features: [
      "SATE AI agaent with 80% resolution rate",
      "Unlimited conversations across all channels",
      "2 human agent seats included",
      "Core integrations (Email, Live, Chat, Discord, Whatsapp)",
      "Knowledge Base (up to 2MB documents)",
      "Developer Space (up to 2 functions)",
    ],
    action: () => { },
  },
  {
    id: 2,
    key: Plan.PRO,
    label: "Pro Plan",
    price: PLAN_COST.PRO,
    recomended: true,
    features: [
      "Everthing is Standard",
      "5 human agent seats included",
      "Advanced reporting & custom dashboards",
      "Premium integrations (Whatsapp, Discord, Telegram)",
      "AI Playground with unlimied scenarios",
      "Knowleged Base (unlimited documents)",
      "Priority support with dedicated onboarding",
      "SLA guarantees (99.9% uptime)",
    ],
    action: () => { },
  },
  {
    id: 3,
    key: Plan.BASIC,
    label: "Basic Plan",
    price: PLAN_COST.BASIC,
    features: [
      "SATE AI agaent with 80% resolution rate",
      "Unlimited conversations across all channels",
      "2 human agent seats included",
      "Core integrations (Email, Live, Chat, Discord, Whatsapp)",
      "Knowledge Base (up to 2MB documents)",
      "Developer Space (up to 2 functions)",
    ],
    action: () => { },
  },
];

export const CATEGORY_LIST: CategoryList[] = [
  {
    id: 1,
    key: "cat-1",
    label: "Category",
    items: [
      {
        key: ComparePlanCat1.AI_SUMMARIZE,
        label: "AI Sumaarize",
      },
      {
        key: ComparePlanCat1.FEATURE,
        label: "Feature",
      },
      {
        key: ComparePlanCat1.SHARED_INBOX,
        label: "Shared Inbox",
      },
    ],
  },
  {
    id: 2,
    key: "cat-2",
    label: "Category",
    items: [
      {
        key: ComparePlanCat1.AI_SUMMARIZE,
        label: "AI Sumaarize",
      },
      {
        key: ComparePlanCat1.FEATURE,
        label: "Feature",
      },
      {
        key: ComparePlanCat1.SHARED_INBOX,
        label: "Shared Inbox",
      },
    ],
  },
];

export const COMPARE_PRICING_LIST: {
  id: number;
  key: Plan;
  label: string;
  price: number;
  categories: {
    key: CompareCategoryKey;
    features: { [cat in CompareCategory]: boolean | { value: number } };
  }[];
  action: () => void;
}[] = [
    {
      id: 1,
      key: Plan.BASIC,
      label: "Basic Plan",
      price: PLAN_COST.BASIC,
      categories: [
        {
          key: "cat-1",
          features: {
            [ComparePlanCat1.FEATURE]: true,
            [ComparePlanCat1.SHARED_INBOX]: { value: 50 },
            [ComparePlanCat1.AI_SUMMARIZE]: false,
          },
        },
        {
          key: "cat-2",
          features: {
            [ComparePlanCat1.FEATURE]: true,
            [ComparePlanCat1.SHARED_INBOX]: { value: 50 },
            [ComparePlanCat1.AI_SUMMARIZE]: false,
          },
        },
      ],
      action: () => { },
    },
    {
      id: 2,
      key: Plan.PRO,
      label: "Pro Plan",
      price: PLAN_COST.PRO,
      categories: [
        {
          key: "cat-1",
          features: {
            [ComparePlanCat1.FEATURE]: true,
            [ComparePlanCat1.SHARED_INBOX]: { value: 50 },
            [ComparePlanCat1.AI_SUMMARIZE]: false,
          },
        },
        {
          key: "cat-2",
          features: {
            [ComparePlanCat1.FEATURE]: true,
            [ComparePlanCat1.SHARED_INBOX]: { value: 50 },
            [ComparePlanCat1.AI_SUMMARIZE]: false,
          },
        },
      ],
      action: () => { },
    },
    {
      id: 3,
      key: Plan.FREE,
      label: "Free Plan",
      price: PLAN_COST.FREE,
      categories: [
        {
          key: "cat-1",
          features: {
            [ComparePlanCat1.FEATURE]: true,
            [ComparePlanCat1.SHARED_INBOX]: { value: 50 },
            [ComparePlanCat1.AI_SUMMARIZE]: false,
          },
        },
        {
          key: "cat-2",
          features: {
            [ComparePlanCat1.FEATURE]: true,
            [ComparePlanCat1.SHARED_INBOX]: { value: 50 },
            [ComparePlanCat1.AI_SUMMARIZE]: false,
          },
        },
      ],
      action: () => { },
    },
  ];

export const ADD_ON_LIST: AddOn[] = [
  {
    id: 1,
    src: PublicExtras.SATE_ICON,
    title: "Sate tokens",
    description: "Every AI activity feeds off the sate tokens.",
    price: 4,
    size: "per 1,000,000 tokens",
  },
  {
    id: 2,
    src: PublicExtras.DATABASE_ICON,
    title: "Knowlege Base Space",
    description: "Every AI activity feeds off the sate tokens.",
    price: 4,
    size: "per MB space",
  },
  {
    id: 3,
    src: PublicExtras.AGENT_ICON,
    title: "1 Humber Agent",
    description: "Every AI activity feeds off the sate tokens.",
    price: 4,
    size: "per agent seat",
  },
  {
    id: 4,
    src: PublicExtras.DEVSPACE_ICONS,
    title: "Devspace functions",
    description: "Every AI activity feeds off the sate tokens.",
    price: 4,
    size: "per function",
  },
];

export const HELP_CENTER_QUESTIONS = {
  [HelpCenterKey.GETTING_STARTED]: [
    {
      id: 1,
      key: "q-1",
      question: "How long does implementation take?",
      answer: "It would take about 24hrs",
    },
    {
      id: 2,
      key: "q-2",
      question: "What happens when SATE can't resolve something?",
      answer: "",
    },
    {
      id: 3,
      key: "q-3",
      question: "Do we need technical resource to set up integrations?",
      answer: "",
    },
    {
      id: 4,
      key: "q-4",
      question: "What channels does Eusate support?",
      answer: "",
    },
    {
      id: 5,
      key: "q-5",
      question: "Can SATE autually take actions or just answer questions?",
      answer: "",
    },
    {
      id: 6,
      key: "q-6",
      question: "What's the price model?",
      answer: "",
    },
    {
      id: 7,
      key: "q-7",
      question: "How do you ensure data security and compilance?",
      answer: "",
    },
  ],
  [HelpCenterKey.ACCOUNT_INFORMATION]: [],
};

export const HELP_CENTER_TABS: HelpCenterTab[] = [
  {
    id: 1,
    key: HelpCenterKey.GETTING_STARTED,
    label: "Getting started",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED],
  },
  {
    id: 2,
    key: HelpCenterKey.ACCOUNT_INFORMATION,
    label: "Account information",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.ACCOUNT_INFORMATION],
  },
  {
    id: 3,
    key: HelpCenterKey.ACCOUNT_INFORMATION,
    label: "Category",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED],
  },
  {
    id: 4,
    key: HelpCenterKey.ACCOUNT_INFORMATION,
    label: "Category",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED],
  },
  {
    id: 5,
    key: HelpCenterKey.ACCOUNT_INFORMATION,
    label: "Category",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED],
  },
  {
    id: 6,
    key: HelpCenterKey.ACCOUNT_INFORMATION,
    label: "Category",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.GETTING_STARTED],
  },
];

export const SATE_AI_ACTIONS = [
  {
    id: 1,
    key: "action-1",
    title: "Understand What Customers Actually Mean",
    description:
      "SATE understands intent. It analyzes context, asks clarifying questions, and comprehends what customers are actually trying to accomplish. ",
  },
  {
    id: 2,
    key: "action-2",
    title: "Adapt to Emotional State",
    description: "",
  },
  {
    id: 3,
    key: "action-3",
    title: "Chat and calls with Customers",
    description: "",
  },
  {
    id: 4,
    key: "action-4",
    title: "Actually Solve Problems 🎉",
    description: "",
  },
];

export const DEVSPACE_ACTIONS = [
  {
    id: 1,
    title: "Setup Auth Configuration",
    description: "Connect Developer Space to your business systems by configuring secure authentication."
  },
  {
    id: 2,
    title: "Custom Function Creation",
    description: "Define what actions SATE can perform in your connected systems.",
  },
  {
    id: 3,
    title: "Test in Playground",
    description: "Validate your function works correctly before customers interact with it."
  },
  {
    id: 4,
    title: "Delpy to Live",
    description: "Activate your function for real customer interations."
  }
]

export const KB_HIGHLIGHTS = [
  {
    id: 1,
    title: "Elimate Inconsistency",
    description: "Support teams often provide conflicting answers. Documentation is scattered. The Knowledge Base centralizes support content in one searchable system, ensuring your team accesses consistent information automatically.",
  },
  {
    id: 2,
    title: "Reduce Training Overhead",
    description: "New agents need time to learn products and processes. Seasonal spikes cause rushed training and errors. Knowledge Base gives instant access, while SATE handles tier-one questions, making onboarding hours instead of weeks."
  },
  {
    id: 3,
    title: "Accelerate Product Updates",
    description: "Product launches require updating documentation, training the team, and ensuring everyone remembers changes. SATE updates your Knowledge Base instantly, keeping customer information current without extra coordination."
  },
  {
    id: 4,
    title: "Scale Expertise",
    description: "Your support agent knows every solution. When they're unavailable, customers wait. Knowledge Base captures expertise across your operation. Junior agents access senior knowledge instantly."
  }
]
