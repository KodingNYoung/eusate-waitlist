import Typography from "@/components/shared/atoms/Typography";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { StaggerItem } from "@/components/shared/organisms/AnimatedBlock/StaggerItem";
import { staggerContainer } from "@/components/shared/organisms/AnimatedBlock/variants";
import React from "react";

const ITEMS = [
  { title: "hosting", value: "EU only", description: "Madrid + AWS eu-west-1" },
  { title: "encryption", value: "TLS 1.2/1.3", description: "SSE-S3 at rest" },
  {
    title: "authentication",
    value: "Password-less",
    description: "One-time email codes",
  },
  {
    title: "incidents",
    value: "72 hours",
    description: "Customer notification",
  },
];

const SecuritySummary = () => {
  return (
    <div className="md:container px-5 md:px-0">
      <AnimatedBlock
        variants={staggerContainer}
        className="border border-gray-50 rounded-x24 p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20"
      >
        {ITEMS.map((item) => (
          <StaggerItem key={item.title} className="w-full flex-1">
            <Typography
              as="p"
              className="uppercase text-medium-xs md:text-medium-sm text-gray-500"
            >
              {item.title}
            </Typography>
            <Typography
              as="h3"
              className="text-bold-lg md:text-bold-2xl text-gray-900 mt-3 mb-5 md:mb-8 whitespace-nowrap"
            >
              {item.value}
            </Typography>
            <Typography
              as="p"
              className="text-regular-sm md:text-regular-base text-gray-400 whitespace-nowrap"
            >
              {item.description}
            </Typography>
          </StaggerItem>
        ))}
      </AnimatedBlock>
    </div>
  );
};

export default SecuritySummary;
