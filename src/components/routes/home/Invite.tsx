import { ArrowRightIcon, FlashGradientIcon } from "@/assets/icons";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import React from "react";
import BenefitAutoScroller from "./BenefitAutoscroller";

const Invite = () => {
  return (
    <section className="py-16 sm:py-28 container max-w-[1344px]">
      <div className="bg-[url(/images/invite-bg-sm.webp),_linear-gradient(#000000,_#000000)] sm:bg-[url(/images/invite-bg.webp),_linear-gradient(#000000,_#000000)] bg-center bg-no-repeat bg-cover py-20 px-10 rounded-x20 flex flex-col items-center gap-6 text-center">
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
          {FlashGradientIcon}
          <Typography as="span" className="text-gradient text-medium-sm">
            Join us now
          </Typography>
        </GradientBorder>
        <Typography
          as="h2"
          className="text-white text-bold-2xl sm:text-bold-5xl max-w-[580px]"
        >
          Ready to revolutionize your customer support?
        </Typography>
        <Typography
          as="p"
          className="text-gray-600 max-w-[562px] text-regular-sm sm:text-regular-lg mb-9"
        >
          Join hundreds of forward-thinking businesses already testing Eusate.
          Applications are reviewed within 24 hours.
        </Typography>
        <Button
          classNames={{
            root: "gradient py-4.5 px-7",
            label: "text-semibold-sm",
          }}
          endContent={<span className="stroke-white">{ArrowRightIcon}</span>}
        >
          Apply Now - It’s Free!
        </Button>
        <BenefitAutoScroller />
      </div>
    </section>
  );
};

export default Invite;
