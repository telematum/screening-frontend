import React from "react";

import appointmentData from "../data.json";
import TableItems from "./TableItems";

const Table = () => {
  return (
    <div className="overflow-y-auto">
      <table className="table-fixed w-full text-left mt-5 ">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className=" p-4 bg-gray-100 rounded-tl-2xl  ">PATIENTS</th>
            <th className=" bg-gray-100">DATE</th>
            <th className=" bg-gray-100">TIME</th>
            <th className=" bg-gray-100">DOCTOR</th>
            <th className=" bg-gray-100">INJURY</th>
            <th className="bg-gray-100 rounded-tr-2xl">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {appointmentData.appointments.map((appointment, index) => (
            <tr key={index} className="border-b-2 border-gray-100">
              <TableItems
                injury={appointment.injury}
                name={appointment.patient_name}
                number={appointment.mobile_number}
                date={appointment.appointment_date}
                time={appointment.appointment_time}
                doctor={appointment.doctor}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
