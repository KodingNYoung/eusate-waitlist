import { GridLines } from "@/components/shared/organisms/GridLines";
import { WeDeliverCardTemplate } from ".";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Counter from "@/components/shared/organisms/animata/text/counter";
import type { Variants } from "framer-motion";

const bars = [
  { id: 1, height: 13.02 },
  { id: 2, height: 23.02 },
  { id: 3, height: 35 },
  { id: 4, height: 46.36 },
  { id: 5, height: 73.8 },
  { id: 6, height: 113.02 },
  { id: 7, height: 155.26416015625 },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const barVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const ResolutionRate = () => {
  return (
    <WeDeliverCardTemplate
      classNames={{
        root: "bg-black bg-[url(/home/images/ai-ticket-bg.webp)] bg-cover",
        description: "text-white/60",
        score: "text-white",
      }}
      description="AI ticket resolution rate"
      score={<Counter className="text-bold-6xl" targetValue={80} />}
      unit="%"
      graph={
        <div className="relative">
          <GridLines plot={<BarGraph />} />
        </div>
      }
    />
  );
};

const BarGraph = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: true }}
      className="flex items-end gap-2"
    >
      {bars.map(({ id, height }) =>
        id === bars.length ? (
          <HighlightedBar key={id} height={height} />
        ) : (
          <motion.div
            key={id}
            variants={barVariants}
            style={{
              height,
              transformOrigin: "bottom",
            }}
            className="bg-white/30 rounded-[8px] w-[30.57px]"
          />
        ),
      )}
    </motion.div>
  );
};

const HighlightedBar = ({ height }: { height: number }) => {
  const sectionHeight = useMemo(() => height / 3, [height]);

  return (
    <motion.div
      variants={barVariants}
      style={{
        transformOrigin: "bottom",
      }}
    >
      <div
        style={{ height: sectionHeight }}
        className="bg-warning-500 rounded-t-[8px] w-[30.57px]"
      />

      <div
        style={{ height: sectionHeight }}
        className="bg-warning-900 w-[30.57px]"
      />

      <div
        style={{ height: sectionHeight }}
        className="bg-white rounded-b-[8px] w-[30.57px]"
      />
    </motion.div>
  );
};
