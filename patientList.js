import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const colors = [
  "border border-sky-300 bg-sky-300",
  "border border-teal-300 bg-teal-300",
  "border border-green-300 bg-green-300 ",
  "border border-orange-300 bg-orange-300",
  "border border-sky-300 bg-sky-300",
  "border border-violet-300 bg-violet-300",
  "border border-pink-300 bg-pink-300",
];

function PatientList(props) {
  const { patientList } = props;
  const titleDesign =
    "lg:px-4 px-1 py-6 bg-gray-50 dark:bg-gray-800 text-gray-400";
  const contentDesign = "lg:px-4 px-1 py-2";
  return (
    <table className="w-full my-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 border-b border-gray-300 uppercase dark:text-gray-400">
        <tr>
          <th
            scope="col"
            className="lg:pr-8 pl-4 py-6 sm:pr-2 bg-gray-50 dark:bg-gray-800 text-gray-400"
          >
            PATIENT'S
          </th>
          <th scope="col" className={titleDesign}>
            DATE
          </th>
          <th scope="col" className={titleDesign}>
            TIME
          </th>
          <th scope="col" className={titleDesign}>
            DOCTOR
          </th>
          <th scope="col" className={titleDesign}>
            INJURY
          </th>
          <th
            scope="col"
            className="lg:px-4 px-1 pr-4 py-6 bg-gray-50 dark:bg-gray-800 text-gray-400"
          >
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        {patientList.map((details, i) => (
          <tr
            key={i}
            className={`${
              patientList.length - 1 !== i && "border-b border-gray-300"
            }`}
          >
            <td className="lg:pr-8 pl-4 py-3">
              <div className="flex items-center gap-x-2 cursor-pointer">
                <div
                  className={`rounded-full ${
                    colors[i] ? colors[i] : "border border-blue-300 bg-blue-300"
                  }  h-10 w-10 `}
                ></div>
                <div>
                  <h2 className="text-black font-semibold text-sm">
                    {details.patient_name}
                  </h2>
                  <h3 className="text-gray-400 font-light text-sm">
                    {details.mobile_number}
                  </h3>
                </div>
              </div>
            </td>
            <td className={contentDesign}>
              <div className="flex items-center gap-x-2 cursor-pointer text-sm text-gray-700">
                <FontAwesomeIcon className="mt-1" icon={faCalendar} />
                <span>{details.appointment_date}</span>
              </div>
            </td>
            <td className={contentDesign}>
              <div className="flex items-center gap-x-2 cursor-pointer text-sm text-gray-700">
                <FontAwesomeIcon className="mt-1" icon={faClock} />
                <span>{details.appointment_time}</span>
              </div>
            </td>
            <td className={contentDesign}>
              <div className="flex items-center gap-x-2 cursor-pointer text-sm text-gray-700">
                <img
                  src={
                    i === 3 || i === 4
                      ? "images/orange.png"
                      : "images/greenstar.webp"
                  }
                  className="h-5 mt-0.5"
                  alt="Doctor Icon"
                />
                <span>{details.doctor}</span>
              </div>
            </td>
            <td className={contentDesign}>
              <button className="py-2 px-3 text-sm font-normal rounded-md bg-slate-300 text-black">
                {details.injury}
              </button>
            </td>
            <td className="lg:pl-12 pl-4 py-2 cursor-pointer">
              <FontAwesomeIcon
                className="font-bold text-lg text-gray-500"
                icon={faEllipsisVertical}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PatientList;
