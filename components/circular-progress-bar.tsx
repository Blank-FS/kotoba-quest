import React from "react";

const CircleProgressBar = ({
  percentage,
  children,
  className,
  circleWidth,
}: {
  percentage: number;
  children?: React.ReactNode;
  className?: string;
  circleWidth: number;
}) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className={className}>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={85}
          className="fill-none stroke-primary"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={85}
          className="fill-none stroke-lime-400 stroke"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="20"
          className="text-6xl text-blue-500 fill-secondary-foreground"
        >
          {percentage}%
        </text>
        {children}
      </svg>
    </div>
  );
};

export default CircleProgressBar;
