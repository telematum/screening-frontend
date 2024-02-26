import React, { useState, useEffect } from "react";
import appointmentData from "./data.json";
import { BsThreeDotsVertical,  BsClockHistory,  BsCalendar} from "react-icons/bs";
import { logo } from "../utils/constants";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    setAppointments(appointmentData.appointments);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <h1 className="text-slate-400 font-bold  text-xl mb-4">
            Today's Appointments List
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="text-left text-slate-400">
                  {[
                    "Patient",
                    "Date",
                    "Time",
                    "Doctor",
                    "Injury",
                    "Action",
                  ].map((label, index) => (
                    <th
                      key={index}
                      className={`px-4 py-3 ${
                        index === 0
                          ? "rounded-tl-lg"
                          : index === 5
                          ? "rounded-tr-lg"
                          : ""
                      }`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {appointments.map((appointment, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div
                          className="h-6 w-6 rounded-full mr-2"
                          style={{ backgroundColor: appointment.color }}
                        ></div>{" "}
                        <div>
                          <p className="font-semibold">
                            {appointment.patient_name}
                          </p>
                          <p className="text-sm">{appointment.mobile_number}</p>{" "}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <BsCalendar className="inline-block mr-1" />
                      {appointment.appointment_date}
                    </td>
                    <td className="px-4 py-3">
                      <BsClockHistory className="inline-block mr-1" />
                      {appointment.appointment_time}
                    </td>
                    <td className="px-4 py-3">
                      <img
                        src={logo}
                        alt="logo"
                        className="inline-block mr-1"
                        style={{ width: "15px", height: "15px" }}
                      />
                      {appointment.doctor}
                    </td>
                    <td className="my-4 flex items-center justify-center bg-slate-200 text-center px-2 py-2 rounded-md min-w-min cursor-pointer text-slate-600 font-semibold">
                      {appointment.injury}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center items-center">
                        <BsThreeDotsVertical />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
