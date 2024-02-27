import React, { useState, useEffect } from "react";
import {
  DotsVerticalIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import AvatarBadge from "./AvatarBadge";


function AppointmentTable() {
  const [appointmentsList, setappointmentsListList] = useState([]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month.toLowerCase()} ${year}`;
  }
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    )
      .then((response) => {
        const newRes = response
          .json()
          .then((res) => setappointmentsListList(res.appointments));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h3 className="text-base font-bold leading-6 text-gray-500">
            Today's Appointment List
          </h3>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead >
                <tr className="bg-gray-200">
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Patients
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Doctor
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Injury
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {appointmentsList && appointmentsList.length > 0 ? (
                  appointmentsList.map((appointment, i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <AvatarBadge
                          name={appointment.patient_name}
                          mobile={appointment.mobile_number}
                        />
                      </td>
                      <td className="px-3 py-6 text-sm text-gray-500 flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-1 text-gray-500" />
                        {formatDate(appointment.appointment_date)}
                      </td>
                      <td className="text-sm text-gray-500">
                        <span className="inline-block">
                          <ClockIcon className="h-5 w-5 text-gray-500 inline-block align-middle" />
                          <span className="inline-block align-middle">
                            {appointment.appointment_time.replace(
                              /\s+\w\w$/,
                              ""
                            )}
                          </span>
                        </span>
                      </td>
                      <td className="text-sm text-gray-500">
                
                        <td className="text-sm text-gray-500">
                          <td className="text-sm text-gray-500">
                            <div className="flex items-center">
                              <div
                                className={`rounded-full p-1 mr-1 ${
                                  i === 3 || i === 4
                                    ? "bg-orange-500"
                                    : "bg-green-500"
                                }`}
                              >
                                <svg
                                  className="h-4 w-4 text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    className="h-5 w-5"
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M10 2l1.536 4.64h4.928L12.904 9.52l1.536 4.64-4.032-3.072-4.032 3.072 1.536-4.64L3.536 6.64h4.928L10 2zm0 2.408L8.624 7.36H4.768L7.12 9.768 6.192 13l3.184-2.424L12.56 13l-.928-3.232L15.232 7.36h-3.856L10 4.408z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              {appointment.doctor}
                            </div>
                          </td>
                        </td>
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-sm text-black-500">
                        <span className="inline-flex items-center rounded-md  bg-gray-300 bg-gray-250 px-2 py-1 text-xs font-medium text-black-800 ring-1 ring-inset ring-black-600">
                          {appointment.injury}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <DotsVerticalIcon className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500" />
                      </td>
                    </tr>
                  ))
                ) : (
                  <h3> No data found....</h3>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentTable;
