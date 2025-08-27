import z from "zod";

export const API_BASEURL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_URL;

export const EMAIL_REGEX_PATTERNS =
  /^[^@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|mail\.com|yandex\.com|zoho\.com|protonmail\.com|gmx\.com|me\.com|live\.com$).+$/i;

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
      "Limited 24/7 availability",
      "Language barriers",
      "Complex query resolution",
      "Other",
    ],
  },

  "whats-your-approximate-monthly-customer-inquiry-volume": {
    label: "What's your approximate monthly customer inquiry volume?",
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

  "would-you-be-willing-to-provide-regular-feedback-during-the-beta-period": {
    label:
      "Would you be willing to provide regular feedback during the beta period?",
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
    .regex(EMAIL_REGEX_PATTERNS, {
      message: "Only company mails are allowed",
    })
    .min(1, "Email is a required field"),
  fullname: z
    .string()
    .min(2, "Full name should not be less than 2 characters")
    .min(1, "Full name is a required field"),
  organisation_name: z
    .string()
    .min(2, "Company name should not be less than 2 characters")
    .min(1, "Company name is a required field"),
  role: z.string().min(1, "Role is a required field"),
  ...Object.keys(APPLICATION_FORM_FIELDS).reduce(
    (cumm, curr) => ({
      ...cumm,
      [curr]: z.string().min(1, "This is a required field"),
    }),
    {}
  ),
});
export const waitlistFormSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email is a required field"),
});
