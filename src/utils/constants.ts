import z from "zod";
import {
  AddOn,
  Blog,
  CategoryList,
  CompareCategoryData,
  HDFeature,
  HelpCenterTab,
  IntegrationPricing,
  PricingPlan,
  ProductsTab,
  ReportFeature,
} from "./types";
import {
  ComparePlanCat1,
  Currency,
  HelpCenterKey,
  Plan,
  PlanLabel,
  ProductKey,
  PublicExtras,
} from "./enum";
import {
  CodeLinearIcon,
  KeyFeatureIcon,
  LogoIcon,
  // ReportIcon,
} from "@/assets/icons";

export const MAX_WIDTH = "120px";
export const MOBILE_WIDTH = "(max-width: 550px)";

export const API_BASEURL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_URL ?? "";
export const FE_URL = process.env.NEXT_PUBLIC_FE_URL ?? "";
export const EUSATE_API_KEY = process.env.NEXT_PUBLIC_EUSATE_API_KEY ?? "";

export const PLAN_COST = {
  FREE: 0,
  BASIC: 4.99,
  PREMIUM: 14.99,
  PRO: 49.99,
} as const;

export const ROUTES = {
  PRICING: "/pricing",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-and-condition",
  DOCUMENTATION: "/documentation",
  SATE_AI: "/sate-ai",
  INTEGRATIONS: "/integrations",
  BLOGS: "/blogs",
  ABOUT: "/about",
  DEVSPACE: "/dev-space",
  HELP_DESK: "/helpdesk",
  KNOWLEDGE_BASE: "/knowledge-base",
  HELP_CENTER: "/help-center",
  REPORTS: "/reports",
  PLAYGROUND: "/playground",
  CONTACT: "/contact",
} as const;

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  [Currency.USD]: "$",
  [Currency.NGN]: "₦",
};

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
    label: PlanLabel.FREE,
    price: PLAN_COST.FREE,
    redirect: "/sign-up",
    features: [
      { text: "Chat SDK", checked: true },
      { text: "Playground access", checked: true },
      { text: "AI chat monitoring", checked: true },
      { text: "1 agent seat", checked: true },
      { text: "50K S8 tokens", checked: true },
      { text: "512 KB knowledge base", checked: true },
      { text: "No copilot messages", checked: false },
      { text: "No saved responses", checked: false },
      { text: "No AI call", checked: false },
      { text: "No add-ons", checked: false },
    ],
    action: () => {},
  },

  {
    id: 2,
    key: Plan.BASIC,
    label: PlanLabel.BASIC,
    price: PLAN_COST.BASIC,
    redirect: "/sign-up",
    features: [
      { text: "Chat SDK", checked: true },
      { text: "Playground access", checked: true },
      { text: "AI chat monitoring", checked: true },
      { text: "1 agent seat", checked: true },
      { text: "200K S8 tokens", checked: true },
      { text: "2 MB knowledge base", checked: true },
      { text: "5 copilot messages", checked: true },
      { text: "Saved responses", checked: true },
      { text: "5 Devspace functions", checked: true },
      { text: "Add-ons", checked: true },
      { text: "No AI calls", checked: false },
    ],
    action: () => {},
  },

  {
    id: 3,
    key: Plan.PREMINUM,
    label: PlanLabel.PREMINUM,
    price: PLAN_COST.PREMIUM,
    redirect: "/sign-up",
    features: [
      { text: "Chat SDK", checked: true },
      { text: "Playground access", checked: true },
      { text: "AI chat monitoring", checked: true },
      { text: "1 agent seat", checked: true },
      { text: "1M S8 tokens", checked: true },
      { text: "5 MB knowledge base", checked: true },
      { text: "20 copilot messages", checked: true },
      { text: "Saved responses", checked: true },
      { text: "10 Devspace functions", checked: true },
      { text: "AI call (5 mins per session)", checked: true },
      { text: "Add-ons", checked: true },
    ],
    action: () => {},
  },

  {
    id: 4,
    key: Plan.PRO,
    label: PlanLabel.PRO,
    price: PLAN_COST.PRO,
    redirect: "/sign-up",
    recomended: true,
    features: [
      { text: "Chat SDK", checked: true },
      { text: "Playground access", checked: true },
      { text: "AI chat monitoring", checked: true },
      { text: "1 agent seat", checked: true },
      { text: "10M S8 tokens", checked: true },
      { text: "20 MB knowledge base", checked: true },
      { text: "Unlimited copilot messages", checked: true },
      { text: "Saved responses", checked: true },
      { text: "20 Devspace functions", checked: true },
      { text: "AI call (5 mins per session)", checked: true },
      { text: "Add-ons", checked: true },
    ],
    action: () => {},
  },
];

export const CATEGORY_LIST: CategoryList[] = [
  {
    id: 1,
    key: "cat-1",
    label: "Platform Essentials",
    items: [
      {
        key: ComparePlanCat1.HEADER,
        label: "Platform Essentials",
      },
      {
        key: ComparePlanCat1.FEATURE,
        label: "Knowledge Base Storage",
        tooltip:
          "Space to store your docs, FAQs, and files so your AI can pull accurate answers from them.",
      },
      {
        key: ComparePlanCat1.SHARED_INBOX_1,
        label: "Chat SDK",
        tooltip:
          "A code toolkit for embedding the Eusate chat widget on your own website or app.",
      },
      {
        key: ComparePlanCat1.AI_SUMMARIZE,
        label: "Playground",
        tooltip:
          "A private space to test and fine-tune your AI assistant before it goes live for customers.",
      },
    ],
  },
  {
    id: 2,
    key: "cat-2",
    label: "Team & Workflow",
    items: [
      {
        key: ComparePlanCat1.HEADER,
        label: "Team & Workflow",
      },
      {
        key: ComparePlanCat1.FEATURE,
        label: "Human Agent Seats",
        tooltip:
          "Number of teammates who can log in and chat with customers directly.",
      },
      {
        key: ComparePlanCat1.SHARED_INBOX_1,
        label: "Saved Responses",
        tooltip:
          "Ready-made replies your team can drop into a chat instead of retyping the same answer.",
      },
      {
        key: ComparePlanCat1.AI_SUMMARIZE,
        label: "AI Chat Monitoring",
        tooltip:
          "Your human agents can watch AI conversations live and step in at any time.",
      },
    ],
  },
  {
    id: 3,
    key: "cat-3",
    label: "AI & Automation",
    items: [
      {
        key: ComparePlanCat1.HEADER,
        label: "AI & Automation",
      },
      {
        key: ComparePlanCat1.FEATURE,
        label: "AI Tokens",
        tooltip:
          "The 'fuel' your AI uses to read and respond to messages — longer conversations use more tokens.",
      },
      {
        key: ComparePlanCat1.SHARED_INBOX_1,
        label: "Copilot Support",
        tooltip:
          "AI-suggested replies your agents can use while chatting, capped at this many messages per ticket.",
      },
      {
        key: ComparePlanCat1.AI_SUMMARIZE,
        label: "AI Call",
        tooltip:
          "Lets your AI assistant handle live voice calls, up to 5 minutes per session.",
      },
      {
        key: ComparePlanCat1.SHARED_INBOX_2,
        label: "Devspace Functions",
        tooltip:
          "Custom functions you can write to connect Eusate to your own tools and automate workflows.",
      },
    ],
  },
  {
    id: 4,
    key: "cat-4",
    label: "Flexibility",
    items: [
      {
        key: ComparePlanCat1.HEADER,
        label: "Flexibility",
      },
      {
        key: ComparePlanCat1.FEATURE,
        label: "Add-ons",
        tooltip:
          "Whether you can buy extra storage, seats, tokens, or functions beyond your plan's limits.",
      },
    ],
  },
];

