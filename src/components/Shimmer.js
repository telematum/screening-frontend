import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full py-5 md:py-10 lg:py-20 flex justify-center animate-[pulse_4s_ease-in-out_infinite] ">
      <div className="w-48 md:w-60 lg:w-72">Loading...</div>
    </div>
  );
};

export default Shimmer;
