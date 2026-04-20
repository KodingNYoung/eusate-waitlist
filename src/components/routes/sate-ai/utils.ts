import {
  AiPlaygroundIcon,
  CopilotIcon,
  CustomerTemperamentIcon,
  GapAnalysisIcon,
  TicketContextIcon,
} from "@/assets/icons";
import { ReactElement } from "react";

// TYPES
export type SateFeature = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};

// CONSTANTS
export const SATE_FEATURES: SateFeature[] = [
  {
    id: 1,
    icon: CopilotIcon,
    title: "Co-pilot",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 2,
    icon: GapAnalysisIcon,
    title: "Gap Analysis",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 3,
    icon: AiPlaygroundIcon,
    title: "AI playground",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 4,
    icon: TicketContextIcon,
    title: "Ticket Context",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 5,
    icon: CustomerTemperamentIcon,
    title: "Customer Temperament",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
  {
    id: 6,
    icon: CustomerTemperamentIcon,
    title: "Human Agent Handoff",
    description:
      "Create custom content directly in our built-in text editor or import using links.",
  },
];