export const COMPARE_PRICING_LIST: CompareCategoryData[] = [
  {
    id: 1,
    key: Plan.FREE,
    label: PlanLabel.FREE,
    price: PLAN_COST.FREE,
    categories: [
      {
        key: "cat-1",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "512KB" },
          [ComparePlanCat1.SHARED_INBOX_1]: false,
          [ComparePlanCat1.AI_SUMMARIZE]: { details: "Full Access" },
          // [ComparePlanCat1.SHARED_INBOX_2]: { details: null },
        },
      },
      {
        key: "cat-2",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "1 free seat" },
          [ComparePlanCat1.SHARED_INBOX_1]: false,
          [ComparePlanCat1.AI_SUMMARIZE]: true,
          // [ComparePlanCat1.SHARED_INBOX_2]: { details: null },
        },
      },
      {
        key: "cat-3",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "50K" },
          [ComparePlanCat1.SHARED_INBOX_1]: { details: "0 msgs/ticket" },
          [ComparePlanCat1.AI_SUMMARIZE]: false,
          [ComparePlanCat1.SHARED_INBOX_2]: { details: "0" },
          // [ComparePlanCat1.SHARED_INBOX_3]: { details: null},
        },
      },
      {
        key: "cat-4",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "Disallowed" },
        },
      },
    ],
    action: () => {},
  },
  {
    id: 2,
    key: Plan.BASIC,
    label: PlanLabel.BASIC,
    price: PLAN_COST.BASIC,
    categories: [
      {
        key: "cat-1",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "2MB" },
          [ComparePlanCat1.SHARED_INBOX_1]: true,
          [ComparePlanCat1.AI_SUMMARIZE]: { details: "Full Access" },
        },
      },
      {
        key: "cat-2",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "1 free seat" },
          [ComparePlanCat1.SHARED_INBOX_1]: true,
          [ComparePlanCat1.AI_SUMMARIZE]: true,
        },
      },
      {
        key: "cat-3",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "200K" },
          [ComparePlanCat1.SHARED_INBOX_1]: { details: "5 msgs/ticket" },
          [ComparePlanCat1.AI_SUMMARIZE]: false,
          [ComparePlanCat1.SHARED_INBOX_2]: { details: "5" },
          [ComparePlanCat1.SHARED_INBOX_3]: { details: "0" },
        },
      },
      {
        key: "cat-4",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "Allowed" },
        },
      },
    ],
    action: () => {},
  },
  {
    id: 3,
    key: Plan.PREMINUM,
    label: PlanLabel.PREMINUM,
    price: PLAN_COST.PREMIUM,
    categories: [
      {
        key: "cat-1",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "5MB" },
          [ComparePlanCat1.SHARED_INBOX_1]: true,
          [ComparePlanCat1.AI_SUMMARIZE]: { details: "Full Access" },
        },
      },
      {
        key: "cat-2",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "1 free seat" },
          [ComparePlanCat1.SHARED_INBOX_1]: true,
          [ComparePlanCat1.AI_SUMMARIZE]: true,
        },
      },
      {
        key: "cat-3",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "1M" },
          [ComparePlanCat1.SHARED_INBOX_1]: { details: "20 msgs/ticket" },
          [ComparePlanCat1.AI_SUMMARIZE]: { details: "5 min/session" },
          [ComparePlanCat1.SHARED_INBOX_2]: { details: "10" },
        },
      },
      {
        key: "cat-4",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "Allowed" },
        },
      },
    ],
    action: () => {},
  },
  {
    id: 3,
    key: Plan.PRO,
    label: "Pro Plan",
    price: PLAN_COST.PRO,
    categories: [
      {
        key: "cat-1",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "20MB" },
          [ComparePlanCat1.SHARED_INBOX_1]: true,
          [ComparePlanCat1.AI_SUMMARIZE]: { details: "Full Access" },
        },
      },
      {
        key: "cat-2",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "1 free seat" },
          [ComparePlanCat1.SHARED_INBOX_1]: true,
          [ComparePlanCat1.AI_SUMMARIZE]: true,
        },
      },
      {
        key: "cat-3",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "10M" },
          [ComparePlanCat1.SHARED_INBOX_1]: { details: "Unlimited" },
          [ComparePlanCat1.AI_SUMMARIZE]: { details: "5 min/session" },
          [ComparePlanCat1.SHARED_INBOX_2]: { details: "20" },
        },
      },
      {
        key: "cat-4",
        features: {
          [ComparePlanCat1.HEADER]: { details: null },
          [ComparePlanCat1.FEATURE]: { details: "Allowed" },
        },
      },
    ],
    action: () => {},
  },
];

export const ADD_ON_LIST: AddOn[] = [
  {
    id: 1,
    src: PublicExtras.SATE_ICON,
    title: "Sate tokens",
    description: "Every AI activity feeds off the sate tokens.",
    price: 4,
    size: "per 1M S8 tokens",
  },
  {
    id: 2,
    src: PublicExtras.DATABASE_ICON,
    title: "Knowlege Base Space",
    description: "Every AI activity feeds off the sate tokens.",
    price: 2,
    size: "per 5MB",
  },
  {
    id: 3,
    src: PublicExtras.AGENT_ICON,
    title: "1 Humber Agent",
    description: "Every AI activity feeds off the sate tokens.",
    price: 4,
    size: "per agent",
  },
  {
    id: 4,
    src: PublicExtras.DEVSPACE_ICONS,
    title: "Devspace functions",
    description: "Every AI activity feeds off the sate tokens.",
    price: 0.5,
    size: "per function",
  },
];

