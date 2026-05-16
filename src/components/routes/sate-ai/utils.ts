import {
  AiPlaygroundIcon,
  CopilotIcon,
  CustomerTemperamentIcon,
  GapAnalysisIcon,
  TicketCtxIcon,
} from "@/assets/icons";
import { InternalPath } from "@/utils/types";
import { ReactElement } from "react";

// TYPES
export type SateFeature = {
  id: number;
  key: string;
  src?: InternalPath;
  icon?: ReactElement;
  title: string;
  description: string;
};

export const SATE_FEATURE_ICONS = {};

// CONSTANTS
export const SATE_FEATURES: SateFeature[] = [
  {
    id: 1,
    icon: CopilotIcon,
    key: "co-pilot",
    title: "Co-pilot",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 2,
    key: "gap-analysis",
    icon: GapAnalysisIcon,
    title: "Gap Analysis",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 3,
    key: "ai-playground",
    icon: AiPlaygroundIcon,
    title: "AI playground",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 4,
    key: "ticket-context",
    icon: TicketCtxIcon,
    title: "Ticket Context",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 5,
    key: "customer-temperament",
    icon: CustomerTemperamentIcon,
    title: "Customer Temperament",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 6,
    key: "human-agent-handoff",
    icon: CustomerTemperamentIcon,
    title: "Human Agent Handoff",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
];

export const SATE_FEATURES_B: SateFeature[] = [
  {
    id: 1,
    src: "/sate-ai/svg/copilot-gradient-icon.svg",
    key: "co-pilot",
    title: "Co-pilot",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 2,
    key: "ai-calls-with-customer",
    src: "/sate-ai/svg/customer-calls-gradient-icon.svg",
    title: "AI Calls with Customer",
    description:
      "Sate manages voice calls, handling interruptions and context. It supports multiple languages and remembers info from call while texting and vice versa.",
  },
  {
    id: 7,
    key: "gap-analysis",
    src: "/sate-ai/svg/customer-calls-gradient-icon.svg",
    title: "Gap Analysis",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 3,
    key: "ai-playground",
    src: "/sate-ai/svg/ai-playgroud-gradient-icon.svg",
    title: "AI playground",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 4,
    key: "ticket-context",
    src: "/sate-ai/svg/ticket-context-gradient-icon.svg",
    title: "Ticket Context",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 5,
    key: "customer-temperament",
    src: "/sate-ai/svg/temperant-gradient-icon.svg",
    title: "Customer Temperament",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 6,
    key: "human-agent-handoff",
    src: "/sate-ai/svg/human-agent-gradient-icon.svg",
    title: "Human Agent Handoff",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
];
