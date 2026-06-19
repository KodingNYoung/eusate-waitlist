import { REASON_OPTIONS } from "@/components/routes/contact/utils";
import { z } from "zod";

export const ReasonSchema = z.enum(
  REASON_OPTIONS.map((option) => option.key) as [string, ...string[]],
  "Please select a reason",
);

export const contactFormSchema = z.object({
  firstname: z
    .string()
    .min(3, "Your name should contain at least 3 characters"),
  email: z.email("Invalid email address"),
  reason: ReasonSchema,
  message: z.string().min(20),
});
