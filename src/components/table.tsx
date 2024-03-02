import React from 'react';
import { Patient } from '../utils/types';
import TableRow from './tableRow';

function Table({ data }: { data: Patient[] }) {
  const tableHeadings = ['Patients', 'Date', 'Time', 'Doctor', 'Injury', 'Action'];
  return (
    <div>
      <table className="min-w-full table-auto">
        <tr className="bg-gray-100">
          {tableHeadings.map((header, index) => (
            <th
              key={index}
              className="uppercase text-left p-4 last:text-center text-sm font-semibold text-gray-400 first:rounded-ss-2xl last:rounded-tr-2xl">
              {header}
            </th>
          ))}
        </tr>
        <tbody className="text-gray-500">
          {data.map((appointment, index) => (
            <TableRow
              key={index}
              patientName={appointment.patient_name}
              patientPhone={appointment.mobile_number}
              appointmentDate={appointment.appointment_date}
              appointmentTime={appointment.appointment_time}
              doctorName={appointment.doctor}
              patientInjury={appointment.injury}
              countryCode="+91"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
