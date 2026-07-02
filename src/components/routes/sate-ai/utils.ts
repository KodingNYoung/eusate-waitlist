import {
  AiPlaygroundIcon,
  CopilotIcon,
  CustomerTemperamentIcon,
  GapAnalysisIcon,
  HumanAgentHandoffIcon,
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
      "Work alongside AI to draft, refine, and complete responses to customers with context-aware assistance.",
  },
  {
    id: 2,
    key: "gap-analysis",
    icon: GapAnalysisIcon,
    title: "Gap Analysis",
    description:
      "Identify missing information, inconsistencies, and opportunities to improve the knowledge base.",
  },
  {
    id: 3,
    key: "ai-playground",
    icon: AiPlaygroundIcon,
    title: "AI playground",
    description:
      "Experiment with prompts, dev space functions, and AI settings in a flexible environment for rapid iteration.",
  },
  {
    id: 4,
    key: "ticket-context",
    icon: TicketCtxIcon,
    title: "Ticket Context",
    description:
      "Automatically gather conversations, history, and customer data to provide complete ticket context.",
  },
  {
    id: 5,
    key: "customer-temperament",
    icon: CustomerTemperamentIcon,
    title: "Customer Temperament",
    description:
      "Recognize customer emotions and intent to deliver more thoughtful, personalized support.",
  },
  {
    id: 6,
    key: "human-agent-handoff",
    icon: HumanAgentHandoffIcon,
    title: "Human Agent Handoff",
    description:
      "Transition from AI to human support without losing context or disrupting the customer experience.",
  },
];

export const SATE_FEATURES_B: SateFeature[] = [
  {
    id: 1,
    src: "/sate-ai/svg/copilot-gradient-icon.svg",
    key: "co-pilot",
    title: "Co-pilot",
    description:
      "Work alongside AI to draft, refine, and complete responses to customers with context-aware assistance.",
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
    src: "/sate-ai/svg/gap-analysis.svg",
    title: "Gap Analysis",
    description:
      "Identify missing information, inconsistencies, and opportunities to improve the knowledge base.",
  },
  {
    id: 3,
    key: "ai-playground",
    src: "/sate-ai/svg/ai-playgroud-gradient-icon.svg",
    title: "AI playground",
    description:
      "Experiment with prompts, dev space functions, and AI settings in a flexible environment for rapid iteration.",
  },
  {
    id: 4,
    key: "ticket-context",
    src: "/sate-ai/svg/ticket-context-gradient-icon.svg",
    title: "Ticket Context",
    description:
      "Automatically gather conversations, history, and customer data to provide complete ticket context.",
  },
  {
    id: 5,
    key: "customer-temperament",
    src: "/sate-ai/svg/temperant-gradient-icon.svg",
    title: "Customer Temperament",
    description:
      "Recognize customer emotions and intent to deliver more thoughtful, personalized support.",
  },
  {
    id: 6,
    key: "human-agent-handoff",
    src: "/sate-ai/svg/human-agent-gradient-icon.svg",
    title: "Human Agent Handoff",
    description:
      "Transition from AI to human support without losing context or disrupting the customer experience.",
  },
];
