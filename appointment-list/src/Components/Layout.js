import React from "react";

const Layout = (props) => {
  return (
    <>
      <div
        className=" border rounded-2xl p-8 
       shadow-md"
      >
        <h2 className="text-left font-bold pb-5 text-[#8b8ba9]">
          Today's Appointment List
        </h2>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