export const HELP_CENTER_QUESTIONS = {
  [HelpCenterKey.GETTING_STARTED]: [
    {
      id: 1,
      key: "q-1",
      question: "What is EUSATE?",
      answer: `
EUSATE is a B2B customer support service company that provides AI-powered customer support solutions to businesses across all sectors. We operate as an AI-first company, meaning artificial intelligence — specifically our AI system called SATE — is at the core of our service delivery. We take full ownership of your customer support operations so you can focus on running your business.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What is SATE?",
      answer: `
SATE is EUSATE's proprietary AI customer support agent. It acts as your first line of intelligent support — it attempts to resolve all customer issues before escalating to a human agent. SATE isn't just another chatbot; it can process refunds, track shipments, update account settings, check inventory, and more — not just send a link to your FAQ.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "Who is EUSATE built for?",
      answer: `
EUSATE is built for startups and SMBs that need enterprise-grade customer support without the complexity or heavy price tag. We focus on the unique needs of lean teams, giving startups and SMEs the same powerful tools as enterprises. We are sector-agnostic, serving any business that requires customer support.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "How quickly can I get started?",
      answer: `
EUSATE is designed for a fast time-to-value. Integration typically takes hours, not weeks, with an impact on support efficiency from day one. Most customers are live and handling customers within 2-3 weeks following a structured implementation journey: Week 1 for integration and setup, Weeks 2-3 for beta testing and refinement, and Week 4+ for full launch.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "What does the implementation journey look like?",
      answer: `
Phase 1 (Week 1): Set up API/SDK with your existing endpoints, configure Developer Space tools, upload initial knowledge base content, and test SATE in the playground environment. Phase 2 (Weeks 2-3): Deploy to a small user group, monitor real-time interactions, refine AI responses and escalation rules, and train your team on helpdesk features. Phase 3 (Week 4+): Roll out to all customers, enable all channel integrations, implement advanced analytics, and establish a regular optimization cadence.
      `,
    },
    {
      id: 6,
      key: "q-6",
      question: "How do I access EUSATE?",
      answer: `
You can access the EUSATE platform through the web application at app.eusate.com. From the dashboard you can manage your knowledge base, configure DevSpace, monitor the helpdesk in real-time, run playground tests, and access analytics. Technical integration with your systems is done via the SDK or API.
      `,
    },
  ],

  [HelpCenterKey.SATE_AI_CAPABILITIES]: [
    {
      id: 1,
      key: "q-1",
      question: "What can SATE actually do for my customers?",
      answer: `
SATE handles a wide range of customer support tasks autonomously. It can answer product and service questions, process refunds, track orders, update account information, check inventory, manage billing inquiries, handle subscription changes, and more — all without human intervention. For example, when a customer asks 'Where is my order?', SATE can access your order management system, retrieve the status, and provide a comprehensive update including expected delivery date.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "Does SATE replace my human support agents entirely?",
      answer: `
No. EUSATE is about the right AI-human balance, not replacing humans entirely. SATE handles everything first and attempts to resolve all customer issues, but escalates intelligently when human intervention is needed. Human agents get a seamless handoff, full conversation context, and an Agent Copilot powered by AI to help them resolve escalated tickets faster.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "How does SATE know about my business?",
      answer: `
SATE learns your business through the Knowledge Base. You can upload your documentation, link your websites and blogs, and write custom articles. SATE is trained on your specific context, documentation, and processes — it finds the right answer, not just the right article.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "What channels does SATE support?",
      answer: `
SATE operates across multiple communication channels including web chat (embedded widgets), email, WhatsApp, Discord, Slack, Twitter/X, Facebook, Instagram, LinkedIn, and mobile applications. You can meet your customers wherever they are with consistent support across all touchpoints.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "How does SATE handle escalations?",
      answer: `
Escalation rules are configurable — you decide when human intervention is needed. SATE uses priority intelligence to automatically prioritize tickets based on issue complexity. When a conversation is escalated, agents can perform a seamless takeover, picking up exactly where SATE left off with full conversation history and customer context available.
      `,
    },
    {
      id: 6,
      key: "q-6",
      question: "Can SATE detect customer sentiment?",
      answer: `
Yes. SATE includes sentiment tracking that monitors customer mood throughout interactions. This helps surface frustrated or upset customers early so agents can intervene proactively. The helpdesk provides real-time sentiment visibility across all ongoing conversations.
      `,
    },
    {
      id: 7,
      key: "q-7",
      question: "What happens if SATE encounters a bug or widespread issue?",
      answer: `
SATE proactively detects potential system bugs when customer interaction patterns indicate a widespread issue. It automatically reports these to your designated channels — Slack, Discord, or Google Sheets — so your engineering team can be alerted without delay.
      `,
    },
  ],

  [HelpCenterKey.KNOWLEDGE_BASE_MANAGEMENT]: [
    {
      id: 1,
      key: "q-1",
      question: "What is the Knowledge Base?",
      answer: `
The Knowledge Base is where SATE gets its intelligence about your business. It supports multi-source training — you can upload documents, link websites and blogs, and write custom articles directly in the platform. It keeps content dynamic and fresh as your product evolves, and uses smart retrieval so SATE finds the right answer, not just the right article.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What types of content can I add to the Knowledge Base?",
      answer: `
You can add content from multiple sources: upload documents directly, link websites and blogs via URL (including RSS feed integration for automatic blog post inclusion), and create custom articles using the built-in rich text editor. The editor supports headers, lists, tables, media embeds, and collaborative editing with version history.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "Does the Knowledge Base stay up to date automatically?",
      answer: `
Yes. The system supports Content Freshness Tracking, which monitors web content for updates and changes. RSS Feed Integration automatically incorporates new blog posts. You can also use the built-in review reminders and version history to ensure content stays accurate and current as your product evolves.
      `,
    },
  ],
  [HelpCenterKey.DEVSPACE]: [
    {
      id: 1,
      key: "q-1",
      question: "What is DevSpace?",
      answer: `
DevSpace enables SATE to go beyond knowledge base responses by executing custom functions that interact with your infrastructure. Instead of escalating complex requests to humans, SATE can perform actions directly through your APIs — like processing a refund, tracking an order, or updating account settings. It is the feature that connects SATE to your systems so it can actually solve problems, not just provide answers.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "Do I need to be a developer to use DevSpace?",
      answer: `
No. DevSpace is designed with a No-Code Setup so you can configure complex integrations without technical overhead. It includes a visual workflow builder with a drag-and-drop interface, pre-built connectors to popular business platforms, and integration templates for common scenarios like e-commerce, CRM, and financial systems.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "What kinds of functions can I build in DevSpace?",
      answer: `
You can create any HTTP endpoint that SATE can call to perform an action. Common examples include: get_order (retrieve order details), process_refund (initiate a refund), track_shipment (get delivery updates), update_account (modify customer account settings), check_inventory (verify product availability), and manage_subscription (handle subscription changes and cancellations). If you can describe the action, DevSpace can be configured to execute it.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "How does DevSpace authenticate with my APIs?",
      answer: `
DevSpace supports multiple authentication methods including OAuth 2.0, API Key Management (with secure storage and rotation), Token-Based Authentication, and Certificate-Based Security (SSL/TLS). You configure how SATE authenticates with your protected endpoints once, and it handles the rest going forward.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "What API types does DevSpace support?",
      answer: `
DevSpace supports REST APIs (with full HTTP method support), GraphQL for efficient data querying, Webhooks for real-time event-driven integrations, SOAP services for legacy system support, and Custom Protocol Support for proprietary communication protocols.
      `,
    },
    {
      id: 6,
      key: "q-6",
      question: "Can I walk through a real example of how DevSpace works?",
      answer: `
Yes. Consider a refund request: (1) A customer requests a refund through your support channel. (2) SATE calls your get_order function to verify the order exists and check refund eligibility. (3) SATE checks business rules via your API for refund timeframes and conditions. (4) SATE calls process_refund to initiate the refund through your payment processor. (5) The customer gets an immediate confirmation without any human involvement.
      `,
    },
    {
      id: 7,
      key: "q-7",
      question: "How is data kept secure in DevSpace?",
      answer: `
DevSpace implements end-to-end encryption for all data transmission, granular Access Control Management for different integration functions, comprehensive Audit Logging of all activities and data access, and configurable Data Residency Compliance. It also supports GDPR compliance tools, PCI DSS compatibility, HIPAA support where applicable, and SOC 2 compliance.
      `,
    },
  ],

  [HelpCenterKey.HELPDESK]: [
    {
      id: 1,
      key: "q-1",
      question: "What is the Helpdesk?",
      answer: `
The Helpdesk is EUSATE's real-time monitoring and ticket management platform. It gives you full visibility and control over all customer interactions — both SATE-handled and human-agent-handled. You can watch SATE interact with customers live, jump into conversations instantly, track customer sentiment, and manage your team's workload from a single interface.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "Can I watch SATE talking to customers in real time?",
      answer: `
Yes. The Helpdesk includes Live Streaming — you can watch SATE interact with customers in real time. You can monitor multiple conversations simultaneously and see a real-time overlay of customer information, the actions SATE is taking, and the full conversation history.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "What happens if I need to take over a conversation from SATE?",
      answer: `
You can perform an Instant Takeover at any time — the transition from SATE to a human agent is seamless and the customer experience remains uninterrupted. The agent gets the full conversation context, customer information, and history the moment they take over.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "How does ticket prioritization work?",
      answer: `
The Helpdesk uses Priority Intelligence to automatically prioritize tickets based on issue complexity, customer value, and business impact. Tickets are intelligently categorized and routed to the appropriate agents based on expertise and availability. SLA tracking and escalation are handled automatically.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "What is Agent Copilot?",
      answer: `
Agent Copilot is an AI assistance feature for human agents handling escalated tickets. It helps agents resolve issues faster by providing relevant suggestions, surfacing knowledge base content, and offering context from the customer's interaction history — so agents spend less time searching and more time resolving.
      `,
    },
    {
      id: 6,
      key: "q-6",
      question: "What ticket views are available in the Helpdesk?",
      answer: `
The Helpdesk provides several views including All Tickets, Assigned to Me, AI Tickets (handled by SATE), and Ongoing Calls. You can filter by Priority, Assignee, Date Created, Last Updated, and Temperament (customer sentiment/mood). Each ticket shows its current status — Open, Taken, Resolved & Closed.
      `,
    },
    {
      id: 7,
      key: "q-7",
      question:
        "Can I see all tickets SATE is handling separately from human tickets?",
      answer: `
Yes. There is a dedicated AI Tickets tab in the Helpdesk so you can track exactly what SATE is handling at any point. This makes it easy to monitor AI performance, catch issues early, and understand the distribution of work between SATE and your human agents.
      `,
    },
  ],

  [HelpCenterKey.AI_PLAYGROUND]: [
    {
      id: 1,
      key: "q-1",
      question: "What is the AI Playground?",
      answer: `
The AI Playground is a safe testing environment where you can test and optimize SATE's responses before they ever reach your customers. You can try edge cases, refine SATE's personality to match your brand, and run continuous improvement tests without any customer impact.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What kinds of scenarios can I test in the Playground?",
      answer: `
You can test across a wide range of scenario categories: Routine Inquiries (standard product/service/policy questions), Complex Problem-Solving (multi-step issues), Emotional Situations (frustrated or upset customer interactions), Edge Cases (unusual or unexpected requests), Technical Support (troubleshooting scenarios), and Sales and Upselling (product recommendation opportunities).
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "What testing methodologies are available?",
      answer: `
The Playground supports Conversation Simulation (realistic customer conversation simulations), Stress Testing (high-volume interaction testing), Regression Testing (verifying that improvements don't break existing functionality), A/B Response Testing (comparing different response approaches for similar scenarios), and Multi-Turn Conversation Testing (extended conversation testing for complex issues).
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "How do I tune SATE's tone and personality?",
      answer: `
Within the Playground, you can refine SATE's personality to match your brand voice. There are tools for Response Tuning that adjust tone, empathy, and communication style, as well as Brand Voice Calibration to ensure SATE's responses align with your brand guidelines and competitive messaging.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "Can I benchmark SATE's performance?",
      answer: `
Yes. The Playground includes Benchmark Categories covering Response Time Analysis, Resolution Rate Tracking, Customer Satisfaction Correlation, Escalation Rate Optimization, and Efficiency Metrics. You can set performance goals, track trends over time, and compare against industry standards.
      `,
    },
  ],
  [HelpCenterKey.ANALYTICS_REPORTING]: [
    {
      id: 1,
      key: "q-1",
      question: "What analytics does EUSATE provide?",
      answer: `
EUSATE provides a comprehensive two-mode reporting system. Dashboard Mode gives C-suite executives brief, visual, interactive real-time insights accessible through the web app. Report Mode gives C-suite executives and Operations Managers detailed, downloadable, comprehensive reports with in-depth technical analysis.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What types of reports are available?",
      answer: `
Three main report types are available: (1) Overall Performance Summary Report — covers ticket volume and resolution metrics, average resolution times, agent productivity scores, customer satisfaction metrics, and channel distribution analysis. (2) Agent Performance Report — covers individual agent resolution times, productivity analysis, and resolution rate comparisons. (3) Operational Efficiency Report — covers escalation rates, SATE vs. agent resolution analysis, workload reduction metrics, and takeover statistics.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "Does EUSATE offer trend analysis?",
      answer: `
Yes. The Trend Analysis Engine analyzes current and comparison periods (previous 3-5 equivalent periods) and quarterly context. It calculates trend direction and strength, performs volatility analysis and anomaly detection, identifies cross-metric correlations, and generates narrative insights for business decision-making. Reports are on-demand — clients select the duration and request when needed.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "What key performance indicators does EUSATE track?",
      answer: `
EUSATE tracks the following KPIs: AI Resolution Rate (percentage of tickets SATE resolves without human intervention), Response Time (average time to first response and resolution), Customer Satisfaction (CSAT) scores, Escalation Rate (percentage of conversations needing human agents), Cost Per Ticket, and Agent Productivity scores.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "Are reports downloadable?",
      answer: `
Yes. Reports generated in Report Mode are available in downloadable format, designed to be executive-ready documentation with an Executive Summary, AI Trend Analysis, Analytic Approach methodology, and full data appendix.
      `,
    },
  ],

  [HelpCenterKey.INTEGRATIONS_CHANNELS]: [
    {
      id: 1,
      key: "q-1",
      question: "What communication channels can EUSATE integrate with?",
      answer: `
EUSATE supports integration with Discord, WhatsApp, Twitter/X, Facebook, Instagram, LinkedIn, Slack, email, and web chat widgets. Channel support is available as a paid integration — users pay to integrate EUSATE with their support channels for ticket routing.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "How does WhatsApp Business integration work?",
      answer: `
EUSATE uses the full WhatsApp Business API integration. It supports rich media (images, documents, interactive messages), template message management for common support scenarios, group chat management, and end-to-end encrypted communication that respects WhatsApp's security standards.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "What does the Discord integration support?",
      answer: `
Discord integration includes server integration for community-based businesses, Discord bot functionality for automated responses, voice channel support for real-time audio support, role-based access management integrated with Discord's permissions system, and community management tools.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question:
        "Can EUSATE maintain context when a customer switches channels?",
      answer: `
Yes. EUSATE's Cross-Channel Continuity ensures customers can switch channels without losing conversation context. Unified customer profiles maintain complete interaction history across all channels, and the system learns and respects customer channel preferences over time.
      `,
    },
    {
      id: 5,
      key: "q-5",
      question: "Does EUSATE integrate with CRM and e-commerce platforms?",
      answer: `
Yes. Through DevSpace, EUSATE integrates with CRM systems (for accessing customer account details, purchase history, communication preferences, and loyalty status), e-commerce platforms (for order status, shipment tracking, inventory verification, and return initiation), and financial systems (for payment processing, billing inquiries, refund processing, and subscription management).
      `,
    },
  ],

  [HelpCenterKey.PRICING]: [
    {
      id: 1,
      key: "q-1",
      question: "How does EUSATE pricing work?",
      answer: `
EUSATE uses three revenue streams: (1) Subscription Model — users pay for Standard or Pro plans to access core product features, giving them predictable costs as they scale. (2) Pay As You Go — users can purchase extra services, agents, tokens, or extra knowledge base space on demand for scalable usage-based revenue. (3) Integrations — users pay to integrate EUSATE with their support channels like WhatsApp, Discord, Twitter, and Telegram for ticket routing.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What ROI can I expect from EUSATE?",
      answer: `
Based on industry data, EUSATE clients typically see a $3.50 return for every $1 invested in AI customer support, a 50-70% reduction in support costs, 30-50% faster resolution times, and a payback period of 6-9 months. SATE can handle up to 80% of routine queries automatically, allowing you to reduce a support team from 5+ agents to 1-2 people while providing 24/7 support without additional staffing costs.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "Is EUSATE affordable for early-stage startups?",
      answer: `
Yes. EUSATE delivers enterprise-grade AI support at startup-friendly pricing, reducing support expenses by up to 70% as you scale. It is built by people who understand startup constraints, priced for early-stage company budgets, with a feature set designed for rapid scaling needs.
      `,
    },
  ],

  [HelpCenterKey.SECURITY_COMPLIANCE]: [
    {
      id: 1,
      key: "q-1",
      question: "How does EUSATE protect my data?",
      answer: `
EUSATE uses end-to-end encryption for all data transmission using industry-standard protocols. DevSpace includes comprehensive audit logging of all integration activities, granular access control management, configurable data residency compliance for regulatory requirements, and regular security audits and vulnerability testing.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What compliance standards does EUSATE support?",
      answer: `
EUSATE supports GDPR compliance tools (built-in features for data protection regulation), PCI DSS compatibility (secure handling of payment card information), HIPAA support (healthcare data protection capabilities where applicable), SOC 2 compliance (security and availability controls), and custom compliance frameworks for specific industry requirements.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question:
        "Is EUSATE suitable for healthcare or financial services businesses?",
      answer: `
Yes. EUSATE has industry-specific solutions in development including HIPAA-compliant features with enhanced security for healthcare data, medical terminology integration, financial regulation compliance features, and advanced security for financial data protection. Custom compliance frameworks can also be configured for your sector's specific requirements.
      `,
    },
  ],
  [HelpCenterKey.SDK_API]: [
    {
      id: 1,
      key: "q-1",
      question: "How do I integrate EUSATE with my product?",
      answer: `
EUSATE provides an SDK for seamless integration with client systems. The typical flow is: (1) Set up API/SDK with your existing endpoints. (2) Configure Developer Space tools and authentication. (3) Upload initial knowledge base content. (4) Test SATE in the playground environment before going live.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "What integration methods are available?",
      answer: `
EUSATE supports SDK integration (for seamless embedding into your product), API Integration (for custom workflows and server-to-server communication), and Discord Integration (for community-based support channels). Full API reference documentation is available at docs.eusate.com.
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "Does EUSATE have an API reference?",
      answer: `
Yes. The API Reference is available in the DevSpace section of the documentation at docs.eusate.com/modules/devspace/api-reference. It covers callback endpoints, authentication configuration, and function definitions for all DevSpace integrations.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "What is the DevSpace callback endpoint used for?",
      answer: `
The callback endpoint is how EUSATE sends results back to your system after SATE executes a function. When SATE calls one of your DevSpace functions (e.g., process_refund), your server performs the action and returns the result to EUSATE via the callback. This enables real-time, two-way communication between SATE and your infrastructure.
      `,
    },
  ],

  [HelpCenterKey.SUPPORT_CONTACT]: [
    {
      id: 1,
      key: "q-1",
      question: "How do I contact EUSATE?",
      answer: `
You can reach EUSATE at: Email: info@eusate.com | Partnership inquiries: partnership@eusate.com | Phone: +234 81 6670 0905 | Website: https://eusate.com/ | Location: Akure, Nigeria.
      `,
    },
    {
      id: 2,
      key: "q-2",
      question: "Where can I find EUSATE's developer documentation?",
      answer: `
Full developer documentation is available at docs.eusate.com. It covers DevSpace (authentication configuration, function creation, API reference), and Helpdesk (SDK integration, API integration, Discord integration).
      `,
    },
    {
      id: 3,
      key: "q-3",
      question: "Where can I access the EUSATE platform?",
      answer: `
The EUSATE platform dashboard is available at app.eusate.com. From there you can access all modules including the Knowledge Base, DevSpace, Helpdesk, AI Playground, and Analytics.
      `,
    },
    {
      id: 4,
      key: "q-4",
      question: "Does EUSATE have a social media presence?",
      answer: `
Yes. You can follow EUSATE on X (Twitter) at @eusate_ai, LinkedIn at linkedin.com/company/eusate, and Instagram at @eusate_ai.
      `,
    },
  ],
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
    key: HelpCenterKey.SATE_AI_CAPABILITIES,
    label: "SATE & AI Capabilities",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.SATE_AI_CAPABILITIES],
  },
  {
    id: 3,
    key: HelpCenterKey.KNOWLEDGE_BASE_MANAGEMENT,
    label: "Knowledge Base Management",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.KNOWLEDGE_BASE_MANAGEMENT],
  },
  {
    id: 4,
    key: HelpCenterKey.DEVSPACE,
    label: "DevSpace (Developer Space)",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.DEVSPACE],
  },
  {
    id: 5,
    key: HelpCenterKey.HELPDESK,
    label: "Helpdesk & Real-Time Monitoring",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.HELPDESK],
  },
  {
    id: 6,
    key: HelpCenterKey.AI_PLAYGROUND,
    label: "AI Playground",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.AI_PLAYGROUND],
  },
  {
    id: 7,
    key: HelpCenterKey.ANALYTICS_REPORTING,
    label: "Analytics & Reporting",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.ANALYTICS_REPORTING],
  },
  {
    id: 8,
    key: HelpCenterKey.INTEGRATIONS_CHANNELS,
    label: "Integrations & Channels",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.INTEGRATIONS_CHANNELS],
  },
  {
    id: 9,
    key: HelpCenterKey.PRICING,
    label: "Pricing & Plans",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.PRICING],
  },
  {
    id: 10,
    key: HelpCenterKey.SECURITY_COMPLIANCE,
    label: "Security & Compliance",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.SECURITY_COMPLIANCE],
  },
  {
    id: 11,
    key: HelpCenterKey.SDK_API,
    label: "SDK & API Integration (Technical)",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.SDK_API],
  },
  {
    id: 12,
    key: HelpCenterKey.SUPPORT_CONTACT,
    label: "Support & Contact",
    content: HELP_CENTER_QUESTIONS[HelpCenterKey.SUPPORT_CONTACT],
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
    description:
      "SATE detects sentiment and adapts style, offering empathy to frustration and clear steps to confusion.",
  },
  {
    id: 3,
    key: "action-3",
    title: "Chat and calls with Customers",
    description:
      "Chatbots treat messages as isolated inputs, causing customers to repeat themselves. SATE keeps full conversation memory so that’s avoided.",
  },
  {
    id: 4,
    key: "action-4",
    title: "Actually Solve Problems 🎉",
    description:
      "Traditional AI provides info, but SATE acts in your systems; checking inventory, tracking orders, performing business actions, etc. Customers get solutions, not just info.",
  },
];

