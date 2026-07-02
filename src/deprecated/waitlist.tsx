import { FlashGradientIcon } from "@/assets/icons";
import WaitlistForm from "./_components/waitlist/WaitlistForm";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import Navbar from "@/components/shared/organisms/navbar";
import { FC } from "@/utils/types";
import React from "react";
import { motion } from "motion/react";

const Waitlist: FC = () => {
  return (
    <main className="h-screen bg-[url(/images/waitlist-sm.webp),_linear-gradient(#000000,_#000000)] sm:bg-[url(/images/waitlist.webp),_linear-gradient(#000000,_#000000)] bg-center bg-no-repeat bg-cover">
      <Navbar />
      <section className="h-full flex flex-col md:items-center justify-center gap-10 container">
        <header className="flex flex-col md:items-center justify-center gap-6 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.8,
              type: "spring",
              bounce: 0,
              delay: 0.2,
              ease: "easeInOut",
            }}
          >
            <Typography
              as="h2"
              className="text-white text-bold-4xl sm:text-bold-6xl max-w-[550px] bg-[linear-gradient(180deg,_#FFFFFF_60.35%,_#797979_100%)] text-transparent bg-clip-text pb-2 -mb-2"
            >
              Join the waitlist <br /> to get early access
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.7,
              type: "spring",
              bounce: 0,
              delay: 0.4,
              ease: "easeInOut",
            }}
          >
            <Typography
              as="p"
              className="text-gray-300 sm:max-w-[610px] text-regular-base sm:text-regular-lg"
            >
              Secure your spot to get early access to Eusate&apos;s
              revolutionary AI-powered support platform.
            </Typography>
          </motion.div>
        </header>
        <WaitlistForm />
      </section>
    </main>
  );
};

export default Waitlist;
