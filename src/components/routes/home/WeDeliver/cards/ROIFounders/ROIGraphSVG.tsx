"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const POINTS = [
  { x: 0, y: 58 },
  { x: 14, y: 42 },
  { x: 28, y: 35 },
  { x: 42, y: 40 },
  { x: 56, y: 28 },
  { x: 70, y: 18 },
  { x: 84, y: 5 },
  { x: 100, y: 0 },
];

const toSVGPoints = (pts: { x: number; y: number }[]) =>
  pts.map((p) => `${p.x},${p.y}`).join(" ");

function AnimatedDot({
  cx,
  cy,
  delay,
  color = "white",
  size = 2.5,
}: {
  cx: number;
  cy: number;
  delay: number;
  color?: string;
  size?: number;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={size}
      fill={color}
      stroke="white"
      strokeWidth={0.8}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.35,
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
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
      animate={{ scale: 2.4, opacity: 0 }}
      transition={{
        delay,
        duration: 1.4,
        repeat: Infinity,
        repeatDelay: 0.8,
        ease: "easeOut",
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

export const ROIGraphSVG = () => {
  const controls = useAnimation();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "-60px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const pointsStr = toSVGPoints(POINTS);
  const dashX = 84;

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 90"
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
          <stop offset="0%" stopColor="#f97316" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
        </linearGradient>

        {/* KEY FIX: animate `width` from 0→100, not scaleX */}
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
        animate={controls}
        variants={{
          visible: { opacity: 0.7, transition: { delay: 1.4, duration: 0.5 } },
        }}
      />

      {/* Area fill + line — both clipped */}
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

      {/* Dots */}
      {POINTS.map((p, i) => {
        const isLast = i === POINTS.length - 1;
        const dotDelay = 0.2 + (i / POINTS.length) * 1.4;
        return (
          <g key={i}>
            {isLast && <PulseRing cx={p.x} cy={p.y} delay={dotDelay + 0.4} />}
            <AnimatedDot
              cx={p.x}
              cy={p.y}
              delay={dotDelay}
              color={isLast ? "#f97316" : "white"}
              size={isLast ? 3 : 2}
            />
          </g>
        );
      })}
    </svg>
  );
};
