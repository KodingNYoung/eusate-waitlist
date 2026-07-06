import React from "react";
import clsx from "clsx";

type ProgressBarProps = {
  value: number;
  max?: number;
  color?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  label?: string;
  className?: string;
};

const colorMap = {
  primary: "bg-blue-600",
  success: "bg-green-600",
  warning: "bg-yellow-500",
  danger: "bg-red-600",
};

const sizeMap = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = "primary",
  size = "md",
  showValue = false,
  label,
  className,
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={clsx("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1 text-sm text-gray-400">
          <span>{label}</span>
          {showValue && <span>{Math.round(percentage)}%</span>}
        </div>
      )}

      <div
        className={clsx(
          "w-full bg-gray-200/20 rounded-full overflow-hidden",
          sizeMap[size]
        )}
      >
        <div
          className={clsx(
            "h-full transition-all duration-300 ease-in-out",
            colorMap[color]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
