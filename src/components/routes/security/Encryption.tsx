import { CheckIcon, SecuritySafeIcon, UploadCloudIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { StaggerItem } from "@/components/shared/organisms/AnimatedBlock/StaggerItem";
import {
  fadeVariants,
  staggerContainer,
} from "@/components/shared/organisms/AnimatedBlock/variants";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { FC } from "@/utils/types";
import React from "react";

const ENCRYPTION_DATA = [
  {
    id: "in-transit",
    icon: SecuritySafeIcon,
    title: "In transit",
    subtitle: "Madrid, Spain",
    items: [
      {
        title: "TLS 1.2 and 1.3 only.",
        description: "Older, weaker protocols are refused outright.",
      },
      {
        title: "HSTS enabled.",
        description:
          "Browsers are instructed never to attempt an unencrypted connection to us in the first place.",
      },
      {
        title: "Encrypted WebSockets.",
        description: "Real-time features run over wss.",
      },
    ],
  },
  {
    id: "object-storage-backups",
    icon: UploadCloudIcon,
    title: "Object storage & backups",
    subtitle: "AWS eu-west-1, Ireland",
    items: [
      {
        title: "SSE-S3 by default.",
        description:
          "Files, database backups, and logs are encrypted before they touch disk.",
      },
      {
        title: "Private primary database.",
        description:
          "It runs on dedicated infrastructure that is not reachable from the public internet.",
      },
      {
        title: "Application-layer encryption for secrets.",
        description:
          "Sensitive credentials are encrypted before they are written to the database.",
      },
    ],
  },
];

const Encryption = () => {
  return (
    <div className="md:container bg-gold-50 rounded-[40px] px-8 py-10 md:px-20 space-y-10">
      <AnimatedBlock variants={fadeVariants} duration={1}>
        <PageHeader
          chipLabel="Encryption"
          title="Encrypted in transit. Encrypted at rest."
          description="Every connection to Eusate is encrypted, and every object we write to storage is encrypted before it touches disk."
          classNames={{
            wrapper: "!px-0 md:justify-center md:text-center ",
            root: "flex-col gap-6",
            titleContainer: "!gap-y-4 md:gap-y-10",
            chip: "md:mx-auto",
            title: "md:!text-bold-4xl",
            description: "max-w-[753px]",
          }}
        />
      </AnimatedBlock>
      <AnimatedBlock
        variants={staggerContainer}
        className="flex flex-wrap justify-center gap-6"
      >
        {ENCRYPTION_DATA.map((data) => (
          <StaggerItem
            className="flex-1 min-w-[320px] max-w-[448px]"
            key={data.id}
          >
            <DataEncryptionCard {...data} />
          </StaggerItem>
        ))}
      </AnimatedBlock>
    </div>
  );
};

type CardProps = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
};

export const DataEncryptionCard: FC<CardProps> = ({
  icon,
  title,
  subtitle,
  items,
}) => {
  return (
    <div className="bg-white rounded-3xl flex-1 p-5 md:p-8 max-w-full min-w-[320px] h-full space-y-6 border border-gray-20">
      <div className="flex items-center justify-start gap-4">
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
      <div className="h-px w-full bg-gray-50" />
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="shrink-0 text-gold-500 size-7 rounded-full bg-[linear-gradient(90deg,_#d7ab0719_0%,_#e8655519_100%)] flex items-center justify-center">
              {CheckIcon}
            </span>
            <Typography
              as="p"
              className="text-regular-sm md:text-regular-base text-gray-400"
            >
              <span className="text-bold-sm md:text-bold-base text-gray-900">
                {item.title}
              </span>{" "}
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Encryption;
