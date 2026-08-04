import Button from "@/components/shared/molecules/Button";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { ROUTES } from "@/utils/constants";
import { FC } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecurityHero: FC = () => {
  return (
    <PageHero classNames={{ base: "pt-20 px-5" }}>
      <AnimatedBlock variants={fadeVariants} duration={3}>
        <PageHeader
          classNames={{
            wrapper: "gap-x-[120px] md:p-0 gap-y-6 md:mt-24 !flex-col lg:!flex-row",
            root: "max-w-[581px] flex-col gap-y-6 md:gap-y-8 py-4 md:py-0",
            title: "text-black md:!text-bold-5xl",
            titleContainer: "gap-y-10",
            description: "text-gray-600 leading-[150%]",
            descriptionContainer: "space-y-8",
          }}
          chipLabel="Security & Compliance"
          title="Security Management & Data Protection"
          description="Eusate handles your customers' conversations. We treat that responsibility seriously, and we'd rather tell you exactly how our systems work than hide behind generic assurances. Here's where your data lives and how we protect it."
          cta={
            <Link href={ROUTES.CONTACT}>
              <Button size="sm" className="py-2.5 px-4.5 md:py-3">
                Talk to our team
              </Button>
            </Link>
          }
          endContent={
            <div className="mx-auto max-w-[380px] w-full p-10">
              <Image
                src="/security/hero.svg"
                width={298}
                height={340}
                alt="security illustration"
                className="w-full h-full"
              />
            </div>
          }
        />
      </AnimatedBlock>
    </PageHero>
  );
};

export default SecurityHero;
