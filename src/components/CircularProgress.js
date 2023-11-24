import React, { useEffect, useState } from "react";
import "./CircularProgress.css";
import axios from "axios";
import Cookies from "universal-cookie";

const CircularProgress = ({ progress }) => {
  const radius = 70;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

  useEffect(() => {
    const newOffset = circumference - (progress / 100) * circumference;
    setStrokeDashoffset(newOffset);
  }, [progress, circumference]);

  return (
    <svg className="circular-progress" width={radius * 2} height={radius * 2}>
      <circle
        className="progress-bar"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="transparent"
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-indicator"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="transparent"
        stroke="#078675"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text x={radius} y={radius} fontSize="18" textAnchor="middle" dy=".3em" fill="#078675">
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
