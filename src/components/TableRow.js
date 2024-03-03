import React from "react";
import avathar from "../assets/Avatar.png";
import { CiCalendarDate } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const AppointmentRow = ({ appointment }) => {
  const {
    patient_name,
    mobile_number,
    appointment_date,
    appointment_time,
    doctor,
    isDrPresent,
    injury,
  } = appointment;

  return (
    <tr className="border-t border-gray-200 hover:bg-gray-100 transition-all">
      <td className="p-4 flex items-center">
        <img
          src={avathar}
          alt="Avatar"
          className="rounded-full h-11 w-11 object-cover"
        />
        <div className="ml-2">
          <p className="font-semibold">{patient_name}</p>
          <p className="text-gray-500">+{mobile_number}</p>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center">
          <CiCalendarDate className="size-5 me-2 text-gray-500" />
          <p className="text-gray-500">{appointment_date}</p>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center">
          <BsClockHistory className="me-2 text-gray-500" />
          <p className="text-gray-500">{appointment_time}</p>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center">
          <MdStars
            className={`size-5 me-2 ${
              isDrPresent ? "text-green-500" : "text-red-500"
            }`}
          />
          <p className="text-gray-500">{doctor}</p>
        </div>
      </td>
      <td className="p-4">
        <p className="bg-slate-200 w-fit p-2 text-blue-900 rounded-lg">
          {injury}
        </p>
      </td>
      <td className="p-4">
        <div className="flex justify-center">
          <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default AppointmentRow;
