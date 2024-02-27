import React from "react";
const AvatarBadge = ({ name, mobile }) => {
    // Extracting the initials from the name
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
  
    // Generate random color for the badge
    const randomColor = () => {
      const colors = [
        "#F87171",
        "#FBBF24",
        "#FACC15",
        "#34D399",
        "#60A5FA",
        "#7F9CF5",
        "#A78BFA",
        "#F472B6",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
  
    // Style for the badge
    const badgeStyle = {
      backgroundColor: randomColor(),
    };
  
    return (
      <div className="flex flex-row items-center">
        <div
          className="h-7 w-7 flex items-center justify-center rounded-full mb-1"
          style={badgeStyle}
        >
          <span className="text-white text-xs font-medium">{initials}</span>
        </div>
        <div className="flex flex-col px-3">
          <div className="text-gray-500 text-xs font-bold">{name}</div>
          <div className="text-gray-500 text-xs">{mobile}</div>
        </div>
      </div>
    );
  };
  export default AvatarBadge