export const DEVSPACE_ACTIONS = [
  {
    id: 1,
    title: "Setup Auth Configuration",
    description:
      "Connect Developer Space to your business systems by configuring secure authentication.",
  },
  {
    id: 2,
    title: "Custom Function Creation",
    description:
      "Define what actions SATE can perform in your connected systems.",
  },
  {
    id: 3,
    title: "Test in Playground",
    description:
      "Validate your function works correctly before customers interact with it.",
  },
  {
    id: 4,
    title: "Deploy to Live",
    description: "Activate your function for real customer interations.",
  },
];

export const KB_HIGHLIGHTS = [
  {
    id: 1,
    title: "Elimate Inconsistency",
    description:
      "Support teams often provide conflicting answers. Documentation is scattered. The Knowledge Base centralizes support content in one searchable system, ensuring your team accesses consistent information automatically.",
  },
  {
    id: 2,
    title: "Reduce Training Overhead",
    description:
      "New agents need time to learn products and processes. Seasonal spikes cause rushed training and errors. Knowledge Base gives instant access, while SATE handles tier-one questions, making onboarding hours instead of weeks.",
  },
  {
    id: 3,
    title: "Accelerate Product Updates",
    description:
      "Product launches require updating documentation, training the team, and ensuring everyone remembers changes. SATE updates your Knowledge Base instantly, keeping customer information current without extra coordination.",
  },
  {
    id: 4,
    title: "Scale Expertise",
    description:
      "Your support agent knows every solution. When they're unavailable, customers wait. Knowledge Base captures expertise across your operation. Junior agents access senior knowledge instantly.",
  },
];

