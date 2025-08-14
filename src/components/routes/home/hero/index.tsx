import { AiFillIcon, ArrowRightIcon } from "@/assets/icons";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import React from "react";
import BenefitAutoScroller from "../BenefitAutoscroller";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex h-screen max-h-[700px] sm:max-h-[879px]">
      <div className="min-w-[calc(50%_+_194.4px)] w-full h-full pt-24 bg-[url(/images/benefit-bg-sm.webp),_linear-gradient(#000000,_#000000)] sm:bg-[url(/images/benefit-bg.webp),_linear-gradient(#000000,_#000000)] bg-center bg-no-repeat bg-cover">
        <div className="max-w-[890.4px] px-6 h-full w-full ml-auto flex flex-col justify-center items-start">
          <GradientBorder
            classNames={{
              root: "w-fit rounded-[90px]",
              container:
                "flex items-center justify-center gap-2 bg-black py-2.5 px-3",
            }}
            borderWidth={1}
            borderColor="bg-[linear-gradient(90deg,_rgba(215,_171,_7,_0.2)_0%,_rgba(232,_101,_85,_0.2)_100%)]"
            bgColor="#170C06"
          >
            {AiFillIcon}
            <Typography as="span" className="text-gradient text-medium-sm">
              Early Access Now Open
            </Typography>
          </GradientBorder>
          <Typography
            as="h2"
            className="text-white text-bold-4xl my-6 sm:text-bold-6xl max-w-[644px]"
          >
            The Future of AI Customer Support
          </Typography>
          <Typography
            as="p"
            className="text-gray-600 max-w-[644px] text-regular-base sm:text-regular-lg"
          >
            Join forward-thinking businesses testing Eusate&apos;s revolutionary
            AI-powered support platform. Get 3 months free access and shape the
            future of customer service.
          </Typography>
          <div className="my-10">
            <Button
              classNames={{
                root: "gradient py-4.5 px-7",
                label: "text-semibold-sm",
              }}
              endContent={
                <span className="stroke-white">{ArrowRightIcon}</span>
              }
            >
              Apply to be an Early Tester
            </Button>
          </div>
          <BenefitAutoScroller />
        </div>
      </div>
      <div className="min-w-[calc(50%_-_194.4px)] bg-[url(/images/hero-rhs-bg.webp)] bg-center bg-no-repeat bg-cover hidden lg:block relative overflow-hidden">
        <div className="w-[1200px] h-[851px] absolute left-16 top-40">
          <Image
            src="/images/helpdesk-ticket-screen.webp"
            width={1200}
            height={851}
            alt="helpdesk ticket screen"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
