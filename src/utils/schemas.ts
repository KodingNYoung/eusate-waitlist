import { z } from "zod";

export const ReasonSchema = "";

export const contactFormSchema = z.object({
  firstname: z
    .string()
    .min(3, "Your name should contain at leaset 2 characters"),
  email: z.email("Invalide email address"),
  reason: ReasonSchema,
  message: z.string().min(20),
});
