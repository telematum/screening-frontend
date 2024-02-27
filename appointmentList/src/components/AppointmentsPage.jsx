import React, { useEffect, useState } from "react";
import { getAppointmentList } from "../ApiHelper/AppointmentApi";
import AppointmentList from "./AppointmentList";

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointmentList().then((res) => {
      setAppointments(res.appointments);
    });
  }, []);

  return (
    <div className="m-4 p-4 rounded-xl border-2 border-gray-500">
      <h2 className="text-gray-600 font-bold text-xl">Today's Appointment List</h2>

      <div className="rounded-xl mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6  gap-4 justify-center items-center bg-gray-200 rounded-t-xl p-4 my-3">
          <h3 className="text-gray-500 font-bold">PATIENTS</h3>
          <h3 className="text-gray-500 font-bold">DATE</h3>
          <h3 className="text-gray-500 font-bold">TIME</h3>
          <h3 className="text-gray-500 font-bold">DOCTOR</h3>
          <h3 className="text-gray-500 font-bold">INJURY</h3>
          <h3 className="text-gray-500 font-bold">ACTION</h3>
        </div>
        {appointments &&
          appointments.map((appointment, index) => (
            <AppointmentList appointment={appointment} key={index} />
          ))}
      </div>
    </div>
  );
}

export default AppointmentsPage;
