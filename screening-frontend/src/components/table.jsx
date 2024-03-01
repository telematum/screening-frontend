import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import moment from "moment";
import logo from "../assets/images/profile.jpg";

const Table = ({ appointmentData }) => {
  return (
    <>
      {appointmentData?.map((value, index) => (
        <tr key={index}>
          <td className="py-3 pl-4 border-t border-gray-300 flex items-center gap-2">
            <div>
              <img src={logo} alt="logo" className="img" />
            </div>
            <p className="flex flex-col">
              <b>{value.patient_name}</b>{" "}
              <small className="text-gray-500">+{value.mobile_number}</small>
            </p>
          </td>
          <td className="py-3 border-t border-gray-300 text-gray-500">
            <p className="flex gap-2 items-center">
              <CiCalendarDate color="#6b7280" size={22} />{" "}
              {moment(value.appointment_date).format("D MMM YYYY")}
            </p>
          </td>
          <td className="py-3 border-t border-gray-300 text-gray-500">
            <p className="flex gap-2 items-center">
              <BsClockHistory color="#6b7280" />
              {value.appointment_time}
            </p>
          </td>
          <td className="py-3 border-t border-gray-300 text-gray-500">
            <p className="flex gap-2 items-center">
              <MdStars color="#50cd89" />
              {value.doctor}
            </p>
          </td>
          <td className="py-3 border-t border-gray-300 text-gray-500">
            <button
              type="button"
              className="bg-[#CEDBE9] rounded px-[10px] py-1 text-gray-600 font-semibold text-sm"
            >
              {value.injury}
            </button>
          </td>
          <td className="py-3 border-t border-gray-300 text-gray-500">
            <TbDotsVertical color="#d1d5db" size={27} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Table;
