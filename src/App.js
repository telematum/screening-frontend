import React, { useState, useEffect } from "react";
import { GoPersonFill } from "react-icons/go";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.appointments && result.appointments.length > 0) {
          setAppointments(result.appointments);
        } else {
          setAppointments([]);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAppointments();
  }, []);
  return (
    <div className="p-4">
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div>
          {appointments.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold py-4">
                Today's Appointment List
              </h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4">Patient Name</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Time</th>
                    <th className="py-2 px-4">Doctor</th>
                    <th className="py-2 px-4">Injury</th>
                    <th className="py-2 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className=" px-4 flex flex-col">
                        <div className="flex items-center">
                          <GoPersonFill size={50} color="#007BFF" />
                          {appointment.patient_name}
                        </div>
                        <div className=" px-4">{appointment.mobile_number}</div>
                      </td>

                      <td className="py-2 px-4">
                        {appointment.appointment_date}
                      </td>
                      <td className="py-2 px-4">
                        {appointment.appointment_time}
                      </td>
                      <td className="py-2 px-4">{appointment.doctor}</td>
                      <td className="py-2 px-4">{appointment.injury}</td>
                      <td className="py-2 px-4">: </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No appointments available for today.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
