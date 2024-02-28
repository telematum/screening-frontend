import React, { useState, useEffect } from "react";
import { Calendar, Clock4, MoreVertical } from "lucide-react";

const Table = () => {
  const BASE_URL =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";
  const [appointments, setAppointments] = useState([]);

  function getRandomColor() {
    const colors = ["bg-green-500", "bg-yellow-500"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]; // Return the random color
  }

  useEffect(() => {
    // fetching data
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setAppointments(data.appointments))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col max-w-[1500px] mx-auto mt-40 border border-gray-200 p-2 rounded-md">
          <h1 className="text-gray-400 font-bold text-2xl p-4">
            Today's Appointment List
          </h1>
          <div className="-m-1.5">
            <div className="overflow-hidden p-4">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-400 uppercase"
                    >
                      Patients
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-400 uppercase"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-400 uppercase"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-400 uppercase"
                    >
                      Doctor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-400 uppercase"
                    >
                      Injury
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 whitespace-nowrap  text-gray-400 uppercase text-right text-sm font-bold flex justify-center items-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {appointments.map((appointment, index) => (
                    <tr key={index} className="hover:bg-gray-100 ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-1">
                          <span
                            className={`h-6 w-6 rounded-full flex items-center justify-center ${getRandomColor()}`}
                          ></span>
                          {appointment.patient_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-700">
                        <div className="flex items-center gap-1">
                          <span>
                            <Calendar size={16} />
                          </span>
                          {appointment.appointment_date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                        <div className="flex items-center gap-1">
                          <span>
                            <Clock4 size={16} />
                          </span>
                          {appointment.appointment_time}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                          <span>
                            <svg
                              className={`inline-block bg-green-500 rounded-full p-1  ${getRandomColor()}`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </span>
                          {appointment.doctor}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="bg-slate-200 text-gray-700 font-medium p-2 rounded-sm">
                          {appointment.injury}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium flex justify-center items-center  ">
                        <MoreVertical className="text-gray-700" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