export const HD_FEATURES: HDFeature[] = [
  {
    id: 1,
    highlightTitle: "Unified Conversation",
    title: "Management",
    description:
      "A customer starts on email, follows up on WhatsApp, then tweets publicly. The Helpdesk shows this as one continuous conversation. Full context, complete history, zero switching between platforms. Your team sees the whole picture, always.Context is everything in support. Unified conversations mean no question gets asked twice and no customer repeats themselves.",
    imgSrc: "/images/hd-feature-1.webp",
  },
  {
    id: 2,
    highlightTitle: "Real-Time AI Monitoring",
    title: "& Human Takeover",
    description:
      "Get real-time visibility into SATE conversations and calls with your customers. The helpdesk shows active chats with customer and SATE. AI needs verification, but monitoring builds confidence. Agents can take over seamlessly, with full context and history, ensuring a smooth customer experience.",
    imgSrc: "/images/hd-feature-2.webp",
  },
  {
    id: 3,
    highlightTitle: "Agent Copilot",
    title: "with AI Assistance",
    description:
      "Real-time AI co-pilot support for agents, not just in complex chats. Copilot analyzes issues, suggests responses, and identifies team members with solutions. Agents retain control with AI assistance. Knowledge should be accessible, not memorized. Copilot provides knowledge base access for all agents.",
    imgSrc: "/images/hd-feature-3.webp",
  },
  {
    id: 4,
    highlightTitle: "Save Responses",
    title: "for consistency",
    description:
      "Customizable response templates for common queries. When agents face a shipping delay, they use /shipping-delay or a macro. The system inserts a response, fills in the order number and tracking link, updates ticket status, and schedules a follow-up—all in one action. For complex cases, agents can customize templates with variables like {{customer_name}} and {{order_id}}.",
    imgSrc: "/images/hd-feature-4.webp",
  },
];

