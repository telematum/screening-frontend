import { React, useState, useEffect} from 'react'
import profile from "../assets/profile.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import star from "../assets/star.png";
import { FetchRecords } from '../api/RecordsApiService';

function DisplayData() {

    const headings = ['PATIENTS', 'DATE', 'TIME', 'DOCTOR', 'INJURY', 'ACTION']
    const [records, setRecords] = useState([])

    useEffect(() => {
        FetchRecords()
        .then(response => setRecords(response.data.appointments))
        .catch(error => console.log(error))
    }, [])
  
  return (
    <div className="border-2 border-solid border-gray-200 rounded-3xl m-4 p-6 px-8">
      <h1 className="text-2xl m-2 mb-4 text-gray-500 font-semibold">Today's Appointment List</h1>
      <div className="">
        <table className="w-full table-auto text-sm text-left">
          <thead className=''>
            <tr className="bg-gray-50 border-b-2 rounded-t-3xl">
              {headings.map((heading, index) => (
                <th key={index} className='pt-4 pb-4 text-gray-400 text-sm'>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className='space-y-4 items-center'>
                <td className="flex items-center">
                  <img src={profile} alt="Profile" className="w-10 h-10 mx-4 rounded-full" />
                  <div className='flex flex-col'>
                    <div className='font-bold'>{record.patient_name}</div>
                    <div className='text-gray-500'>{record.mobile_number}</div>
                  </div>
                </td>

                <td className="">
                  <div className='flex items-center'>
                    <img src={calendar} alt="Calendar" className="w-4 h-4 mr-2" />
                    <div className='text-gray-500 font-medium'>{record.appointment_date}</div>
                  </div>
                </td>

                <td className="">
                  <div className='flex items-center'>
                    <img src={clock} alt="Clock" className="w-4 h-4 mr-2" />
                    <div className='text-gray-500 font-medium'>{record.appointment_time}</div>
                  </div>
                </td>

                <td className="text-gray-500">
                  <div className='flex items-center'>
                    <img src={star} alt="Star" className="w-4 h-4 mr-2" />
                    <div className='text-gray-500 font-semibold'>{record.doctor}</div>
                  </div>
                </td>

                <td className="bg-slate-300 rounded-lg flex items-center justify-center min-w-fit p-2 text-sm font-semibold">{record.injury}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DisplayData