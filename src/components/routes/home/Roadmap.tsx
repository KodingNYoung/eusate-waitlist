import { CheckIcon } from "@/assets/icons";
import GradientBorder from "@/components/shared/atoms/GradientBorder";
import Typography from "@/components/shared/atoms/Typography";
import { cls } from "@/utils/helpers";
import React from "react";

enum RoadmapStatus {
  COMPLETED = "completed",
  CURRENT = "current",
  UPCOMING = "upcoming",
}
const roadmapItems = [
  {
    status: RoadmapStatus.COMPLETED,
    quarter: "April 2024",
    title: "Problem Discovery",
    desc: "Customer support is broken. Businesses of all sizes struggle with long wait times, costly support teams, human error, and poor documentation — leaving customers frustrated and businesses stretched thin.",
  },
  {
    status: RoadmapStatus.COMPLETED,
    quarter: "May 2024",
    title: "Problem Validation",
    desc: "We put this challenge to the test with interviews, surveys, and real-world research. The feedback was clear: businesses everywhere share the same frustrations and are eager for a smarter solution.",
  },
  {
    status: RoadmapStatus.COMPLETED,
    quarter: "August 2024",
    title: "Ideation & Strategy",
    desc: "Our vision is simple — reinvent customer support with AI. By combining automated ticketing, an AI-powered helpdesk, a developer-friendly space, and more, we're building a product designed to solve today's biggest support problems.",
  },
  {
    status: RoadmapStatus.COMPLETED,
    quarter: "September 2024",
    title: "MVP",
    desc: "We built a working prototype to prove the concept. Our MVP showcases the Core AI Engine, the AI Playground, and the Developer Space, delivering the foundation of a next-generation support platform.",
  },
  {
    status: RoadmapStatus.CURRENT,
    quarter: "September 2025",
    title: "Beta Launch",
    desc: "We're inviting 10 fast-growing businesses to be the first to experience Eusate. Early testers get 3 months of free access, direct founder support, and the chance to shape the product — no credit card required.",
  },
  {
    status: RoadmapStatus.UPCOMING,
    quarter: "Q4 2025",
    title: "Continuous Iteration",
    desc: "Feedback fuels growth. Every insight from our testers helps us refine, improve, and evolve the platform in real time, ensuring we're ready for a powerful full launch.",
  },
  {
    status: RoadmapStatus.UPCOMING,
    quarter: "Q1 2026",
    title: "Public Launch",
    desc: "The big step forward. We'll open Eusate to the wider market, ready to scale, support heavier workloads, and deliver AI-powered customer support to businesses everywhere.",
  },
  {
    status: RoadmapStatus.UPCOMING,
    quarter: "Q2 2026",
    title: "Growth & Expansion",
    desc: "This is just the beginning. We're scaling globally, adding powerful CRM integrations, expanding infrastructure, and setting the stage to compete with the world's leading platforms.",
  },
];

const indicatorIconBorderColor = {
  completed: "bg-[linear-gradient(40.64deg,_#0A0A0A_3.27%,_#FFFFFF_96.73%)]",
  current: "bg-[linear-gradient(40.17deg,_#D7AB07_3.57%,_#FFFFFF_51.79%)]",
  upcoming: "bg-[linear-gradient(40.17deg,_#E4E7EC_3.57%,_#FFFFFF_51.79%)]",
};

const indicatorIconBgColor = {
  completed: "bg-gray-50",
  current: "bg-[#FDFAF3]",
  upcoming: "bg-gray-25",
};