export const REPORTS_FEATURES: ReportFeature[] = [
  {
    id: 1,
    imgSrc: "/images/reports-hero.webp",
    title: "Overall Performance Summary Report",
    color: "#F3E5B2",
    description:
      "Snapshot of your support operation. C-suite and leaders need high-level insights. Managers track team performance. Is support improving? Where does volume come from? How efficiently is the team operating? Identify peak periods for coverage. Spot declining metrics early. Understand channel preferences. Recognize top performers.",
  },
  {
    id: 2,
    imgSrc: "/images/report-ft-2.webp",
    title: "Ticket Resolution Analysis",
    color: "#F8CFCA",
    description:
      "Explore ticket movement from creation to resolution, spotting inefficiencies. Managers optimize workflows, while teams ensure resolution standards. Learn why some tickets delay, where processes fail, and identify issue types needing documentation. Spot escalation patterns and understand complexity factors to improve SLA targets and reduce backlog.",
  },
  {
    id: 3,
    imgSrc: "/images/report-ft-3.webp",
    title: "AI vs. Human Performance Report",
    color: "#BEDDFD",
    description:
      "Compare AI and human performance to optimize automation and human touch. Measure ROI on AI investment. Balance automation with human support. Calculate cost savings and efficiency gains. Learn how much AI handles, where it struggles, and the cost difference. Identify AI underperformance issues and optimize escalation thresholds.",
  },
  {
    id: 4,
    imgSrc: "/images/report-ft-4.webp",
    title: "Customer Satisfacton & Sentiment Report",
    color: "#B6E9D1",
    description:
      "Track emotional journey and satisfaction levels with AI recommendations. Teams monitor trends, identify issues, and track retention indicators. Learn if customers are satisfied, what frustrates them, and recurring problems. AI analyzes conversations to highlight improvement opportunities linked to customer interactions.",
  },
  {
    id: 5,
    imgSrc: "/images/report-ft-5.webp",
    title: "Workload Distribution Report",
    color: "#F0F1F3",
    description:
      "Analyze support volume across channels and time for better resource allocation. Learn where volume concentrates, which channels drive tickets, and if resources match demand. Identify underperforming channels and align resources to improve efficiency and satisfaction.",
  },
];

export const PRODUCTS_TAB: ProductsTab[] = [
  {
    id: 1,
    icon: KeyFeatureIcon,
    key: ProductKey.HELP_DESK,
    label: "Helpdesk",
    link: ROUTES.HELP_DESK,
    content: "/home/images/helpdesk.webp",
  },
  {
    id: 2,
    icon: KeyFeatureIcon,
    key: ProductKey.KNOWLEDGE_BASE,
    label: "Knowledge base",
    link: ROUTES.KNOWLEDGE_BASE,
    content: "/home/images/knowledge-base.webp",
  },
  {
    id: 3,
    icon: CodeLinearIcon,
    key: ProductKey.DEV_SPACE,
    link: ROUTES.DEVSPACE,
    label: "Dev space",
    content: "/home/images/devspace.webp",
  },
  // {
  //   id: 4,
  //   icon: ReportIcon,
  //   key: ProductKey.REPORTS,
  //   link: ROUTES.REPORTS,
  //   label: "Reports",
  //   content: "/home/images/reports.webp",
  // },
  {
    id: 5,
    icon: LogoIcon,
    key: ProductKey.AI_PLAYGROUND,
    link: ROUTES.PLAYGROUND,
    label: "AI Playground",
    content: "/home/images/ai-playground.webp",
  },
];

