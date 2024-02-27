import React from "react";

const Badge = (props) => {
  const { injury } = props;
  return (
    <div className="bg-[#e8f3fc] font-medium text-sm  py-2 px-3 inline-block rounded-xl">
      {injury}
    </div>
  );
};

export default Badge;
