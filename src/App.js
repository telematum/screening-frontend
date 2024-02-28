import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StarsIcon from "@mui/icons-material/Stars";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      const data = await response.json();
      setAppointments(data.appointments);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-600">
        Today's Appointment List
      </h2>
      <table className="table-auto w-full border border-collapse shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-400 uppercase text-xs leading-tight border border-gray-200">
            <th className="p-2">Patient</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Injury</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr
              key={appointment.patient_name}
              className="border border-gray-200"
            >
              <td className={"p-2 flex items-center justify-center"}>
                <AccountCircleIcon
                  className={`h-10 w-10 mr-2 text-gray-400 ${
                    appointment.patient_id % 2 === 0
                      ? "text-blue-500"
                      : "text-green-500"
                  }`}
                />
                {appointment.patient_name}
                <br />
                +15{appointment.mobile_number}
              </td>
              <td className="p-2 text-center">
                <CalendarTodayIcon className="mr-2 text-gray-400 h-4 w-4" />
                {appointment.appointment_date}
              </td>
              <td className="p-2 text-center">
                <AccessTimeIcon className="mr-2 text-gray-400 h-4 w-4" />
                {appointment.appointment_time}
              </td>
              <td className="p-2 text-center">
                <StarsIcon className="mr-2 text-yellow-400 h-4 w-4" />
                {appointment.doctor}
              </td>
              <td className="p-2 text-center relative">
                <span className="p-2 rounded-lg bg-gray-200">
                  {appointment.injury}
                </span>
              </td>
              <td className="p-2 text-center">
                <Dropdown
                  onSelect={(option) => {
                    console.log("Selected option:", option);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
