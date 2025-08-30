import {
  AiStrokeIcon,
  AnalyticsIcon,
  BookIcon,
  CodeIcon,
  IterationIcon,
  TicketIcon,
} from "@/assets/icons";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import React from "react";
import { motion } from "motion/react";

const features = [
  {
    icon: TicketIcon,
    title: "AI-Powered Helpdesk",
    desc: "AI automated responses that learn from your business context to provide instant, accurate answers.",
  },
  {
    icon: BookIcon,
    title: "Dynamic Knowledge Base",
    desc: "Dynamic documentation that allow information from multiple kinds of sources as context for AI.",
  },
  {
    icon: CodeIcon,
    title: "Developer Space",
    desc: "Connect our AI to your systems so it can actually solve problems, not just provide answers.",
  },
  {
    icon: AiStrokeIcon,
    title: "AI Playground",
    desc: "Test and fine-tune AI responses before deploying them to your customers.",
  },
  {
    icon: AnalyticsIcon,
    title: "Advanced Analytics",
    desc: "Deep insights into customer behavior and support performance metrics.",
  },
  {
    icon: IterationIcon,
    title: "Continuous Learning",
    desc: "AI that gets smarter with every interaction, improving over time automatically.",
  },
];

const Features = () => {
  return (
    <section
      className="container py-16 sm:py-28 grid gap-10 sm:gap-16"
      id="features"
    >
      <header className="grid gap-6 justify-items-center sm:gap-10 text-center">
        <motion.div
          className="w-11/12 max-w-[550px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0,
            ease: "easeInOut",
          }}
          viewport={{ once: true, margin: "-100px 0px" }}
        >
          <Typography
            as="h2"
            className="text-black text-bold-3xl sm:text-bold-5xl leading-[120%]"
          >
            <span>Everything you need to</span>{" "}
            <GradientBorder
              classNames={{
                root: "rounded-full inline-block mt-3 leading-[70%] shadow-soft-medium",
              }}
              borderWidth={2}
              borderColor="bg-[linear-gradient(90deg,_rgba(215,_171,_7,_0.5)_0%,_rgba(232,_101,_85,_0.5)_100%)]"
            >
              <span className="text-gradient py-1.5 px-4 sm:py-3 sm:px-6  inline-block text-[26px] sm:text-[40px] mb-1">
                revolutionize
              </span>
            </GradientBorder>{" "}
            support
          </Typography>
        </motion.div>
        <motion.div
          className="w-11/12 max-w-[661px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0,
            delay: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true, margin: "-100px 0px" }}
        >
          <Typography
            as="span"
            className="text-regular-sm sm:text-regular-lg text-gray-600 leading-[170%]"
          >
            Eusate combines cutting-edge AI with intuitive design to create the
            most powerful customer support platform ever built.
          </Typography>
        </motion.div>
      </header>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(342px,_1fr))]">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-25 rounded-x20 p-12 flex items-center text-center flex-col gap-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0,
              opacity: {
                duration: 1,
                delay: 0.2 + 0.1 * idx,
                ease: "easeInOut",
              },
              y: {
                duration: 1,
                delay: 0.2 + 0.1 * idx,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true, margin: "-100px 0px" }}
          >
            <div
              className="size-12 min-w-12 min-h-12 p-px mb-4 rounded-xl"
              style={{
                background:
                  "linear-gradient(40.17deg, #D7AB07 3.57%, #FFFFFF 51.79%)",
              }}
            >
              <div
                className="h-full w-full flex items-center justify-center rounded-[inherit]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(215, 171, 7, 0.05) 0%, rgba(232, 101, 85, 0.05) 100%), rgb(255, 255, 255)",
                }}
              >
                {feature.icon}
              </div>
            </div>
            <Typography as="h4" className="text-semibold-lg text-gray-900">
              {feature.title}
            </Typography>
            <Typography as="p" className="text-regular-base text-gray-600">
              {feature.desc}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
