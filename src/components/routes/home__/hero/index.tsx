import { ArrowRightIcon } from "@/assets/icons";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import React from "react";
import BenefitAutoScroller from "../BenefitAutoscroller";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const HomeHero = () => {
  return (
    <div className="flex h-screen max-h-[700px] sm:max-h-[916px]">
      <div className="min-w-[calc(50%_+_194.4px)] w-full h-full pt-24 bg-[url(/images/benefit-bg-sm.webp),_linear-gradient(#000000,_#000000)] sm:bg-[url(/images/benefit-bg.webp),_linear-gradient(#000000,_#000000)] bg-center bg-no-repeat bg-cover">
        <div className="max-w-[890.4px] px-6 h-full w-full ml-auto flex flex-col justify-center items-start">
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
                  "flex items-center justify-center gap-6 bg-black p-2 pl-4",
              }}
              borderWidth={1}
              borderColor="bg-[linear-gradient(268.2deg,_rgba(255,_255,_255,_0.3)_21.15%,_rgba(255,_255,_255,_0.09)_78.85%)]"
              bgColor="bg-[#0E0E0E]"
            >
              <Typography as="span" className="text-gray-300 text-regular-base">
                Claim early access
              </Typography>
              <Link href="/waitlist">
                <GradientBorder
                  classNames={{
                    root: "w-fit rounded-[90px] group",
                    container: "bg-black py-1.5 px-4",
                  }}
                  borderWidth={1}
                  bgColor="bg-[linear-gradient(180deg,_#151515_0%,_#1C1B1B_100%)]"
                  borderColor="bg-[linear-gradient(140deg,_rgba(194,_194,_194,_0.6)_9.8%,_rgba(194,_194,_194,_0)_39.18%),_linear-gradient(154.19deg,_rgba(204,_204,_204,_0)_70.34%,_rgba(194,_194,_194,_0.6)_94.92%)]"
                >
                  <Typography
                    as="span"
                    className="text-gradient text-semibold-sm inline-block"
                  >
                    Join waitlist
                  </Typography>
                </GradientBorder>
              </Link>
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
              className="text-white text-bold-4xl my-6 sm:text-bold-6xl max-w-[644px]"
            >
              The Future of Customer Support
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
              className="text-gray-300 max-w-[644px] text-regular-base sm:text-regular-lg"
            >
              Join forward-thinking businesses testing Eusate&apos;s
              revolutionary AI-powered support platform. Get 3 months free
              access and shape the future of customer service.
            </Typography>
          </motion.div>
          <motion.div
            className="my-10 group/btn"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 0,
              ease: "easeInOut",
              opacity: { delay: 0.6, duration: 1.5 },
              y: { delay: 0.6, duration: 1.5 },
            }}
          >
            <Link href="/apply" target="_blank" rel="noreferrer">
              <Button
                classNames={{
                  root: "gradient py-4.5 px-7 w-[268px] !justify-start",
                  label: "text-semibold-sm",
                }}
                endContent={
                  <span className="stroke-white inline-block ml-0 group-hover/btn:ml-2 transition-all duration-150">{ArrowRightIcon}</span>
                }
              >
                Apply to be an Early Tester
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="my-10 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.3,
              type: "spring",
              bounce: 0,
              delay: 0.7,
              ease: "easeInOut",
            }}
          >
            <BenefitAutoScroller />
          </motion.div>
        </div>
      </div>
      <div className="min-w-[calc(50%_-_194.4px)] bg-[url(/images/hero-rhs-bg.webp)] bg-center bg-no-repeat bg-cover hidden lg:block relative overflow-hidden">
        <motion.div
          className="w-[1200px] h-[851px] absolute left-16 top-40"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/helpdesk-ticket-screen.webp"
            width={1200}
            height={851}
            className="w-[auto]"
            alt="helpdesk ticket screen"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
