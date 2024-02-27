import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiCalendar, BiTimeFive } from "react-icons/bi";
import { MdStars } from "react-icons/md";
import PropTypes from "prop-types";

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

const TableContent = ({ titles, tableData }) => {
  // Function to be in 24 Jan 2024 format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-gray-400 bg-gray-100">
            {titles.map((name, index) => (
              <th key={index} className="px-4 py-2">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData?.appointments?.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex flex-col">
                    <div className="flex items-center text-md font-bold text-md pr-1">
                      <span
                        className={`h-5 w-5 border-1 rounded-full ${colors[index % colors.length]} pr-1`}
                      ></span>
                      <span className="font-bold text-md pl-1">
                        {item.patient_name}
                      </span>
                    </div>
                    <div className="text-xs mt-1">+{item.mobile_number}</div>
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div className="flex items-center text-md">
                    <BiCalendar className="mr-1 text-lg" />
                    {formatDate(item.appointment_date)}
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <BiTimeFive className="mr-1 text-lg" />
                    {item.appointment_time.slice(0, 5)}
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div className="flex items-center text-md">
                    <MdStars className="text-green-500 mr-1 text-lg" />{" "}
                    {item.doctor}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="bg-gray-200 inline-block rounded-md px-2 py-1 font-bold text-black-500">
                    {item.injury}
                  </div>
                </td>
                <td className="px-4 py-2"> {<HiOutlineDotsVertical />}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

TableContent.propTypes = {
  titles: PropTypes.array.isRequired,
  tableData: PropTypes.object.isRequired,
};

export default TableContent;
