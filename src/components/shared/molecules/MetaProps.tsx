import { FC } from "@/utils/types";
import Head from "next/head";
import React from "react";
import JsonLdSchema from "./JsonLdSchema";

type Props = {
  title: string;
  description: string;
  path: string;
  jsonLdData: {
    type: "software" | "homepage" | "legal";
    data?: Record<string, unknown>;
  };
};

const SITE_URL = "https://www.eusate.com";
const DEFAULT_IMAGE = "/social-image.png";
const DEFAULT_IMAGE_ALT = "Eusate - AI-Powered Customer Support Platform";

const MetaProps: FC<Props> = ({ title, description, path, jsonLdData }) => {
  // Ensure title is not too long (recommended max 60 characters)
  const optimizedTitle =
    title.length > 60 ? `${title.substring(0, 57)}...` : title;

  // Ensure description is not too long (recommended max 160 characters)
  const optimizedDescription =
    description.length > 160
      ? `${description.substring(0, 157)}...`
      : description;

  // Build full URLs
  const fullUrl = `${SITE_URL}${path}`;
  const fullImageUrl = `${SITE_URL}${DEFAULT_IMAGE}`;

  return (
    <div>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Title */}
        <title>{optimizedTitle}</title>

        {/* Description */}
        <meta name="description" content={optimizedDescription} />

        {/* Robots */}

        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />

        {/* OG tags for WA and FB */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eusate" />
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={optimizedDescription} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:alt" content={DEFAULT_IMAGE_ALT} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eusate_ai" />
        <meta name="twitter:creator" content="@eusate_ai" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={optimizedDescription} />
        <meta name="twitter:image" content={fullImageUrl} />
        <meta name="twitter:image:alt" content={DEFAULT_IMAGE_ALT} />

        {/* Additional SEO Meta tags */}
        <meta name="author" content="Eusate" />
        <meta name="publisher" content="Eusate" />
        <meta name="application-name" content="Eusate" />

        {/* Favicon and Icons */}
        <meta name="image" content={fullImageUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <JsonLdSchema {...jsonLdData} baseUrl={SITE_URL} />
      </Head>
    </div>
  );
};

export default MetaProps;
