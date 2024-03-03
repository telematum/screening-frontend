import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsClockHistory } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { MdStars } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const TableEntry = (props) => {
  const { item } = props;
  const {
    patient_name,
    mobile_number,
    appointment_date,
    appointment_time,
    doctor,
    injury,
  } = item;

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-GB", options);
    return formattedDate;
  };

  const convertTime = (timeString) => {
    const [hours, minutes, period] = timeString.split(/:| /);
    const formattedHours =
      period === "PM"
        ? (parseInt(hours, 10) + 12).toString().padStart(2, "0")
        : hours;
    const formattedTime = `${formattedHours}:${minutes} ${period}`;
    return formattedTime;
  };

  return (
    <>
      <tr className="flex flex-col sm:table-row mb-2 sm:mb-0">
        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
          <RxAvatar size={25} />
          <div>
            <span className="block text-gray-700 text-sm font-medium">
              {patient_name}
            </span>
            <span className="block text-gray-700 text-xs">{mobile_number}</span>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex justify-evenly">
            <RxCalendar size={20} />
            {convertDate(appointment_date)}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex justify-evenly">
            <BsClockHistory size={20} />
            {convertTime(appointment_time)}
          </div>
        </td>
        <td className="flex px-6 py-4 whitespace-nowrap">
          <MdStars size={25} />
          <span className="pl-3">{doctor}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className=" bg-slate-200 px-2 py-1 text-slate-700 text-xs font-semibold rounded-md">
            {injury}
          </span>
        </td>
        <td className="text-right px-6 whitespace-nowrap">
          <PiDotsThreeOutlineVerticalFill size={20} />
        </td>
      </tr>
    </>
  );
};

export default TableEntry;
