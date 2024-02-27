import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsClockHistory } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { MdStars } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { convertDate, convertTime } from "./constants";

const TableBody = (props) => {
  const { item, index } = props;
  const {
    patient_name,
    mobile_number,
    appointment_date,
    appointment_time,
    doctor,
    injury,
  } = item;

  return (
    <>
      <tr key={index} className="flex flex-col sm:table-row mb-2 sm:mb-0">
        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
          <RxAvatar
            size={35}
            color={index % 2 === 0 ? "olivedrab" : "cadetblue"}
          />
          <div>
            <span className="block text-gray-700 text-sm font-bold">
              {patient_name}
            </span>
            <span className="block text-gray-700 text-xs">{mobile_number}</span>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap items-center">
          <div className="flex justify-evenly">
            <RxCalendar className="mr-1" size={20} />
            {convertDate(appointment_date)}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap items-center">
          <div className="flex justify-evenly">
            <BsClockHistory className="mr-1" size={20} />
            {convertTime(appointment_time)}
          </div>
        </td>
        <td className="flex px-6 py-4 whitespace-nowrap items-center">
          <MdStars
            size={25}
            color={index % 2 === 0 ? "indianred" : "mediumseagreen"}
          />
          <span className="pl-3">{doctor}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className=" bg-slate-200 px-2 py-1 text-slate-700 text-xs font-semibold rounded-md">
            {injury}
          </span>
        </td>
        <td className="text-right px-6 whitespace-nowrap">
          <PiDotsThreeOutlineVerticalFill
            className="cursor-pointer"
            size={20}
          />
        </td>
      </tr>
    </>
  );
};

export default TableBody;
