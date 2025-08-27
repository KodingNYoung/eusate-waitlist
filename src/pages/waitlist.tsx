import { FlashGradientIcon } from "@/assets/icons";
import WaitlistForm from "@/components/routes/waitlist/WaitlistForm";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import MetaProps from "@/components/shared/molecules/MetaProps";
import Navbar from "@/components/shared/organisms/navbar";
import { FC } from "@/utils/types";
import React from "react";

const Waitlist: FC = () => {
  return (
    <main className="h-screen bg-[url(/images/waitlist-sm.webp),_linear-gradient(#000000,_#000000)] sm:bg-[url(/images/waitlist.webp),_linear-gradient(#000000,_#000000)] bg-center bg-no-repeat bg-cover">
      <MetaProps
        title="Join eusate Waitlist - Early Access to AI Customer Support"
        description="Be among the first to experience EUSATE's exceptional customer support. Join our waitlist for early access, exclusive updates, and special launch pricing for your business and startup."
        path="/waitlist"
      />
      <Navbar />
      <section className="h-full flex flex-col md:items-center justify-center gap-10 container">
        <header className="flex flex-col md:items-center justify-center gap-6 md:text-center">
          <GradientBorder
            classNames={{
              root: "w-fit rounded-[90px]",
              container:
                "flex items-center justify-center gap-2 bg-black py-2.5 px-3",
            }}
            borderWidth={1}
            borderColor="bg-[linear-gradient(140deg,_rgba(194,_194,_194,_0.6)_9.8%,_rgba(194,_194,_194,_0)_39.18%),_linear-gradient(154.19deg,_rgba(204,_204,_204,_0)_70.34%,_rgba(194,_194,_194,_0.6)_94.92%)]"
            bgColor="#170C06"
          >
            {FlashGradientIcon}
            <Typography as="span" className="text-gradient text-medium-sm">
              Launching soon!
            </Typography>
          </GradientBorder>
          <Typography
            as="h2"
            className="text-white text-bold-4xl sm:text-bold-6xl max-w-[550px] bg-[linear-gradient(180deg,_#FFFFFF_60.35%,_#797979_100%)] text-transparent bg-clip-text pb-2 -mb-2"
          >
            Join the waitlist <br /> to get early access
          </Typography>
          <Typography
            as="p"
            className="text-gray-300 sm:max-w-[610px] text-regular-base sm:text-regular-lg"
          >
            Secure your spot to get early access to Eusate&apos;s revolutionary
            AI-powered support platform.
          </Typography>
        </header>
        <WaitlistForm />
      </section>
    </main>
  );
};

export default Waitlist;
