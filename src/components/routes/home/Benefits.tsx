import {
  ArrowRightIcon,
  ChartBarIcon,
  GiftIcon,
  MessageQuestionIcon,
  UserStarIcon,
} from "@/assets/icons";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import React from "react";

const benefits = [
  {
    icon: GiftIcon,
    iconBg: "bg-[#191311]",
    title: "3 Months Completely Free",
    desc: "Intelligent ticket routing and automated responses that learn from your business context.",
  },
  {
    icon: UserStarIcon,
    iconBg: "bg-[#191311]",
    title: "Direct Founder Support",
    desc: "Dynamic documentation that updates itself and provides instant, accurate answers.",
  },
  {
    icon: ChartBarIcon,
    iconBg: "bg-[#4F2C12]",
    title: "Shape the Future",
    desc: "Complete auth configurations and custom functions tailored to your tech stack.",
  },
];

const Benefits = () => {
  return (
    <section
      className="bg-[url(/images/benefit-bg-sm.webp),_linear-gradient(#000000,_#000000)] sm:bg-[url(/images/benefit-bg.webp),_linear-gradient(#000000,_#000000)] bg-center bg-no-repeat bg-cover"
      id="benefits"
    >
      <div className="container py-16 sm:py-28">
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
          {MessageQuestionIcon}
          <Typography as="span" className="text-gradient text-medium-sm">
            Why join now
          </Typography>
        </GradientBorder>
        <Typography
          as="h2"
          className="text-white text-bold-2xl my-6 sm:mb-10 sm:text-bold-5xl max-w-[580px]"
        >
          Why join our early tester program?
        </Typography>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Typography
            as="p"
            className="text-gray-600 max-w-[720px] text-regular-sm sm:text-regular-lg"
          >
            Get exclusive benefits, direct access to founders, and help shape
            the future of AI-powered customer support.
          </Typography>

          <Button
            classNames={{
              root: "gradient py-4.5 px-7",
              label: "text-semibold-sm",
            }}
            endContent={<span className="stroke-white">{ArrowRightIcon}</span>}
          >
            Apply to be an Early Tester
          </Button>
        </div>

        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(342px,_1fr))] mt-[72px]">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-5 backdrop-blur-medium rounded-x20 p-12 flex items-center text-center flex-col gap-2 border border-white border-opacity-10"
            >
              <GradientBorder
                classNames={{
                  root: "size-12 min-w-12 min-h-12 p-px mb-4 rounded-xl",
                  container:
                    "flex items-center justify-center backdrop-blur-medium",
                }}
                borderColor="bg-[linear-gradient(40.17deg,_#D7AB07_3.57%,_#FFFFFF00_51.79%)]"
                bgColor={benefit.iconBg}
              >
                {benefit.icon}
              </GradientBorder>
              <Typography as="h4" className="text-semibold-lg text-gray-100">
                {benefit.title}
              </Typography>
              <Typography as="p" className="text-regular-base text-gray-400">
                {benefit.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
