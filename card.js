import React from "react";

function Card({ children }) {
  return (
    <div className="mt-4 flex justify-center">
      <div className="border border-gray-200 w-11/12 rounded-xl">{children}</div>
    </div>
  );
}
export default Card;
