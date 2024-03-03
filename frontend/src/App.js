
import { useEffect, useState } from 'react';
import './App.css';
import { Calendar, Clock, MoreVertical, Star } from 'lucide-react';

function App() {
  const [data, setData] = useState()
  const fetchData = async () => {
    const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
    const datainjson = await response.json()
    setData(datainjson.appointments)


  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='w-full p-12'>
      <h3 className='text-gray-500 text-3xl '>Today's Appointment List</h3>
      <div className='table py-8 w-full'>
        <table className='w-full'>
          <thead>
            <tr className='flex px-6 text-md py-4 bg-gray-100 rounded-xl rounded-b-none text-gray-500 text-left uppercase'>
              <th className='font-normal w-3/6'>Patients</th>
              <th className='font-normal w-2/6'
              >Date</th>
              <th className='font-normal w-2/6'>Time</th>
              <th className='font-normal w-3/6'>Doctor</th>
              <th className='font-normal w-2/6'>Injury</th>
              <th className='font-normal w-2/6'>Action</th>

            </tr>
          </thead>
          <hr />

          <tbody>
            {data?.map((appointment, index) => (
              <>
                <tr key={index} className='flex px-6 text-md py-4 rounded-xl rounded-b-none text-gray-500 text-left '>
                  <td className='font-normal w-3/6 flex'>

                    <div className='h-10 w-10 bg-cyan-400 rounded-full mr-4'>

                    </div>
                    <div>
                      <p className='text-gray-700 font-bold text-md'>{appointment.patient_name}</p>
                      <p className='text-sm'>{appointment.mobile_number}</p>

                    </div></td>
                  <td className='font-normal w-2/6'><div className="flex gap-2 py-2">
                    <Calendar className='text-gray-400' />
                    <p>{appointment.appointment_date}</p>
                  </div>
                  </td>
                  <td className='font-normal w-2/6'><div className="flex gap-2 py-2">
                    <Clock className='text-gray-400' />
                    <p>{appointment.appointment_time}</p>
                  </div>
                  </td>
                  <td className='font-normal w-3/6'><div className="flex gap-2 py-2">
                    <Star className='text-white  bg-green-400 rounded-full' />
                    <p>{appointment.doctor}</p>
                  </div>
                  </td>
                  <td className='font-normal w-2/6 '><div className='h-10 bg-blue-200 w-fit rounded-md pb-2 pt-2 px-4 text-center text-sm font-medium'>
                    {appointment.injury}</div></td>
                  <td className='font-normal w-2/6 '><MoreVertical /></td>

                </tr>
                <hr />
              </>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
