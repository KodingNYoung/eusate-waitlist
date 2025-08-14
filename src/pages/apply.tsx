import { PinIcon } from "@/assets/icons";
import Logo from "@/components/shared/atoms/Logo";
import Typography from "@/components/shared/atoms/Typography";
import { FC } from "@/utils/types";
import dynamic from "next/dynamic";
import React from "react";

const ApplyForm = dynamic(() => import("@/components/routes/apply/ApplyForm"), {
  ssr: false,
});

const Apply: FC = () => {
  return (
    <div className="h-screen bg-black flex flex-col md:flex-row">
      <div className="bg-[url(/images/particles.webp),_url(/images/form-bg.webp)] bg-no-repeat bg-center bg-cover px-6 py-14 sm:px-10 sm:py-20 min-w-[350px] md:flex-1 overflow-y-auto max-h-full">
        <Logo type="full-gradient-white" />
        <div className="mt-10 flex flex-col gap-6">
          <Typography as="h2" className="text-bold-2xl text-white">
            Apply to be an early tester
          </Typography>
          <Typography as="p" className="text-regular-base text-gray-300">
            Join forward-thinking businesses testing Eusate&apos;s revolutionary
            AI-powered support platform. Get 3 months free access and shape the
            future of customer service.
          </Typography>
          <div className="flex flex-col gap-8">
            <Typography as="h3" className="text-bold-base text-white">
              THINGS TO NOTE
            </Typography>
            <div className="flex flex-col gap-4">
              <Typography
                as="h4"
                className="text-white fill-white text-bold-base flex items-center gap-4"
              >
                {PinIcon}Deadline
              </Typography>
              <Typography as="p" className="text-regular-base text-gray-300">
                This application closes on 18 Aug, 2025.
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography
                as="h4"
                className="text-white fill-white text-bold-base flex items-center gap-4"
              >
                {PinIcon}Who should apply?
              </Typography>
              <Typography as="p" className="text-regular-base text-gray-300">
                Only small sized startups with less than 5000 active users are
                encouraged to apply.
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography
                as="h4"
                className="text-white fill-white text-bold-base flex items-center gap-4"
              >
                {PinIcon}How many startups will we accept?
              </Typography>
              <Typography as="p" className="text-regular-base text-gray-300">
                Only 10 startups will be accepted into the early testers program
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-2 flex-[2] h-full min-w-[390px]">
        <div className="bg-white w-full h-full md:rounded-x20 md:overflow-auto">
          <section className="w-full container max-w-[568px] py-16 sm:py-20 flex flex-col gap-10">
            <header className="flex flex-col gap-2.5">
              <Typography
                as="h1"
                className="font-bold text-[28px] md:text-bold-3xl leading-[120%]"
              >
                Complete a quick questionnaire.
              </Typography>
              <Typography
                as="p"
                className="text-regular-sm sm:text-regular-base text-gray-600"
              >
                Eusate combines cutting-edge AI with intuitive design to create
                the most powerful customer support platform ever built.
              </Typography>
              <Typography
                as="span"
                className="text-regular-sm sm:text-regular-base text-gray-300"
              >
                Your feedback is invaluable! By completing this quick survey,
                you can help shape the future of our product.
              </Typography>
            </header>
            <ApplyForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Apply;
