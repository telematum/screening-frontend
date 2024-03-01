import {  } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt, faEllipsisVertical, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';

const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

const Appointmentpage = ({ appointments }) => {
  return (

  <div className="border border-gray-200 rounded-2xl shadow-lg mx-20 my-16">
    <h2 className="text-xl font-semibold text-left text-gray-500 my-4 px-16">Today's Appointment List</h2>
    <div className="mx-16 mb-10 overflow-x-auto shadow-md border border-gray-200 rounded-lg">
        <table className="w-full text-base text-left text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-7">PATIENTS</th>
              <th scope="col" className="px-6 py-3">DATE</th>
              <th scope="col" className="px-6 py-3">TIME</th>
              <th scope="col" className="px-6 py-3">DOCTOR</th>
              <th scope="col" className="px-6 py-3">INJURY</th>
              <th scope="col" className="px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-2 flex items-center">
                  <div className={`${colors[index % colors.length]} rounded-full w-10 h-10`}></div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{appointment.patient_name}</div>
                    <div className="text-sm text-gray-500">+{appointment.mobile_number}</div>
                  </div>
                </td>
                <td className="px-6 py-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2"/>
                 {moment(appointment.appointment_date, 'DD-MM-YYYY').format('DD MMM YYYY')}
                </td>
                <td className="px-6 py-2">
                <FontAwesomeIcon icon={faClock} className="mr-2"/>
                {appointment.appointment_time}
                </td>
                <td className="px-6 py-2">
                  <div className="inline-flex items-center justify-center w-[18px] h-[18px] bg-green-500 text-white rounded-full mr-2">
                    <FontAwesomeIcon icon={faStar} className='text-white text-xs'/>
                  </div>
                {appointment.doctor}
                </td>
                <td className="px-6 py-2">
                  <span className="bg-blue-200 text-black font-semibold px-3 py-1 rounded-md">
                    {appointment.injury}
                  </span>
                </td>
                <td className="px-12 py-2">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
</div>
  );
};

export default Appointmentpage;
