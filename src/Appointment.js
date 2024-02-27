import React, { useState } from "react";
import "../src/index.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StarsIcon from "@mui/icons-material/Stars";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const getColor = (str) => {
  const hash = str.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + acc;
  }, 0);
  const index = hash % COLORS.length;
  return COLORS[index];
};

const getStarColor = (priority) => {
  if (priority === "high") {
    return "error";
  } else if (priority === "medium") {
    return "warning";
  } else {
    return "info";
  }
};

const COLORS = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-pink-300",
  "bg-purple-300",
  "bg-indigo-300",
  "bg-red-300",
  "bg-orange-300",
];

const AppointmentList = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBookAppointment = () => {
    console.log("Book appointment for:", selectedAppointment);
    setIsDropdownOpen(false);
  };

  const handleCancelAppointment = () => {
    console.log("Cancel appointment for:", selectedAppointment);
    setIsDropdownOpen(false);
  };

  const handleMoreOptionsClick = (appointment) => {
    if (selectedAppointment === appointment) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setSelectedAppointment(appointment);
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-gray-50">
          <tr className="rounded-lg">
            <th className="px-4 py-2 text-gray-300 rounded-lg">Patient</th>
            <th className="px-4 py-2 text-gray-300 rounded-lg">Date</th>
            <th className="px-4 py-2 text-gray-300 rounded-lg">Time</th>
            <th className="px-4 py-2 text-gray-300 rounded-lg">Doctor</th>
            <th className="px-4 py-2 text-gray-300 rounded-lg">Injury</th>
            <th className="px-4 py-2 text-gray-300 rounded-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 flex flex-col items-start">
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${getColor(
                      appointment.patient_name
                    )}`}
                  >
                    <span className="text-gray-600 font-bold text-sm">
                      {appointment.patient_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">
                      {appointment.patient_name}
                    </span>
                    <br />
                    <span className="text-gray-500">
                      {appointment.mobile_number}
                    </span>
                  </div>
                </div>
              </td>
              <td className="border px-4 py-2  items-center">
                <CalendarMonthIcon />
                {appointment.appointment_date}
              </td>
              <td className="border px-4 py-2 items-center">
                <QueryBuilderIcon />
                {appointment.appointment_time}
              </td>
              <td className="border px-4 py-2">
                <StarsIcon color={getStarColor(appointment.priority)} />
                {appointment.doctor}
              </td>
              <td className="border px-4 py-2 flex items-center justify-center p-0 m-0">
                <div className="bg-blue-100 border border-skyblue rounded-lg px-2 py-1 m-0">
                  <span className="text-purple-600 m-0">
                    {appointment.injury}
                  </span>
                </div>
              </td>

              <td className="border px-4 py-2">
                <MoreVertIcon
                  onClick={() => handleMoreOptionsClick(appointment)}
                />
                {selectedAppointment === appointment && isDropdownOpen && (
                  <div className="absolute mt-1 p-2 bg-white rounded shadow-md">
                    <button
                      className="block w-full text-left mb-2 hover:bg-gray-100 px-4 py-2"
                      onClick={handleBookAppointment}
                    >
                      Book
                    </button>
                    <button
                      className="block w-full text-left hover:bg-gray-100 px-4 py-2"
                      onClick={handleCancelAppointment}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
