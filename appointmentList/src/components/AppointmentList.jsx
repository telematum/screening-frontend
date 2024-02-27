import React, { useEffect, useState } from "react";

function AppointmentList({ appointment }) {
  return (
    <div className="rounded-xl border-2 border-gray-300 rounded-xl my-3 md:border-0 ">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6  gap-4 justify-center items-center  p-4 my-3">
        <div className="flex gap-3 ">
          <div className="rounded-full h-9 w-9 bg-red-400" />
          <div>
            <h3 className="font-bold">{appointment.patient_name}</h3>
            <p className="text-gray-400 font-medium text-sm tracking-wide">
              {appointment.mobile_number}
            </p>
          </div>
        </div>
        <p className="text-gray-500 font-medium text-sm">
          <i className="fa-regular fa-calendar pr-1"></i>
          {appointment.appointment_date}
        </p>
        <h3 className="text-gray-500 font-medium ">
          <i className="fa-regular fa-clock pr-1"></i>
          {appointment.appointment_time}
        </h3>
        <h3 className="text-gray-500 font-medium">
          <i className="fa-solid fa-star text-white mr-3 p-1 bg-[#66CB9F]  text-[12px] rounded-full border-[#676F93]"></i>
          {appointment.doctor}
        </h3>
        <span className="text-gray-500 font-bold text-xs bg-gray-300 rounded-xl w-max px-3 py-1">
          {appointment.injury}
        </span>
        <h3 className="cursor-pointer">
          <i className="fa-solid fa-ellipsis-vertical text-gray-500 text-xl px-4 py-1 rounded-full hover:bg-gray-200"></i>
        </h3>
      </div>
    </div>
  );
}

export default AppointmentList;
