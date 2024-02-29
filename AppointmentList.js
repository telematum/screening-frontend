import React, { useState, useEffect } from "react";
import axios from "axios";
import time from "../assets/schedule_FILL0_wght400_GRAD0_opsz24.svg";
import date from "../assets/date_range_FILL0_wght400_GRAD0_opsz24.svg";
import DoctotBadge from "../assets/DoctorBadge.svg";


const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        setAppointments(response.data.appointments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // console.log({ appointments });
    fetchData();
  }, []);
  return (
    <div className="container mx-auto mt-5 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-600">
        Today's Appointment List
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full  ">
          <thead className="*:text-gray-500 text-sm border-b  text-left">
            <tr>
              <th className="px-4 py-5 ">PATIENTS</th>
              <th className="px-4 py-5">DATE</th>
              <th className="px-4 py-5">TIME</th>
              <th className="px-4 py-5">DOCTOR</th>
              <th className="px-4 py-5">INJURY</th>
              <th className="px-4 py-5">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={index}
                className="*:text-gray-500 font-bold text-base border-b text-left  "
              >
                {/* {appointment.patient} */}
                <td className="px-4 py-2">
                  <div className="flex space-x-2 ">
                    <div className="h-6 w-6 bg-sky-500 rounded-full "></div>

                    <div className="flex flex-col space-y-1">
                      <span className="text-gray-800">
                        {appointment.patient_name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {"+" + appointment.mobile_number}
                      </span>
                    </div>
                  </div>
                </td>
                <td className=" px-4 py-2 ">
                  <div className="flex space-x-2">
                    <img src={date} alt="date" className="w-5 h-5" />
                    <span>{appointment.appointment_date}</span>
                  </div>
                </td>
                <td className=" px-4 py-2 ">
                  <div className="flex space-x-2">
                    <img src={time} alt="Time" className="w-5 h-5" />
                    <span>{appointment.appointment_time}</span>
                  </div>
                </td>
                <td className=" px-4 py-2 ">
                  <div className="flex space-x-2">
                    <img src={DoctotBadge} alt="DoctorBadge" />
                    <span>{appointment.doctor}</span>
                  </div>
                </td>
                <td className=" m-4 bg-blue-200 inline-block rounded-lg px-2 py-1">
                  {appointment.injury}
                </td>
                <td className=" px-4 py-2">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AppointmentList;
