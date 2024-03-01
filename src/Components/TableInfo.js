import React from "react";
import { formatDate } from "../utils/FormatDate";

const TableInfo = ({
  id,  
  patientName,
  mobileNumber,
  appointmentDate,
  appointmentTime,
  doctor,
  injury,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="p-4 font-medium text-gray-900 font-medium text-gray-900 ">
        <div className="flex items-center lg:flex-row flex-col gap-2">
          <div>
            <div className={`h-10 w-10 mr-2 rounded-3xl bg-[#3${Math.floor(Math.random() * 90) + 10}9${Math.floor(Math.random() * 90) + 10}]`}>

            </div>
          </div>
          <div className="text-nowrap">
            <span className="font-bold text-center">{patientName}</span>
            <div className="font-normal text-xs text-[#7e7e96]">
              {mobileNumber}
            </div>
          </div>
        </div>
      </td>
      <td className="p-2 text-black">
        <div className="flex gap-2 items-center">
          <div className="mr-2 w-4 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <span className="text-xs lg:text-sm" >{formatDate(appointmentDate)}</span>
        </div>
      </td>
      <td className="p-2 text-black">
        <div className="flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="text-xs lg:text-sm">{appointmentTime}</div>
        </div>
      </td>
      <td className="p-2 text-black">
        <div className="flex gap-2 items-center flex-row">
          <div className={`border border-red-200 border-1 rounded-2xl p-1 ${(id+1 === 4 || id+1 === 5) ? 'bg-orange-400' : "bg-green-400"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="red"
              strokeWidth={1.5}
              stroke="gray"
              className="w-4 h-4 fill-white p-0 m-0"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs lg:text-sm">{doctor}</div>
        </div>
      </td>
      <td className="p-2 text-black">
        <span className="bg-gray-300 text-center rounded-md font-semibold text-xs p-2 text-nowrap">
          {injury}
        </span>
      </td>
      <td className="p-4 text-center text-black">
        <span className="cursor-pointer">
          <i className="fa fa-thin fa-ellipsis-vertical text-gray-400"></i>
        </span>
      </td>
    </tr>
  );
};

export default TableInfo;
