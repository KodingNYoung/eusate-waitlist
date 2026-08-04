import { FileTextIcon, KeyIcon, MailIcon } from "@/assets/icons";
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

const ACCESS_DATA = [
  {
    id: "encrypted-secrets-manager",
    icon: KeyIcon,
    title: "Encrypted secrets manager",
    description:
      "Platform secrets and third-party API keys are injected into the runtime only at deployment. Never committed to source control, never stored in the application database.",
  },
  {
    id: "passwordless-sign-in",
    icon: MailIcon,
    title: "Passwordless sign-in",
    description:
      "Signing in uses a one-time code sent to your verified email. There is no password to be reused, phished, leaked, or stolen from us — because we never hold one.",
  },
  {
    id: "role-based-admin-audit-trail",
    icon: FileTextIcon,
    title: "Role-based admin audit trail",
    description:
      "Every administrative action is recorded with the actor, the change made, the previous and new values, and the originating IP address.",
  },
];

const Access = () => {
  return (
    <section className="md:container px-5 md:px-0 space-y-10 ">
      <AnimatedBlock variants={fadeUpVariants} duration={1}>
        <PageHeader
          classNames={{
            wrapper:
              "gap-x-[120px] md:p-0 gap-y-6 md:mt-24 !flex-col lg:!flex-row lg:!items-end",
            root: "max-w-[526px] w-full flex-col gap-y-6 md:gap-y-8 py-4 md:py-0",
            title: "text-black md:!text-bold-4xl",
            titleContainer: "gap-y-10",
            description: "text-gray-600 leading-[150%] !text-regular-lg",
            descriptionContainer: "space-y-8 whitespace-pre-wrap ",
          }}
          titleProps={{ as: "h2" }}
          chipLabel="Access"
          title="Credential and access management"
          description="The safest secret is the one we never hold. What we do hold is encrypted, injected at deploy time, and audited."
          endContent={
            <div className="mx-auto max-w-[301px] w-full md:w-[unset]">
              <Image
                src="/security/access.svg"
                width={252}
                height={253}
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
        {ACCESS_DATA.map((data) => (
          <StaggerItem
            key={data.id}
            className="flex-1 min-w-[280px]"
            variants={fadeUpVariants}
            duration={1.5}
          >
            <AccessCard {...data} />
          </StaggerItem>
        ))}
      </AnimatedBlock>
    </section>
  );
};

type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const AccessCard: FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="border border-gray-20 rounded-3xl flex-1 p-5 md:p-8 max-w-full min-w-[280px] h-full">
      <div className="bg-[linear-gradient(90deg,_#d7ab0733_0%,_#e8655533_100%)] size-11 shrink-0 rounded-xl p-px">
        <div className="bg-[linear-gradient(90deg,_#d7ab0719_0%,_#e8655519_100%),_linear-gradient(90deg,_#fff,_#fff)] h-full w-full rounded-[11px] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <Typography
        as="h3"
        className="text-bold-base text-gray-900 my-4 md:mb-6"
      >
        {title}
      </Typography>
      <Typography
        as="p"
        className="text-regular-base text-gray-400"
      >
        {description}
      </Typography>
    </div>
  );
};

export default Access;
