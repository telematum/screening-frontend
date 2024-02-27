import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { TiStarFullOutline } from "react-icons/ti";

const TableRow = (props) => {
  const {
    patient_name,
    mobile_number,
    appointment_date,
    appointment_time,
    doctor,
    injury,
  } = props.row;

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="w-10 h-10 rounded-full bg-orange-500" />
          <div className="ps-3">
            <div className="text-base font-semibold">{patient_name}</div>
            <div className="font-normal text-gray-500">+{mobile_number}</div>
          </div>
        </th>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <SlCalender />
            <span className="ps-3">{appointment_date}</span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <BsClockHistory />
            <span className="ps-3">{appointment_time}</span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <TiStarFullOutline />
            <span className="ps-3">{doctor}</span>
          </div>
        </td>
        <td>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            {injury}
          </span>
        </td>
        <td className="px-6 py-4 text-right text-sm font-medium">
          <BsThreeDotsVertical />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
