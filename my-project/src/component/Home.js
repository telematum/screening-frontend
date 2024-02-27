import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiCalendar } from 'react-icons/ci';
import { BsClockHistory } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';

const Home = () => {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
            .then((res) => {
                setData(res.data.appointments);
            })
            .catch((err) => {
                console.log(err, 'err');
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border rounded-lg shadow-lg'>
            <div className='mx-auto max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 '>
                <h1 className='text-lg font-semibold tracking-wide text-gray-500 mb-6'>Today's Appointment List</h1>

                <div className='bg-white shadow-md rounded my-6'>
                    <table className='w-full table-auto  rounded-lg  '>
                        <thead className='bg-gray-50'>
                            <tr className='text-xs text-gray-400 uppercase min-w-max table-auto text-left'>
                                <th className='px-4 py-3' colSpan='2'>PATIENTS</th>
                                <th className='px-4 py-3' colSpan='2'>DATE</th>
                                <th className='px-4 py-3' colSpan='2'>TIME</th>
                                <th className='px-4 py-3'>DOCTOR</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y '>
                            {data.map((item, index) => (
                                <tr key={index} className='text-sm font-semibold text-slate-500 text-left '>
                                    <td className='px-4 py-3' colSpan='2'>
                                        <div className='flex items-center'>
                                            <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
                                            <span className='ml-2 text-current text-slate-700 '>{item.patient_name}
                                                <div className='text-slate-400'>{item.mobile_number}</div></span>
                                        </div>
                                    </td>
                                    <td className='px-4 py-3' colSpan='2'> <div className='flex items-center'>
                                        <span className='inline-flex items-center mr-1'><CiCalendar size={18} /></span>
                                        <span>{item.appointment_date}</span>
                                    </div></td>
                                    <td className='px-4 py-3' colSpan='2'><div className='flex items-center'>
                                        <span className='inline-flex items-center mr-1'><BsClockHistory size={18} /></span>
                                        <span>{item.appointment_time}</span>
                                    </div></td>
                                    <td className='px-4 py-3'>
                                        <div className='flex items-center'>
                                            <span className='inline-flex items-center p-1'><FcRating size={18} /></span>
                                            <span className='ml-1'>{item.doctor}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Home;


