import React from "react";
import data from "../Data/data";
import AppointmentRow from "../components/TableRow";

const Table = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-4 m-4 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-500">
          Today's Appointment List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead className="bg-slate-50">
              <tr className="border-b text-gray-500">
                <th className="text-left p-3 rounded-tl-2xl">PATIENTS</th>
                <th className="text-left p-3">DATE</th>
                <th className="text-left p-3">TIME</th>
                <th className="text-left p-3">DOCTOR</th>
                <th className="text-left p-3">INJURY</th>
                <th className="text-left p-3 rounded-tr-2xl">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {data.appointments.map((appointment, index) => (
                <AppointmentRow key={index} appointment={appointment} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
