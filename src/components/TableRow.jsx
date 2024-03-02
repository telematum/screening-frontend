import React from "react";
import { IoMdContact } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import PropTypes from "prop-types";

const TableRow = ({
  appointment,
  index,
  selectedDoctorIndices,
  toggleCheck,
}) => (
  <tr
    key={index}
    className="border-t border-b border-gray-300 border-l-0 border-r-0  "
  >
    <td className="px-2 ">
      <div className="flex sm:flex-row items-start sm:items-center gap-1 ml-2">
        <div id="image" className="ml-4">
          <IoMdContact className="w-10 h-10 text-gray-400 " />
        </div>
        <div id="namenum" className="flex flex-col justify-start items-start ">
          <div id="name" className="font-bold text-[14px]  ">
            {appointment.patient_name}
          </div>
          <div id="num" className="text-gray-500 text-[12px]  ">
            +{appointment.mobile_number}
          </div>
        </div>
      </div>
    </td>
    <td className="px-2 py-4">
      <div className="flex  sm:flex-row items-start justify-center sm:items-center gap-2 ">
        <span>
          <CiCalendarDate className="w-5 h-5 text-gray-400" />
        </span>
        <span className="text-gray-500">{appointment.appointment_date}</span>
      </div>
    </td>
    <td className="px-2 py-4">
      <div className="flex  sm:flex-row items-start justify-start ml-12 sm:items-center gap-2">
        <span>
          <GoClock className="w-5 h-5 text-gray-400 mx-auto" />
        </span>
        <span className="text-gray-500">{appointment.appointment_time}</span>
      </div>
    </td>
    <td className="px-2 py-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center ml-12 gap-2">
        <span onClick={() => toggleCheck(index)}>
          <MdStars
            style={{
              color: selectedDoctorIndices.includes(index) ? "orange" : "green",
            }}
            className="w-5 h-5 cursor-pointer"
          />
        </span>
        <span className={`text-gray-500 hover:text-blue-500 cursor-pointer`}>
          {appointment.doctor}
        </span>
      </div>
    </td>
    <td className="px-2 py-4">
      <div className="flex justify-start ml-16 sm:items-center gap-2">
        <span className="bg-gray-300 rounded-md p-2 font-bold text-gray-700 text-[13px] cursor-pointer hover:text-blue-500">
          {appointment.injury}
        </span>
      </div>
    </td>
    <td className="px-2 py-4">
      <div className="flex justify-center">
        <BsThreeDotsVertical className="w-5 h-5 text-gray-400" />
      </div>
    </td>
  </tr>
);

TableRow.propTypes = {
  appointment: PropTypes.shape({
    patient_name: PropTypes.string.isRequired,
    mobile_number: PropTypes.string.isRequired,
    appointment_date: PropTypes.string.isRequired,
    appointment_time: PropTypes.string.isRequired,
    doctor: PropTypes.string.isRequired,
    injury: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  selectedDoctorIndices: PropTypes.array.isRequired,
  toggleCheck: PropTypes.func.isRequired,
};

export default TableRow;
