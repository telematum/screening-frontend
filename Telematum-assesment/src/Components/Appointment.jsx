/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Details from './Details';
import { APPOINTMENTS_URL } from '../constants';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('')

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

  const filteredAppointments = appointments.filter((Appointment) => Appointment.patient_name.toLowerCase().includes(search.toLowerCase())
  )

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto px-4'>
      <div className='border p-4 rounded-lg max-sm:w-full  lg:max-w-screen-lg max-w-screen-md'>
        <h1 className='text-2xl text-gray-500 font-bold mb-4'>Today's Appointment List</h1>
        <div className='max-sm:overflow-x-auto'>
          {
            loading ? (
              <p className='text-red-600 text-center font-bold'>Loading the Data...</p>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Search by Name"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className='border border-gray-300 rounded-md px-3 py-2 mb-5 w-full max-w-md'
                />
                {filteredAppointments.length > 0 ? (
                  <table className='w-full whitespace-nowrap'>
                    <thead>
                      <tr className='text-gray-400 uppercase'>
                        <th className='py-3 bg-gray-100 rounded-l-lg'>Patient</th>
                        <th className='bg-gray-100'>Date</th>
                        <th className='bg-gray-100'>Time</th>
                        <th className='bg-gray-100'>Doctor</th>
                        <th className='bg-gray-100'>Injury</th>
                        <th className='bg-gray-100 rounded-r-lg'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.map((appointment, index) => (
                        <Details key={index} info={appointment} />
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <h1 className='text-center'>Name Not Found</h1>
                )}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Appointment;
