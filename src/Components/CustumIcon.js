import React from "react";

const StarCircleIcon = ({ starColor, circleColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="none"
  >
    <circle cx="12" cy="12" r="10" fill={circleColor} />
    <path
      fill={starColor}
      d="M12 2 L15.09 8.46 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.46 L12 2"
    />
  </svg>
);

export default StarCircleIcon;
