import { React, useState, useEffect} from 'react'
import profile from "../assets/icons/profile.svg";
import calendar from "../assets/images/calendar.png";
import clock from "../assets/icons/clock.svg";
import star from "../assets/images/star.png";
import more from "../assets/images/more.png";
import { FetchRecords } from '../api/RecordsApiService';

function DisplayData() {

    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        FetchRecords()
        .then(response => {
          setColumn(Object.keys(response.data.appointments[0]))
          setRecords(response.data.appointments)})
        .catch(error => console.log(error))
    }, [])
  
  return (
    <div className="border-2 border-solid border-gray-200 rounded-3xl m-4 p-6 px-8">
      <h1 className="text-2xl mb-4 text-gray-500 font-semibold">Today's Appointment List</h1>
      <div>
        <table className="w-full table-auto text-sm text-left">
          <thead className=''>
            <tr className="bg-gray-50 rounded-t-2xl border-b-2 text-gray-400">
              <th className='px-6 p-4'>PATIENTS</th>
              <th className='px-0 p-4'>DATE</th>
              <th className='px-0 p-4'>TIME</th>
              <th className='px-0 p-4'>DOCTOR</th>
              <th className='px-0 p-4'>INJURY</th>
              <th className='px-0 p-4'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className='border-t-2 border-solid border-gray-200 rounded-3xl'>
                <td className="flex items-center mt-2 mb-2">
                  <img src={profile} alt="Profile" className="w-10 h-10 mx-4 rounded-full" />
                  <div className='flex flex-col'>
                    <div className='font-bold'>{record.patient_name}</div>
                    <div className='text-gray-500'>{record.mobile_number}</div>
                  </div>
                </td>

                <td>
                  <div className='flex items-center'>
                    <img src={calendar} alt="Calendar" className="w-4 h-4 mr-2" />
                    <div className='text-gray-500 font-medium'>{record.appointment_date}</div>
                  </div>
                </td>

                <td>
                  <div className='flex items-center'>
                    <img src={clock} alt="Clock" className="w-4 h-4 mr-2" />
                    <div className='text-gray-500 font-medium'>{record.appointment_time}</div>
                  </div>
                </td>

                <td className="text-gray-500">
                  <div className='flex items-center'>
                    <img src={star} alt="Star" className="w-4 h-4 mr-2" />
                    <div className='text-gray-500 font-semibold text-base'>{record.doctor}</div>
                  </div>
                </td>

                <td>
                  <div className='bg-slate-300 flex justify-start items-start rounded-lg w-fit p-2 text-xs font-semibold'>
                    {record.injury}
                  </div>
                </td>

                <td className="text-gray-500">
                  <button className='flex items-center justify-center'>
                    <img src={more} alt="Options" className="h-4 ml-5" />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DisplayData