import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
      .then(response => response.json())
      .then(data => setAppointments(data.appointments))
      .catch(error => console.log(error)); 
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map((part) => part.charAt(0)).join('').toUpperCase();
  }

  const generatePlaceholderColorClass = (index) => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    return `bg-${colors[index % colors.length]}-200`;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 overflow-x-auto">
        <h1 className="text-3xl font-bold mb-4">Today's Appointment List</h1>
        <div className="flex bg-yellow-50 py-4 mb-4 text-center">
          <div className="heading flex-1 font-mono font-bold">Patients</div>
          <div className="heading flex-1 font-mono font-bold">Date</div>
          <div className="heading flex-1 font-mono font-bold">Time</div>
          <div className="heading flex-1 font-mono font-bold">Doctor</div>
          <div className="heading flex-1 font-mono font-bold">Injury</div>
          <div className="heading flex-1 font-mono font-bold">Action</div>
        </div>
        {Array.isArray(appointments) && appointments.map((appointment, index) => (
          <div className="flex text-center py-3 mb-3" key={appointment.patient_name}>
            <div className={`flex-none p-2 ${generatePlaceholderColorClass(index)} rounded-full`}>
              <div className="text-white font-bold">{getInitials(appointment.patient_name)}</div>
            </div>
            <div className="flex-1 px-3 py-2 text-left">{appointment.patient_name}</div>
            <div className="flex-1 px-3 py-2 text-left"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />{appointment.appointment_date}</div>
            <div className="flex-1 px-3 py-2 text-left"><FontAwesomeIcon icon={faClock} className="mr-2" />{appointment.appointment_time}</div>
            <div className="flex-1 px-3 py-2 text-left"><FontAwesomeIcon icon={faStar} className="mr-2" />{appointment.doctor}</div>
            <div className="flex-1 px-1 py-2 mx-auto bg-blue-100 auto cursor-pointer text-black text-center rounded-lg hover:bg-blue-500">{appointment.injury}</div>
            <div className="flex-1 px-3 py-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faEllipsisV} />
              <FontAwesomeIcon icon={faEllipsisV} />
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
