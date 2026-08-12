import { ServerIcon, UploadCloudIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { StaggerItem } from "@/components/shared/organisms/AnimatedBlock/StaggerItem";
import {
  fadeUpVariants,
  staggerContainer,
} from "@/components/shared/organisms/AnimatedBlock/variants";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { FC } from "@/utils/types";
import Image from "next/image";
import React from "react";

const RESIDENCY_DATA = [
  {
    id: "dedicated-infra",
    icon: ServerIcon,
    title: "Dedicated infrastructure",
    subtitle: "Madrid, Spain",
    description:
      "The Eusate application runs on dedicated infrastructure in Madrid — not shared multi-tenant hosting outside the EU.",
  },
  {
    id: "object-storage-backups",
    icon: UploadCloudIcon,
    title: "Object storage & backups",
    subtitle: "AWS eu-west-1, Ireland",
    description:
      "Files, database backups, and logs live in Amazon S3 in the Ireland region, encrypted server-side by default.",
  },
];

const DataResidency = () => {
  return (
    <section className="md:container px-5 md:px-0 space-y-10 ">
      <AnimatedBlock variants={fadeUpVariants} duration={1}>
        <PageHeader
          classNames={{
            wrapper:
              "gap-x-[120px] md:p-0 gap-y-10 md:mt-24 !flex-col lg:!flex-row lg:!items-end",
            root: "max-w-[660px] w-full flex-col gap-y-6 md:gap-y-8 py-4 md:py-0",
            title: "text-black md:!text-bold-4xl",
            titleContainer: "gap-y-10",
            description: "text-gray-600 leading-[150%] !text-regular-lg",
            descriptionContainer: "space-y-8 whitespace-pre-wrap",
          }}
          titleProps={{ as: "h2" }}
          chipLabel="Data residency"
          title="Where your data is hosted"
          description={`Both our application and our backups sit entirely within the European Union. Your data does not leave the EU in the course of normal platform operation.\n\nFor customers evaluating data residency requirements, including fintech and other regulated businesses, this means your conversation data is processed and stored under EU jurisdiction by default, not routed through infrastructure outside it.`}
          endContent={
            <div className="mx-auto max-w-[301px] w-full md:w-[unset]">
              <Image
                src="/security/data-recidency.svg"
                width={301}
                height={203}
                alt="data recidency illustration"
                className="w-full h-full"
              />
            </div>
          }
        />
      </AnimatedBlock>
      <AnimatedBlock
        variants={staggerContainer}
        className="flex flex-wrap justify-start gap-6"
      >
        {RESIDENCY_DATA.map((data) => (
          <StaggerItem
            key={data.id}
            className="flex-1 min-w-[300px]"
            variants={fadeUpVariants}
            duration={1.5}
          >
            <DetaResidencyCard {...data} />
          </StaggerItem>
        ))}
      </AnimatedBlock>
    </section>
  );
};
type CardProps = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
};
const DetaResidencyCard: FC<CardProps> = ({
  icon,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="border border-gray-20 rounded-3xl flex-1 p-8 max-w-full min-w-[300px] h-full">
      <div className="flex items-center justify-start gap-4 mb-6">
        <div className="bg-[linear-gradient(90deg,_#d7ab0733_0%,_#e8655533_100%)] size-11 shrink-0 rounded-xl p-px">
          <div className="bg-[linear-gradient(90deg,_#d7ab0719_0%,_#e8655519_100%),_linear-gradient(90deg,_#fff,_#fff)] h-full w-full rounded-[11px] flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="grid gap-1.5">
          <Typography
            as="h3"
            className="text-bold-sm md:text-bold-base text-gray-900"
          >
            {title}
          </Typography>
          <Typography
            as="small"
            className="text-medium-xs md:text-medium-sm text-gray-500"
          >
            {subtitle}
          </Typography>
        </div>
      </div>
      <Typography as="p" className="text-regular-sm md:text-regular-base text-gray-400">
        {description}
      </Typography>
    </div>
  );
};

export default DataResidency;
