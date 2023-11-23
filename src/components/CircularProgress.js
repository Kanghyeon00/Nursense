import React from 'react';
import './CircularProgress.css'; // 스타일 파일

const CircularProgress = ({ progress }) => {
  const radius = 70; //원 크기 조절
  const strokeWidth = 16; // 선 두께를 조절
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

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