const Roadmap = () => {
  return (
    <section
      className="container my-16 sm:my-28 grid gap-10 sm:gap-16"
      id="roadmap"
    >
      <header className="grid gap-6 justify-items-center sm:gap-10 text-center">
        <Typography
          as="h2"
          className="text-black text-bold-3xl sm:text-bold-5xl w-11/12 max-w-[550px] leading-[120%]"
        >
          <span>Our</span>{" "}
          <GradientBorder
            classNames={{
              root: "rounded-full inline-block mb-3 leading-[70%] shadow-soft-medium",
            }}
            borderWidth={2}
            borderColor="bg-[linear-gradient(90deg,_rgba(215,_171,_7,_0.5)_0%,_rgba(232,_101,_85,_0.5)_100%)]"
          >
            <span className="text-gradient py-1.5 px-4 sm:py-3 sm:px-6  inline-block text-[26px] sm:text-[40px] mb-1">
              Roadmap
            </span>
          </GradientBorder>{" "}
          <br />& steps into the future
        </Typography>
        <Typography
          as="span"
          className="text-regular-sm sm:text-regular-lg w-11/12 max-w-[661px] text-gray-600 leading-[170%]"
        >
          Eusate combines cutting-edge AI with intuitive design to create the
          most powerful customer support platform ever built.
        </Typography>
      </header>
      <div className="max-w-[696px] mx-auto w-full">
        {roadmapItems.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex flex-col items-center gap-1 pt-2">
              <GradientBorder
                classNames={{
                  root: cls("size-8 min-w-8 min-h-8 rounded-xl"),
                  container: "flex items-center justify-center",
                }}
                bgColor={indicatorIconBgColor[item.status]}
                borderColor={indicatorIconBorderColor[item.status]}
              >
                {item.status === RoadmapStatus.COMPLETED ? (
                  CheckIcon
                ) : (
                  <div
                    className={cls(
                      "size-5 min-w-5 min-h-5 p-0.5 rounded-full",
                      item.status === RoadmapStatus.CURRENT
                        ? "bg-brand-gradient"
                        : "bg-gray-200"
                    )}
                  >
                    <div
                      className={cls(
                        "w-full h-full rounded-[inherit]",
                        indicatorIconBgColor[item.status]
                      )}
                    />
                  </div>
                )}
              </GradientBorder>
              {roadmapItems.length - 1 !== idx && (
                <div className="flex-1 flex items-center w-0.5 bg-gray-50" />
              )}
            </div>
            <div
              className={cls(
                "my-3 flex-1 flex flex-col p-6 rounded-x20 bg-contain bg-top-right bg-no-repeat",
                item.status === RoadmapStatus.CURRENT
                  ? "bg-[url(/images/roadmap-completed-bg.webp)] bg-black"
                  : "bg-gray-25"
              )}
            >
              <div className="flex items-center gap-6">
                <Typography
                  as="span"
                  className={cls(
                    "text-semibold-sm w-fit px-2 py-1 rounded-lg",
                    item.status === RoadmapStatus.CURRENT
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 bg-gray-50"
                  )}
                >
                  {item.quarter}
                </Typography>
                {item.status === RoadmapStatus.CURRENT && (
                  <GradientBorder
                    classNames={{
                      root: "rounded-lg",
                      container: "px-2 py-1 flex items-center gap-2.5",
                    }}
                    bgColor="bg-[#20160F]"
                    borderColor="bg-[linear-gradient(90deg,_rgba(215,_171,_7,_0.2)_0%,_rgba(232,_101,_85,_0.2)_100%)]"
                  >
                    <div className="size-2 min-w-2 min-h-2 bg-brand-gradient rounded-full" />
                    <div className="text-gradient text-semibold-sm">
                      Current Milestone
                    </div>
                  </GradientBorder>
                )}
              </div>
              <Typography
                as="h5"
                className={cls(
                  "mt-6 mb-2 text-semibold-lg",
                  item.status === RoadmapStatus.CURRENT
                    ? "text-white"
                    : "text-gray-900"
                )}
              >
                {item.title}
              </Typography>
              <Typography
                as="span"
                className={cls(
                  "text-regular-base",
                  item.status === RoadmapStatus.CURRENT
                    ? "text-gray-300"
                    : "text-gray-600"
                )}
              >
                {item.desc}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
