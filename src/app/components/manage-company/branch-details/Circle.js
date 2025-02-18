import React from 'react';

function Circle() {
  const percentage = 37; // Fixed percentage value
  const circleRadius = 50; // Radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius;

  // Calculate the stroke dash offset based on the fixed percentage
  const strokeDashoffset =
    circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="relative flex justify-center items-center">
        <svg
          className="w-28 h-28 transform -rotate-90"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            fill="none"
            stroke="#C0C7D5"
            strokeWidth="10"
          />
          {/* Foreground circle */}
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            fill="none"
            stroke="#0076D2"
            strokeWidth="10"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage in the center */}
        <div className="absolute text-[#0076D2] font-bold text-xl">
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default Circle;
