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
    quarter: "Q1 2024",
    title: "Core AI Engine",
    desc: "Advanced natural language processing and context understanding.",
  },
  {
    status: RoadmapStatus.COMPLETED,
    quarter: "Q1 2024",
    title: "Core AI Engine",
    desc: "Advanced natural language processing and context understanding.",
  },
  {
    status: RoadmapStatus.CURRENT,
    quarter: "Q1 2024",
    title: "Core AI Engine",
    desc: "Advanced natural language processing and context understanding.",
    badge: "Currently available",
  },
  {
    status: RoadmapStatus.UPCOMING,
    quarter: "Q1 2024",
    title: "Core AI Engine",
    desc: "Advanced natural language processing and context understanding.",
  },
  {
    status: RoadmapStatus.UPCOMING,
    quarter: "Q1 2024",
    title: "Core AI Engine",
    desc: "Advanced natural language processing and context understanding.",
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
                      Currently available
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
