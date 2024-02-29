import React, { useEffect, useState } from 'react'
import { BsClockHistory } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const AppointmentList = () => {

    const[appointments,setAppointments] = useState([]);

    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
        .then(respond=> respond.json())
        .then(datas=> setAppointments(datas.appointments))
    },[])

  return (
    <div className='mx-auto max-w-6xl mt-8 w-full rounded-3xl bg-white shadow-lg outline outline-gray-50'>
        <div>
        <h1 className='px-6 text-xl py-5 font-bold text-gray-500'>Today's Appointment List</h1>
        </div>
        <div className='mx-6  rounded-t-3xl relative overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th scope="col" className='text-left text-sm font-medium text-gray-400 px-6 py-6 tracking-wider uppercase'>patients</th>
                        <th scope="col" className='text-left text-sm font-medium text-gray-400 px-6 py-6 tracking-wider uppercase'>date</th>
                        <th scope="col" className='text-left text-sm font-medium text-gray-400 px-6 py-6 tracking-wider uppercase'>time</th>
                        <th scope="col" className='text-left text-sm font-medium text-gray-400 px-6 py-6 tracking-wider uppercase'>doctor</th>
                        <th scope="col" className='text-left text-sm font-medium text-gray-400 px-6 py-6 tracking-wider uppercase'>injury</th>
                        <th scope="col" className='text-left text-sm font-medium text-gray-400 px-6 py-6 tracking-wider uppercase'>action</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {appointments.map(appointment=>(
                        <tr key={appointment.patient_name}>
                          <td className='px-6 py-2 text-gray-500' style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px', fontSize:"32px" }}><FaCircleUser/></div>
                            <div className='mt-1' style={{ display: 'flex', flexDirection: 'column'}}>
                            <div className='text-black font-bold' style={{ fontSize: '14px' }}>{appointment.patient_name}</div>
                            <div style={{ fontSize: '12px' }}>+{appointment.mobile_number}</div>
                            </div>
                           </td>

                          <td className='px-6 py-2 whitespace-nowrap text-gray-500'><span className='flex m-auto'><CiCalendarDate className='w-6 h-6 pr-1' />{appointment.appointment_date}</span></td>
                          <td className='px-6 py-2 whitespace-nowrap text-gray-500'><span className='flex m-auto'><BsClockHistory className='w-6 h-6 pr-2'/>{appointment.appointment_time}</span></td>
                          <td className='px-6 py-2 whitespace-nowrap text-gray-500'><span className='flex m-auto'><MdStars className={`w-7 h-6 pr-2 shadow-[#E2EAF4]  ${appointment.doctor === 'Dr. Patel' || appointment.doctor === 'Dr. Garcia' ? 'text-[#FAC898]' : 'text-[#29AB87]'} border-[#d0dded] rounded-full`} />{appointment.doctor}</span></td>
                          <td className='px-6 py-2 whitespace-nowrap text-gray-500'><span className='bg-[#E2EAF4] p-2 rounded-lg text-[#1F3B4D] font-bold' style={{ fontSize: '12px' }}>{appointment.injury}</span></td>
                          <td className='px-6 py-2 whitespace-nowrap text-gray-500 cursor-pointer '><BsThreeDotsVertical className='w-6 h-6 mx-4 text-[#d0dded]' /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AppointmentList