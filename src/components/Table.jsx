import React from "react";

import {
  BsCalendar4,
  BsClockHistory,
  BsThreeDotsVertical,
} from "react-icons/bs";

import { HEADINGS, LOGO } from "../constants/constants";
import ProfilePicture from "./ProfilePicture";

const Table = (props) => {
  const { users, profilePictures } = props;
  return (
    <div className="px-8">
      <table className="mb-5 border-collapse cursor-pointer w-full">
        <thead>
          <tr className="bg-gray-100">
            {HEADINGS.map((heading, i) => {
              return (
                <th
                  className={`uppercase p-6 text-gray-400 text-xs font-semi-bold ${
                    i === HEADINGS.length - 1
                      ? "text-center rounded-tr-3xl"
                      : "text-left"
                  } ${i === 0 ? "rounded-tl-3xl" : null}`}
                  key={heading}
                >
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users.map(
            ({
              patient_name,
              mobile_number,
              appointment_date,
              appointment_time,
              doctor,
              injury,
            }) => {
              return (
                <tr key={patient_name} className="border-b text-sm">
                  <td className="p-2">
                    <div className="flex ml-3">
                      <ProfilePicture profilePictures={profilePictures} />
                      <div className="px-3">
                        <p className="text-base font-bold">{patient_name}</p>
                        <p className="text-xs text-gray-500">
                          +{mobile_number}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6">
                    <BsCalendar4 className="inline-block mr-2" />
                    <span className="text-md text-gray-500 font-medium">
                      {appointment_date}
                    </span>
                  </td>
                  <td className="px-6">
                    <BsClockHistory className="inline-block mr-2" />
                    <span className="text-md text-gray-500 font-medium">
                      {appointment_date}
                    </span>
                  </td>
                  <td className="px-6">
                    <img
                      src={LOGO}
                      alt="logo"
                      className="inline-block w-4 h-4 mx-1"
                    />
                    <span className="text-md text-gray-500 font-medium">
                      {doctor}
                    </span>
                  </td>
                  <td className="px-6">
                    <div className="border bg-slate-200 text-slate-600 font-bold p-2 text-xs rounded-md text-center">
                      {injury}
                    </div>
                  </td>
                  <td>
                    <p className="flex justify-center items-center">
                      <BsThreeDotsVertical className="size-6 text-gray-300" />
                    </p>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
