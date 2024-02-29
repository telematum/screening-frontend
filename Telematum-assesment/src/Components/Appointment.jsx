/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Details from './Details';
import { APPOINTMENTS_URL } from '../constants';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APPOINTMENTS_URL);
        const info = await response.json();
        setAppointments(info.appointments);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] mx-auto'>
      <div className='border p-10 rounded-3xl'>
        <h1 className='text-2xl text-gray-500 font-bold'>Today's Appointment List</h1>
        <div className='mt-5'>
          {
            loading ? (
              <p>Loading the Data...</p>
            ) : (
              <table>
                <thead className='border-b '>
                  <tr className='uppercase text-gray-400'>
                    <th className='py-3 '>Patient</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Doctor</th>
                    <th>Injury</th>
                    <th>Action</th>
                  </tr>
                </thead >
                <tbody>
                  {appointments.map((appointment, index) => (
                    <Details key={index} info={appointment} />
                  ))}
                </tbody>
              </table >
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Appointment;
