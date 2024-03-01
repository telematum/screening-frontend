import React, { useState } from "react";
import data from "./../Data/appointments.json";
import Appointment from "./Appointment";

function AppointmentList() {
  const [appointment, setAppointment] = useState(data.appointments);
// const appointmentListHeader = Object.keys(appointment[0]);
  return (
    <div className=" bg-white px-5 pt-5 pb-5 rounded-lg border border-gray-200  flex-1">
      <strong className=" text-gray-500 font-medium">
        Today's Appointment List
      </strong>
      <div className=" border-gray-200 rounded-lg mt-3">
        <table className="w-full text-gray-500">
          <thead>
            <tr>
                <td>Patients</td>
                <td>Date</td>
                <td>Time</td>
                <td>Doctor</td>
                <td>Injury</td>
                <td>Action</td>
            </tr>
          </thead>

          <tbody>
                {appointment.map((appointmentObj)=>{
                    return <Appointment  appointment={appointmentObj}/>
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentList;