export const KB_FEATURES = [
  {
    id: 1,
    title: "Multi-Source Content Integration",
    description:
      "Your documentation exists. Knowledge Base adapts to you without forcing migration. Upload documents, paste URLs, or write in the editor. Our system parses and indexes content for AI retrieval. No manual tagging needed, but you can add it. Document uploads (PDF, DOCX, TXT, MD, RTF), URL linking, custom articles, FAQ imports, API connections, and spreadsheet data.",
    panelSrc: "/images/kb-feature-1.webp",
  },
  {
    id: 2,
    title: "Semantic Search and Retrieval",
    description:
      "AI-powered search understands intent, not just keywords. It ranks contextual relevance based on query intent, supports multi-language search, and recognizes question variations. SATE retrieves relevant information, synthesizes answers, and scores confidence. Low confidence prompts human escalation. Semantic search ensures SATE finds the right answer, regardless of phrasing.",
    panelSrc: "/images/kb-feature-2.webp",
  },
  {
    id: 3,
    title: "Content Analytics and Optimization",
    description:
      "Control visibility of sensitive information. Tag content with access levels. SATE respects permissions—customers don’t see internal docs, free users miss premium content, and regional restrictions apply. Granular control ensures the right info reaches the right people.",
    panelSrc: "/images/kb-feature-3.webp",
  },
  {
    id: 4,
    title: "Granular Access Control",
    description:
      "Understand which content performs, identify gaps, and optimize continuously.Every search, every retrieval, and every resolution feeds analytics. The system identifies which articles resolve issues effectively and which queries have no good answers. Optimization recommendations highlight content needing updates or creation.",
    panelSrc: "/images/kb-feature-4.webp",
  },
];

export const INTEGRATIONS_PRICING: IntegrationPricing[] = [
  {
    id: 1,
    name: "Whatsapp",
    description:
      "Setup a whatsapp number to pull converstaions as tickets from your customers",
    icon: "/pricing/images/whatsapp-icon.webp",
    price: 10,
  },

  {
    id: 2,
    name: "Discord",
    description:
      "Connect a Discord account to capture conversations as support tickets from your community members",
    icon: "/pricing/images/discord-icon.webp",
    price: 0,
  },
  {
    id: 3,
    name: "Emails",
    description:
      "Set up an email address to receive customer conversations as support tickets.",
    icon: "/pricing/images/mail-icon.webp",
    price: 0,
  },
  {
    id: 4,
    name: "Live chat",
    description:
      "Integrate our live chat widget on customer-facing interfaces to turn customer conversations into manageable tickets.",
    icon: "/pricing/images/chat-icon.webp",
    price: 0,
  },
];

