"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

// Points matching the image: relatively flat with slight dip then rising toward the right
const POINTS = [
  { x: 0, y: 55 },
  { x: 14, y: 58 },
  { x: 28, y: 52 },
  { x: 76, y: 44 },
  { x: 84, y: 32 },
  { x: 100, y: 18 },
];

const toSVGPoints = (pts: { x: number; y: number }[]) =>
  pts.map((p) => `${p.x},${p.y}`).join(" ");

function AnimatedDot({
  cx,
  cy,
  delay,
  isLast = false,
}: {
  cx: number;
  cy: number;
  delay: number;
  isLast?: boolean;
}) {
  return (
    <>
      {/* Outer glow ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={isLast ? 5.5 : 4.5}
        fill={isLast ? "rgba(249,115,22,0.2)" : "rgba(255,255,255,0.12)"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay,
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Core dot */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={isLast ? 3 : 2.2}
        fill={isLast ? "#f97316" : "white"}
        stroke={isLast ? "white" : "#f97316"}
        strokeWidth={0.8}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay,
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </>
  );
}

function PulseRing({
  cx,
  cy,
  delay,
}: {
  cx: number;
  cy: number;
  delay: number;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={4}
      fill="none"
      stroke="#f97316"
      strokeWidth={0.8}
      initial={{ scale: 0.6, opacity: 0.8 }}
      animate={{ scale: 2.6, opacity: 0 }}
      transition={{
        delay,
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.6,
        ease: "easeOut",
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

export const ROIGraphSVG = () => {
  const controls = useAnimation();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const pointsStr = toSVGPoints(POINTS);
  const dashX = 84;

  return (
    <div className="relative w-full pb-8 -translate-y-[80px]">
      <svg
        ref={ref}
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
        aria-label="ROI growth chart"
      >
        <defs>
          <linearGradient
            id="lineGrad"
            x1="0"
            y1="0"
            x2="100"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity={0.22} />
            <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
          </linearGradient>

          <clipPath id="revealClip">
            <motion.rect
              x={0}
              y={0}
              height={90}
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: {
                  width: 100,
                  transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            />
          </clipPath>
        </defs>

        {/* Horizontal dashed grid lines */}
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1={0}
            y1={y}
            x2={100}
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={0.4}
            strokeDasharray="2 3"
          />
        ))}

        {/* Dashed vertical marker */}
        <motion.line
          x1={dashX}
          y1={0}
          x2={dashX}
          y2={90}
          stroke="#fbbf24"
          strokeWidth={0.6}
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          viewport={{ once: false }}
          animate={controls}
          variants={{
            visible: {
              opacity: 0.6,
              transition: { delay: 1.3, duration: 0.5 },
            },
          }}
        />

        {/* Area fill + line — clipped for left-to-right reveal */}
        <g clipPath="url(#revealClip)">
          <polygon points={`${pointsStr} 100,90 0,90`} fill="url(#areaGrad)" />
          <polyline
            points={pointsStr}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Dots staggered to follow the line reveal */}
        {POINTS.map((p, i) => {
          const isLast = i === POINTS.length - 1;
          // delay proportional to x position so dots appear as line reaches them
          const dotDelay = 0.1 + (p.x / 100) * 1.5;
          return (
            <g key={i}>
              {isLast && <PulseRing cx={p.x} cy={p.y} delay={dotDelay + 0.3} />}
              <AnimatedDot cx={p.x} cy={p.y} delay={dotDelay} isLast={isLast} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
