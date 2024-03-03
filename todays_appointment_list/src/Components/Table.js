import React, { useState, useEffect } from 'react';
import PatientColumn from './PatientColumn';
import DateColumn from './DateColumn';
import TimeColumn from './TimeColumn';
import DoctorColumn from './DoctorColumn';
import InjuryColumn from './InjuryColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Table() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
      const data = await response.json();
      setAppointments(data.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse my-3.5 table-auto text-sm text-gray-500 rounded-2xl">
        <thead className="border-gray-500 bg-gray-100 rounded-t-xl">
          <tr>
            <th className="py-4 pl-4 pr-2 text-left" style={{ minWidth: '166px', fontWeight: '500' }}>PATIENTS</th>
            <th className="py-2 text-left" style={{ minWidth: '100px', fontWeight: '500' }}>DATE</th>
            <th className="py-2 text-left" style={{ minWidth: '100px', fontWeight: '500' }}>TIME</th>
            <th className="py-2 text-left" style={{ minWidth: '120px', fontWeight: '500' }}>DOCTOR</th>
            <th className="py-2 text-left" style={{ minWidth: '100px', fontWeight: '500' }}>INJURY</th>
            <th className="py-2 text-left rounded-tr-xl" style={{ minWidth: '100px', fontWeight: '500' }}>ACTION</th>
          </tr>
        </thead>
        <tbody className='text-base'>
          {appointments.map((appointment, index) => (
            <tr key={index} className="border-t border-gray-500">
              <PatientColumn appointment={appointment} />
              <DateColumn appointment={appointment} />
              <TimeColumn appointment={appointment} />
              <DoctorColumn appointment={appointment} />
              <InjuryColumn appointment={appointment} />
              <td className={`pl-7`} style={{ minWidth: '100px' }}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;