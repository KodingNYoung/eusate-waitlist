import { FC } from "react";

// Types for different schema types

type SoftwareApplicationSchema = {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  url: string;
  applicationCategory:
    | "BusinessApplication"
    | "CommunicationApplication"
    | "UtilitiesApplication";
  operatingSystem: string;
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
    availability: string;
  };
  developer: {
    "@type": "Organization";
    name: string;
  };
  datePublished?: string;
  softwareVersion?: string;
};

interface JsonLdProps {
  type: "software" | "homepage" | "legal";
  data?: Record<string, unknown>;
  baseUrl: string;
}

const JsonLdSchema: FC<JsonLdProps> = ({ type, data = {}, baseUrl }) => {
  const getSchema = () => {
    switch (type) {
      case "software":
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "eusate",
          description:
            "AI-powered customer support platform with intelligent chatbots, ticket management, and automated customer service solutions. Currently in development - join our waitlist for early access.",
          url: baseUrl,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/ComingSoon",
          },
          developer: {
            "@type": "Organization",
            name: "eusate",
          },
          releaseNotes:
            "Currently in beta development. Join waitlist for early access.",
          ...data,
        } as SoftwareApplicationSchema;

      case "legal":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: data.title || "Legal Page",
          description:
            data.description ||
            "Legal information and policies for eusate platform",
          url: `${baseUrl}${data.path || ""}`,
          isPartOf: {
            "@type": "WebSite",
            name: "eusate",
            url: baseUrl,
          },
          about: {
            "@type": "Organization",
            name: "eusate",
          },
          publisher: {
            "@type": "Organization",
            name: "eusate",
          },
          dateModified:
            data.lastModified || new Date().toISOString().split("T")[0],
          ...data,
        };

      case "homepage":
        // Combine multiple schemas for homepage
        return [
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "eusate",
            url: baseUrl,
            logo: `${baseUrl}/social-image.png`,
            description:
              "AI-powered customer support platform that helps businesses provide intelligent, automated customer service solutions.",
            foundingDate: "2024",
            sameAs: ["https://twitter.com/eusate_ai"],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "eusate - AI Customer Support Platform",
            url: baseUrl,
            description:
              "Join the waitlist for eusate, the AI-powered customer support platform.",
            publisher: {
              "@type": "Organization",
              name: "eusate",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "eusate",
            description:
              "AI-powered customer support platform with intelligent chatbots and automated customer service.",
            url: baseUrl,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/ComingSoon",
            },
            developer: {
              "@type": "Organization",
              name: "eusate",
            },
          },
        ];

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <script
      id="application-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
};

export default JsonLdSchema;
