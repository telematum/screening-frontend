import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatTime(timeString) {
  const timeParts = timeString.split(':');
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  if (!isNaN(hours) && !isNaN(minutes)) {
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  return 'Invalid Time';
}


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
        setData(response.data.appointments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-3xl shadow-md bg-white p-4 m-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-500">Today's Appointment List</h1>

        {loading && <p>Loading...</p>}
        {data && data.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-none rounded-tl-2xl px-4 py-5 text-left text-gray-400 text-xs">PATIENTS</th>
                <th className="border-none px-4 py-4 text-left text-gray-400 text-xs">DATE</th>
                <th className="border-none px-4 py-4 text-left text-gray-400 text-xs">TIME</th>
                <th className="border-none px-4 py-4 text-left text-gray-400 text-xs">DOCTOR</th>
                <th className="border-none px-4 py-4 text-left text-gray-400 text-xs">INJURY</th>
                <th className="border-none rounded-tr-2xl px-4 py-4 text-left text-gray-400 text-xs">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((appointment, index) => (
                <tr key={index}>
                  <td className="border-t border-gray-300 px-4 py-2 flex">
                    <FaCircle className="fa-duotone size-10" />
                    <div>
                      <p className="font-bold text-base">&nbsp;{appointment.patient_name}</p>
                      <p className="text-gray-500 text-xs">&nbsp;+{appointment.mobile_number}</p>
                    </div>
                  </td>
                  <td className="border-t border-gray-300 px-4 py-2"><LuCalendarDays className="inline align-middle size-4 mb-1" />&nbsp;{formatDate(appointment.appointment_date)}</td>
                  <td className="border-t border-gray-300 px-4 py-2"><BsClockHistory className="inline align-middle" />&nbsp;{formatTime(appointment.appointment_time)}</td>
                  <td className="border-t border-gray-300 px-4 py-2">
                    <div>
                      {index < 3 ? (
                        <>
                          <MdStars className="inline align-middle size-5" style={{ color: 'green' }} />
                        </>
                      ) : index < 5 ? (
                        <>
                          <MdStars className="inline align-middle size-5" style={{ color: 'red' }} />
                        </>
                      ) : (
                        <>
                          <MdStars className="inline align-middle size-5" style={{ color: 'green' }} />
                        </>
                      )}
                      &nbsp;{appointment.doctor}
                    </div>
                  </td>
                  <td className="border-t border-gray-300 px-4 py-2">
                    <div className="bg-gray-200 rounded-lg p-2 inline-block">
                      <p className="text-center text-xs font-bold">
                        {appointment.injury}
                      </p>
                    </div>
                  </td>
                  <td className="border-t border-gray-300 px-4 py-2"><CiMenuKebab /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No appointments available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
