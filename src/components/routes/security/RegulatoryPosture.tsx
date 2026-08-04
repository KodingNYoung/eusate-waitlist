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

const REGULATORY_POSTURE_DATA = [
  {
    id: "gdpr",
    title: "GDPR",
    statusText: "Aligned infrastructure",
    description:
      "Because our application and backups are hosted entirely within the EU (Madrid and AWS eu-west-1), Eusate's infrastructure is built on a foundation aligned with GDPR's data residency expectations.\n\nAt this stage, Eusate does not yet offer a standalone Data Processing Agreement (DPA). Data processing terms are currently covered through our Privacy Policy and Terms & Conditions, which customers accept when signing up.",
  },
  {
    id: "ndpr",
    title: "NDPR",
    statusText: "In progress",
    inProgress: true,
    description:
      "Eusate is built with the core principles of the Nigeria Data Protection Regulation in mind, and formal registration is in progress as we scale our compliance program.\n\nA dedicated DPA, formal legal basis documentation, and an EU representative designation are on our compliance roadmap as we scale to serve larger regulated customers.",
  },
];

const RegulatoryPosture = () => {
  return (
    <div className="md:container bg-gold-50 rounded-[40px] px-8 py-10 md:px-20 space-y-10">
      <AnimatedBlock variants={fadeVariants} duration={1}>
        <PageHeader
          chipLabel="Regulatory posture"
          title="Where we stand, in plain terms"
          description="We know regulatory posture is often the deciding factor for fintech and other regulated businesses. Here is exactly what is in place and what is still on the roadmap."
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
        {REGULATORY_POSTURE_DATA.map((data) => (
          <StaggerItem
            className="flex-1 min-w-[320px] max-w-[448px]"
            key={data.id}
          >
            <RegulatoryPostureCard {...data} />
          </StaggerItem>
        ))}
      </AnimatedBlock>
    </div>
  );
};

type CardProps = {
  title: string;
  statusText: string;
  inProgress?: boolean;
  description: string;
};

const RegulatoryPostureCard: FC<CardProps> = ({
  title,
  statusText,
  inProgress,
  description,
}) => {
  return (
    <div className="bg-white rounded-3xl flex-1 p-5 md:p-8 max-w-full min-w-[320px] h-full space-y-6 border border-gray-20">
      <header className="flex items-center justify-between gap-4">
        <Typography
          as="h3"
          className="text-bold-sm md:text-bold-base text-gray-900"
        >
          {title}
        </Typography>
        {inProgress ? (
          <Typography
            as="p"
            className="w-fit px-3 py-1.5 text-gold-700 text-medium-sm bg-warning-50 border border-gold-200 rounded-xl"
          >
            {statusText}
          </Typography>
        ) : (
          <div className="bg-[linear-gradient(90deg,_#d7ab0733_0%,_#e8655533_100%)] shrink-0 rounded-xl p-px">
            <div className="bg-[linear-gradient(90deg,_#d7ab0719_0%,_#e8655519_100%),_linear-gradient(90deg,_#fff,_#fff)] h-full w-full rounded-[11px] py-1.5 px-3">
              <Typography as="span" className="text-gradient text-medium-sm block">{statusText}</Typography>
            </div>
          </div>
        )}
      </header>
      <Typography
        as="p"
        className="whitespace-pre-wrap mt-6 text-regular-base text-gray-400"
      >
        {description}
      </Typography>
    </div>
  );
};

export default RegulatoryPosture;
