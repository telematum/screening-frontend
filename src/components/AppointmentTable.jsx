/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import user from '../static/png/user.png';
import { BsClockHistory } from 'react-icons/bs';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { MdStars } from 'react-icons/md';
import { getRandomHex } from '../utility/getRandomHex';

const TableColumns = ['Patients', 'Date', 'Time', 'Doctor', 'Injury', 'Action'];

export const AppointmentTable = ({ appointments }) => {
  return (
    <div className='w-screen h-screen p-7'>
      <h1 className='text-xl font-bold text-gray-700 mb-4'>Today's Appointment List</h1>
      <table className='w-full border-spacing-3 text-left text-small text-gray-700'>
        <thead className='bg-gray-100'>
          <tr className='h-10'>
            {TableColumns.map((header) => (
              <th className='table-cell p-4' key={header}>
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {appointments?.map(({ patient_name, appointment_date, appointment_time, doctor, injury, mobile_number }, idx) => (
            <tr key={idx} className='p-6 border-b border-gray-200'>
              <td className='table-cell px-4 py-2'>
                <div className='flex'>
                  <img src={user} alt='user image' width={50} className='rounded-full bg-[#d1d9dc]' />
                  <div className='ml-2'>
                    <p>{patient_name}</p>
                    <p className='text-[12px]'>{mobile_number}</p>
                  </div>
                </div>
              </td>
              <td className='table-cell p-4'>
                <HiOutlineCalendarDays size={22} className='float-left' />
                <p className='ml-1 float-left'>{appointment_date}</p>
              </td>
              <td className='table-cell p-4 '>
                <BsClockHistory size={20} className='float-left mt-0.5' />
                <p className='ml-1 float-left'>{appointment_time}</p>
              </td>
              <td className='table-cell p-4'>
                <MdStars size={25} color={getRandomHex()} className='float-left' />
                <p className='ml-1 float-left'>{doctor}</p>
              </td>
              <td className='table-cell p-4'>
                <p className='w-fit p-2 border rounded-md bg-blue-100 font-bold'>{injury}</p>
              </td>
              <td className='table-cell p-4'>
                <div className='w-1.5 h-1.5 rounded-full border bg-gray-300 mx-auto'></div>
                <div className='w-1.5 h-1.5 rounded-full border bg-gray-300 mx-auto'></div>
                <div className='w-1.5 h-1.5 rounded-full border bg-gray-300 mx-auto'></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
