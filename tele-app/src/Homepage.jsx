import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [randomDoctorIndex, setRandomDoctorIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/todays.json');
      const data = await response.json();
      setData(data.appointments.map(appointment => ({
        ...appointment,
        appointment_date: formatDate(appointment.appointment_date),
        appointment_time: formatTime(appointment.appointment_time)
      })));
      setRandomDoctorIndex(Math.floor(Math.random() * data.appointments.length));
    } catch(error) {
      console.log('Error fetching data:', error);
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const formatTime = (timeString) => {
    const [hoursStr, minutesStr] = timeString.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return `${hours}.${minutes < 10 ? '0' : ''}${minutes}`;
  }

  return (
    <div className='field-container'>
      <h1>Today's Appointment List</h1>
      <table className='fields-details'>
        <thead>
          <tr>
            <th>Patients</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Injury</th>
            <th className='action'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr key={index} className="patient-details">
              <td>
                <div className="patients">
                  <div className='patient-placer'>
                    {appointment.patient_name[0]}
                  </div>
                  <div className="patient-info patient-name">
                    <strong>{appointment.patient_name}</strong>
                    {appointment.mobile_number}
                  </div>
                </div>
              </td>
               <td>
                <div  className='date-field'>{appointment.appointment_date}</div>
              </td>
              <td>
                <div  className='time-field'>{appointment.appointment_time}</div>
              </td>
              <td>
                <div className={index === randomDoctorIndex ? 'senior-doctor' : 'doctor-field'}>
                    {appointment.doctor}
                </div>
               </td>
              <td className='injury-field'>{appointment.injury}</td>
              <td className='action-field'></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Homepage;
