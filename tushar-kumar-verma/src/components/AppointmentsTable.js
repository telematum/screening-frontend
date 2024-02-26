import React, { useEffect, useState } from "react";
import CalanderIcon from "./../assets/calendar.svg";
import CLockIcon from "./../assets/clock.svg";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    )
      .then((response) => response.json())
      .then((data) => setAppointments(data.appointments))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="overflow-x-auto px-2">
      <table className="min-w-full">
        <thead className="">
          <tr className="bg-gray-100 border-b border-[#EAECF0] flex items-center py-3 child:px-6 child:whitespace-nowrap pl-10 gap-1 text-white">
            <th className="text-[13px] px-6 text-gray-600 font-medium w-[240px] text-left">
              PATIENTS
            </th>
            <th className="text-[13px] px-6 text-gray-600 font-medium w-[240px] text-left flex-1">
              DATE
            </th>
            <th className="text-[13px] px-6 text-gray-600 font-medium w-[240px] text-left flex-1">
              TIME
            </th>
            <th className="text-[13px] px-6 text-gray-600 font-medium text-left flex-1">
              DOCTOR
            </th>
            <th className="text-[13px] px-6 text-gray-600 font-medium text-left flex-1">
              INJURY
            </th>
          </tr>
        </thead>

        <tbody>
          {appointments?.map((appointment, index) => {
            return (
              <tr
                key={index}
                className="border-b border-[#EAECF0] flex items-center py-3 child:px-6 child:whitespace-nowrap pl-10 gap-1"
              >
                <td className="w-[240px] px-6 flex items-center text-left">
                  <img
                    src={`https://ui-avatars.com/api/?name=${appointment.patient_name}&length=1`}
                    alt=""
                    className="h-10 w-10 rounded-full inline-block"
                  />
                  <div className="inline-block ml-3">
                    <p className="text-sm text-gray-900 font-medium ">
                      {appointment.patient_name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {appointment.mobile_number}
                    </p>
                  </div>
                </td>

                <td className="text-gray-500 w-[240px] px-6 text-sm whitespace-nowrap text-left flex-1 flex items-center gap-1">
                  <img src={CalanderIcon} alt="" className="w-4 h-4" />
                  {appointment.appointment_date}
                </td>
                <td className="text-gray-500 w-[240px] px-6 text-sm whitespace-nowrap text-left flex-1 flex items-center gap-1">
                  <img src={CLockIcon} alt="" className="w-4 h-4" />
                  {appointment.appointment_time}
                </td>

                <td className="text-gray-500 px-6 text-sm whitespace-nowrap text-left flex-1 items-center gap-1">
                  {appointment.doctor}
                </td>
                <td className="text-gray-500 px-6 text-sm whitespace-nowrap text-left flex-1 items-center gap-1">
                  <span className="rounded-md bg-blue-100 px-2 py-1">
                    {appointment.injury}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