export const BLOG_POST: Blog[] = [
  {
    id: "3f1a2b4e-8d5c-4f6b-9a7e-2c1d8b9f0e6a",
    imgSrc: "/blogs/10-signs.webp", // Placeholder path for the image
    title: "10 Signs Your Business Has Outgrown Its Customer Support System",
    summary:
      "Growth has a way of exposing cracks in your customer service. Learn the 10 warning signs that your current support system is holding your business back—and how to fix it before your customers notice.",
    readingSpan: "5 min read",
    spotlight: true,
    timestamp: new Date("2026-06-18"),
    content: {
      title: "10 Signs Your Business Has Outgrown Its Customer Support System",
      introduction:
        "Your customer support system probably worked perfectly when you had your first 100 customers. Maybe it even worked when you had 1,000, but growth has a way of exposing cracks that didn't exist before. The spreadsheets become messy. The inbox becomes overwhelming. Response times start slipping. Customers begin following up on messages you've already answered. And suddenly, what once felt manageable now feels like chaos.\n\nHere's the thing: most businesses don't realize they've outgrown their customer support system until customers start noticing. If you're wondering whether your current setup is holding your business back, here are 10 signs it's time to upgrade.",
      subheaders: [
        {
          id: 1,
          title: "1. Your Team Answers the Same Questions Every Day",
          content:
            "How do I reset my password?\nWhere is my order?\nHow do I update my account information?\n\nIf your support team spends most of its day answering repetitive questions, you're not running an efficient customer support operation, you're running a human-powered FAQ page.\n\nAs your business grows, repetitive support requests grow with it. The problem isn't that customers are asking questions. The problem is that your team is spending valuable time answering questions that could be resolved automatically.\n\nModern AI customer support tools can handle these common inquiries instantly, allowing your team to focus on complex issues that genuinely require human attention.",
        },
        {
          id: 2,
          title:
            "2. Customer Conversations Are Scattered Across Multiple Platforms",
          content:
            "A customer sends a message on WhatsApp, then follows up via email, and opens a live chat conversation. Now three different team members are handling the same issue. Sound familiar?\n\nOne of the clearest signs you've outgrown your customer service platform is when conversations live in multiple places with no unified view.\n\nWithout omnichannel customer support, agents waste time switching between tools, customers repeat themselves, and important context gets lost. Your customers don't think in channels. Your support system shouldn't either.",
        },
        {
          id: 3,
          title: "3. Response Times Keep Getting Longer",
          content:
            "Growth is exciting. But if every new customer automatically increases your response times, your support system isn't scaling.\n\nCustomers today expect quick responses. Whether they're reaching out through live chat, email, WhatsApp, or social media, long wait times create frustration and damage trust.\n\nIf your average response time keeps increasing despite adding more team members, the problem may not be your team. It may be your system.",
        },
        {
          id: 4,
          title: "4. Support Stops When Your Team Logs Off",
          content:
            "Customers don't only have problems between 9 AM and 5 PM. They have questions during weekends, holidays, and late nights.\n\nIf your customer support system becomes unavailable the moment your team goes offline, you're creating gaps in the customer experience.\n\nBusinesses that provide 24/7 customer support gain a significant competitive advantage because customers get help when they need it, not when it's convenient for the business.",
        },
        {
          id: 5,
          title: "5. Your Team Is Constantly Overwhelmed",
          content:
            "Support agents shouldn't spend their entire day putting out fires. If your team feels perpetually behind, struggles to clear ticket backlogs, or constantly complains about workload, it may be a sign that your support operation has reached its limit.\n\nMany businesses respond by hiring more agents, but throwing more people at a broken process rarely solves the underlying problem. The right customer support software should reduce workload, not simply redistribute it.",
        },
        {
          id: 6,
          title: "6. Customers Have to Repeat Themselves",
          content:
            "Few things frustrate customers more than explaining the same issue multiple times. Unfortunately, this happens often when support conversations are disconnected across channels and departments.\n\nWhen agents lack visibility into previous interactions, customers are forced to repeat information, leading to poor customer experiences and lower satisfaction scores.\n\nA modern customer support platform should provide a complete view of every interaction, regardless of where the conversation started.",
        },
        {
          id: 7,
          title: "7. You Can't Measure Support Performance",
          content:
            "How long does it take your team to respond?\nHow many issues are resolved on first contact?\nWhich channels generate the highest ticket volume?\n\nIf you don't know the answers, you're flying blind. Businesses that rely on outdated support systems often lack the reporting and analytics needed to improve operations.\n\nWhat gets measured gets improved. Without data, improving customer support becomes guesswork.",
        },
        {
          id: 8,
          title: "8. Important Messages Are Falling Through the Cracks",
          content:
            "Every growing business has experienced it. An email gets missed, a WhatsApp message goes unanswered, a support ticket remains unresolved for days.\n\nWhile occasional mistakes happen, frequent missed conversations are usually a symptom of a system that can no longer keep up with demand, and every missed message carries a cost. Sometimes it's a complaint, sometimes it's a lost customer, sometimes it's both.",
        },
        {
          id: 9,
          title: "9. You're Hiring More Agents Just to Keep Up",
          content:
            "Hiring support staff isn't inherently bad. But if your solution to every increase in customer volume is adding more agents, you may be treating the symptom rather than the cause.\n\nThe most scalable businesses don't simply increase headcount. They improve efficiency. AI-powered customer support allows businesses to handle significantly higher volumes without increasing support costs at the same rate. Growth shouldn't automatically require a larger support team.",
        },
        {
          id: 10,
          title: "10. Your Support System Is Slowing Down Business Growth",
          content:
            "This is the biggest sign of all. When customer support becomes a bottleneck, it starts affecting the entire business. Sales opportunities are missed, customer satisfaction drops, retention suffers, operational costs increase, and growth becomes harder than it should be.\n\nAt that point, the issue isn't customer support anymore, it's business performance.",
        },
        {
          id: 11,
          title: "The Future of Customer Support",
          content:
            "Customer expectations aren't slowing down. If anything, they're increasing. Customers want fast answers, seamless experiences, and support that's available whenever they need it.\n\nBusinesses that continue relying on outdated support processes will find it increasingly difficult to keep up. Businesses that embrace AI-powered customer support, omnichannel communication, and intelligent automation will be positioned to scale without sacrificing customer experience.\n\nThe question isn't whether your business will outgrow its current support system. The question is whether you'll recognize the signs before your customers do.",
        },
        {
          id: 12,
          title: "Ready to Modernize Your Customer Support?",
          content:
            "Eusate helps businesses unify customer conversations, automate repetitive support requests, and deliver exceptional customer experiences across WhatsApp, Email, Live Chat, Discord, and more.",
        },
      ],
    },
  },
  {
    id: "can-ai-replace-customer-support-teams",
    imgSrc: "/blogs/can-ai-replace.webp",
    title: "Can AI Replace Customer Support Teams?",
    summary:
      "The short answer is no, but the real future is much more interesting. Discover why the ultimate customer service strategy isn't humans vs. AI—it's humans and AI working together.",
    readingSpan: "4 min read",
    spotlight: false,
    timestamp: new Date("2026-06-18"),
    content: {
      title: "Can AI Replace Customer Support Teams?",
      introduction:
        "Short answer? No. At least, not entirely.\n\nArtificial intelligence has become one of the most transformative technologies in modern business. From content creation and workflow automation to data analysis and virtual assistants, AI is changing how organizations operate. Few functions, however, have been impacted as significantly as customer support.\n\nAs businesses look for ways to improve efficiency, reduce costs, and deliver faster service, one question keeps coming up: Can AI replace customer support teams?\n\nThe answer is both simple and nuanced.\n\nModern AI customer support systems can answer questions instantly, handle thousands of conversations simultaneously, provide 24/7 support, and automate tasks that once required entire teams. It's easy to understand why many believe AI could eventually replace human support agents.\n\nHowever, customer support is about more than answering questions. It involves solving problems, building trust, managing emotions, and creating positive customer experiences. These are areas where humans continue to play an essential role.\n\nThe future of customer support is not a competition between humans and AI. It is a collaboration between the two.",
      subheaders: [
        {
          id: 1,
          title: "Why Many People Believe AI Will Replace Customer Support",
          content:
            "AI has become incredibly effective at handling routine support tasks. It can answer frequently asked questions, route tickets to the right department, retrieve information from company knowledge bases, and resolve common customer issues in seconds.\n\nFor businesses, the appeal is obvious. Faster response times, lower operational costs, and the ability to support customers around the clock make AI an attractive investment.\n\nBut the assumption that customer support teams will disappear altogether overlooks an important reality: not all customer interactions are created equal.",
        },
        {
          id: 2,
          title: "Where AI Excels",
          content:
            "To understand AI's role in customer support, it helps to look at the types of issues customers encounter every day.\n\nA customer forgets their password and needs help regaining access to their account. Another wants to track an order. A prospective customer asks about pricing or product features. These are common, repetitive, information-driven requests that AI can handle quickly and accurately.\n\nIn situations like these, customers are not necessarily looking for a human conversation. They simply want a fast and reliable answer. This is where AI delivers tremendous value. It eliminates repetitive work, reduces response times, and allows support teams to operate more efficiently.",
        },
        {
          id: 3,
          title: "Where Humans Still Matter",
          content:
            "Now consider a different scenario.\n\nA customer has been locked out of their account after a suspected security breach. A major client is threatening to cancel their contract after a service failure. A business-critical shipment has gone missing. Or a frustrated customer simply needs reassurance after a poor experience.\n\nThese situations require far more than information. They require judgment, empathy, context, and problem-solving. Customers want someone who understands the bigger picture, can make decisions, and can navigate situations that don't follow a predefined script.\n\nIn these moments, customer support becomes less about processes and more about people. This is where the argument that AI will completely replace customer support teams begins to fall apart.",
        },
        {
          id: 4,
          title: "The Real Future: AI + Humans",
          content:
            "Many businesses are asking the wrong question. Instead of asking whether AI can replace their support team, they should be asking how AI can make their support team more effective.\n\nThe most successful support organizations use AI to handle routine, high-volume interactions while allowing human agents to focus on complex issues, customer relationships, and strategic problem-solving.\n\nImagine a support operation where customers receive instant responses around the clock, repetitive questions are handled automatically, and support agents spend their time solving meaningful problems rather than answering the same questions all day. In that environment, AI is not a replacement. It is an enhancement.",
        },
        {
          id: 5,
          title: "Final Thoughts",
          content:
            "So, can AI replace customer support teams? No. But it can transform them.\n\nBusinesses that view AI as a replacement strategy often risk creating impersonal and frustrating customer experiences. Businesses that use AI to empower their teams, however, can deliver faster, smarter, and more scalable support without sacrificing the human touch customers value.\n\nThe goal should not be fewer humans. The goal should be enabling humans to do their best work by allowing AI to handle the tasks that never needed human intervention in the first place.",
        },
        {
          id: 6,
          title: "The Future of Support Starts Here",
          content:
            "At Eusate, we believe great customer support is powered by both technology and people. Our AI-first platform helps businesses automate repetitive conversations, provide instant responses, and scale support operations while ensuring human agents remain involved where they matter most.\n\nBut speed alone isn't enough. Great support also requires understanding, context, and empathy.\n\nThat's why Sate, the AI powering Eusate, is designed to communicate naturally, understand customer intent, and deliver support experiences that feel thoughtful and human, not robotic or scripted. While AI can never replace genuine human connection, it can be built to understand customers better, respond more intelligently, and know when a human touch is needed.\n\nBecause the future of customer support isn't humans versus AI. It's humans and AI working together to create faster, smarter, and more empathetic customer experiences.",
        },
      ],
    },
  },
];
