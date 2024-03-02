import axios from 'axios';
import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

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

  const formatDate = (dateString) => {
    return moment(dateString).format('DD MMM YYYY');
  };

  const handleActionClick = (index) => {
    setDeleteIndex(index === deleteIndex ? null : index);
  };

  const handleDelete = (index) => {
    setAppointments((prevAppointments) => {
      return prevAppointments.filter((_, i) => i !== index);
    });
  };

  return (
    <section className='container-fluid'>
      <div className=' m-3 p-4 border' style={{ borderRadius: '30px' }}>
        <div className='px-2'>
          <Navbar />
          <div className='table-responsive '>
            <table className='table align-middle border'>
              <thead>
                <tr className='table-active '>
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
                      <div className='d-flex justify-content-start align-items-center light'>
                        <MdDateRange size={22} />
                        <p className='m-0 px-1 '>
                          {formatDate(appointment.appointment_date)}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-start align-items-center light'>
                        <BiTimeFive size={22} />
                        <p className='m-0 px-1'>
                          {appointment.appointment_time}
                        </p>
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
                      <p className='m-0'>
                        <span
                          className='p-2 rounded fw-bold'
                          style={{
                            backgroundColor: '#E0F4FF',
                            color: '#333A73',
                          }}
                        >
                          {appointment.injury}
                        </span>
                      </p>
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
              <p className='m-0 text-center fw-bold text-secondary d-flex justify-content-center align-items-center'>
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
        </div>
      </div>
    </section>
  );
}

export default App;
