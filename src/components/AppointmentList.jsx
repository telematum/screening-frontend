import React, { useState, useEffect } from 'react'
import { calendar, clock, star, action } from '../assets/index'

export const AppointmentList = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
            .then((res) => res.json())
            .then((data) => setAppointments(data.appointments))
    }, [])

    return (
        <div className='border-2 p-8 rounded-2xl overflow-x-auto'>
            <h1 className="text-[#b6b4b4] font-bold text-xl">Today's Appointment List</h1>
            <div className="mt-4">
                <table>
                    <thead className=" bg-blue-100">
                        <tr>
                            <th><p className='text-gray-400 font-bold text-lg p-4'>Patients</p></th>
                            <th><p className='text-gray-400 font-bold text-lg p-4'>Date</p></th>
                            <th><p className='text-gray-400 font-bold text-lg p-4'>Time</p></th>
                            <th><p className='text-gray-400 font-bold text-lg p-4'>Doctor</p></th>
                            <th><p className='text-gray-400 font-bold text-lg p-4'>Injury</p></th>
                            <th><p className='text-gray-400 font-bold text-lg p-4'>Action</p></th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-auto'>
                        {appointments.length > 0 ?
                            appointments.map((patient, i) => (
                                <tr className="border-b-2 hover:bg-gray-50" key={i}>
                                    <td className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                                            <div className="flex flex-col">
                                                <p className='font-semibold text-sm'>{patient.patient_name}</p>
                                                <p>{patient.mobile_number}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            <img src={calendar} className='w-4 h-4' />
                                            <p>{patient.appointment_date}</p>
                                        </div>
                                    </td>
                                    <td td className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            <img src={clock} className='w-4 h-4' />
                                            <p>{patient.appointment_time}</p>
                                        </div>
                                    </td>
                                    <td td className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            <img src={star} className='w-4 h-4' />
                                            <p>{patient.doctor}</p>
                                        </div>
                                    </td>
                                    <td td className='px-8 py-2'><p className='bg-blue-50 p-2 rounded-lg font-semibold'>{patient.injury}</p></td>
                                    <td td className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            <img src={action} className='w-4 h-6 cursor-pointer' />
                                        </div>
                                    </td>
                                </tr>
                            ))
                            : ('No Appointments')}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
