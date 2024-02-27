import React from "react";

import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import Badge from "./Badge";
import { BsThreeDotsVertical } from "react-icons/bs";

const TableItems = (props) => {
  const { name, date, time, doctor, injury, number } = props;
  const parseName = (name) => {
    const nameParts = name.split("");
    const firstName = nameParts[0] ? nameParts[0][0] : null;
    const lastName = nameParts[1] ? nameParts[1][0] : null;
    const initials = firstName + lastName;
    return initials.toUpperCase();
  };

  const getDoctorIconColor = (doctorName) => {
    if (doctorName === "Dr. Garcia" || doctorName === "Dr. Patel") {
      return "#ebc19d";
    }
    return "#50ba7a";
  };
  return (
    <>
      <td className="p-2 flex items-center ">
        <div className="rounded-full border-1 bg-[#a1ada2] h-10 w-10 mr-2 text-center items-center flex justify-center text-white font-bold">
          {parseName(name)}
        </div>
        <div className="flex flex-col ">
          <p className="font-medium text-base text-gray-600">{name}</p>

          <p className="text-xs text-gray-400">{number}</p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2 text-gray-500">
          <SlCalender />
          {date}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegClock />
          {time}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2 font-medium text-gray-500">
          <MdStars style={{ color: getDoctorIconColor(doctor) }} />
          {doctor}
        </div>
      </td>
      <td>
        <Badge injury={injury} />
      </td>
      <td className="text-gray-400">
        <BsThreeDotsVertical />
      </td>
    </>
  );
};

export default TableItems;
