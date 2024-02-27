import React, { useState, useEffect } from 'react';
import { ClockCircleOutlined, CalendarOutlined, StarOutlined } from '@ant-design/icons';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
        const data = await response.json();
        setAppointments(data.appointments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ml-4">Today's Appointment List</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patients
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Doctor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Injury
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  <div className="flex items-center">
                    <div
                      className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300"
                      style={{ backgroundColor: getRandomColor() }}
                    >
                      {appointment.patient_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-2">
                      <span className='font-bold' >{appointment.patient_name}</span>
                      <br />
                      {appointment.mobile_number}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <CalendarOutlined className="inline-block align-middle" /> {appointment.appointment_date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ClockCircleOutlined className="inline-block align-middle" /> {appointment.appointment_time}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <StarOutlined className="inline-block align-middle" /> {appointment.doctor}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className='font-bold'>{appointment.injury}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
