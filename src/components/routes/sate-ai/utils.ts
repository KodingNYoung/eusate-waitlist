import {
  AiPlaygroundGradIcon,
  AiPlaygroundIcon,
  CopilotBrandGradientIcon,
  CopilotIcon,
  CustomerTemperamentIcon,
  CustomerTemperantGradIcon,
  GapAnalysisIcon,
  GapBrandGradIcon,
  HumanAgentGradIcon,
  TicketBrandGradIcon,
  TicketContextIcon,
} from "@/assets/icons";
import { ReactElement } from "react";

// TYPES
export type SateFeature = {
  id: number;
  key: string;
  icon: ReactElement;
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
    icon: TicketContextIcon,
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

export const SATE_FEATURES_B = [
  {
    id: 1,
    icon: CopilotBrandGradientIcon,
    key: "co-pilot",
    title: "Co-pilot",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 2,
    key: "ai-calls-with-customer",
    icon: GapBrandGradIcon,
    title: "AI Calls with Customer",
    description:
      "Sate manages voice calls, handling interruptions and context. It supports multiple languages and remembers info from call while texting and vice versa.",
  },
  {
    id: 7,
    key: "gap-analysis",
    icon: GapBrandGradIcon,
    title: "Gap Analysis",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 3,
    key: "ai-playground",
    icon: AiPlaygroundGradIcon,
    title: "AI playground",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 4,
    key: "ticket-context",
    icon: TicketBrandGradIcon,
    title: "Ticket Context",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 5,
    key: "customer-temperament",
    icon: CustomerTemperantGradIcon,
    title: "Customer Temperament",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 6,
    key: "human-agent-handoff",
    icon: HumanAgentGradIcon,
    title: "Human Agent Handoff",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
];
