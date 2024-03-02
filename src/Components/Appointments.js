import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

function Appointments() {
  // Define state variables to hold appointments data and the index of the appointment to be deleted
  const [appointments, setAppointments] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Fetch data from the provided API endpoint when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API and update the appointments state
  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json'
      );
      setAppointments(res.data.appointments);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to format date strings using moment.js library
  const formatDate = (dateString) => {
    return moment(dateString).format('DD MMM YYYY');
  };

  // Function to handle click events on action buttons, toggling the deleteIndex state
  const handleActionClick = (index) => {
    setDeleteIndex(index === deleteIndex ? null : index);
  };

  // Function to handle deleting appointments by filtering out the appointment at the specified index
  const handleDelete = (index) => {
    setAppointments((prevAppointments) => {
      return prevAppointments.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <table className='table align-middle border table-responsive-lg'>
        <thead>
          <tr className='table-active'>
            <th className='p-3'>PATIENTS</th>
            <th className='p-3'>DATE</th>
            <th className='p-3'>TIME</th>
            <th className='p-3'>DOCTOR</th>
            <th className='p-3'>INJURY</th>
            <th className='p-3' style={{ width: '120px' }}>
              ACTION
            </th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment, i) => (
            <tr key={i}>
              <td className=''>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className=''>
                    <FaUserCircle
                      className='bg-dark rounded-circle'
                      style={{ fontSize: '50px' }}
                    />
                  </div>
                  <div className='px-3 '>
                    <h6>{appointment.patient_name}</h6>
                    <p className='m-0 text-secondary'>
                      {appointment.mobile_number}
                    </p>
                  </div>
                </div>
              </td>
              <td className=''>
                <div className='d-lg-flex justify-content-start align-items-center light'>
                  <MdDateRange size={22} />
                  <p className='m-0 px-1 '>
                    {formatDate(appointment.appointment_date)}
                  </p>
                </div>
              </td>
              <td>
                <div className='d-lg-flex justify-content-start align-items-center light'>
                  <BiTimeFive size={22} />
                  <p className='m-0 px-1'>{appointment.appointment_time}</p>
                </div>
              </td>
              <td className='light'>
                <div className='d-flex justify-content-start align-items-center'>
                  <div
                    className='p-1 star d-flex justify-content-center align-items-center'
                    style={{
                      backgroundColor: i <= 3 ? 'green' : 'orange',
                      borderRadius: '50%',
                    }}
                  >
                    <IoIosStar color='white' />
                  </div>

                  <p className='my-0 mx-2'>{appointment.doctor}</p>
                </div>
              </td>
              <td>
                <div className='m-0'>
                  <p
                    className='p-2 m-0 rounded fw-bold'
                    style={{
                      backgroundColor: '#E0F4FF',
                      color: '#333A73',
                      display: 'inline-block',
                    }}
                  >
                    {appointment.injury}
                  </p>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-start align-items-center'>
                  <button
                    onClick={() => handleActionClick(i)}
                    className='btn border-0'
                  >
                    <FaEllipsisV className='' size={20} />
                  </button>
                  {deleteIndex === i && (
                    <div>
                      <button
                        onClick={() => handleDelete(i)}
                        className='btn btn-danger btn-sm'
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {appointments.length === 0 && (
        <p className='mx-0 my-3 text-center fw-bold text-secondary d-flex justify-content-center align-items-center'>
          No appointments found.
          <button
            onClick={fetchData}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            className='fw-bold mx-2 btn btn-outline-primary btn-sm'
          >
            Retrieve Appointments
          </button>
        </p>
      )}
    </div>
  );
}

export default Appointments;
