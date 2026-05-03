import { motion } from "framer-motion";

export const AnimateGraph = () => {
  return (
    <div className="relative w-full">
      {/* SVG Line + Fill */}
      <svg
        viewBox="0 0 600 220"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient fill */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D6A300" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D6A300" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Filled area animation */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          //   viewport={{ once: true }}
          d="
                    M20 180
                    C60 180, 70 100, 120 110
                    C170 120, 180 150, 230 120
                    C280 80, 310 100, 350 70
                    C390 50, 420 170, 470 130
                    C520 90, 540 160, 570 20
                    L570 220
                    L20 220
                    Z
                  "
          fill="url(#areaGradient)"
          className="text-warning-500"
        />

        {/* Line animation */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.2,
          }}
          //   viewport={{ once: true }}
          d="
                    M20 180
                    C60 180, 70 100, 120 110
                    C170 120, 180 150, 230 120
                    C280 80, 310 100, 350 70
                    C390 50, 420 170, 470 130
                    C520 90, 540 160, 570 20
                  "
          stroke="url(#lineGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          className="drop-shadow-sm"
        />

        {/* Stroke gradient */}
        <defs>
          <linearGradient
            id="lineGradient"
            x1="0"
            y1="0"
            x2="600"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#D6A300" />
            <stop offset="100%" stopColor="#F26A4B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
