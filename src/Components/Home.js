import React, { useEffect, useState } from 'react';
import { API } from '../utils/constants';

import { CiMenuKebab } from "react-icons/ci";

import { FaUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";





const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setData(data?.appointments);
    };

    console.log(data);
    
    return (
        <div>
            <div className='text-2xl font-bold text-gray-500 my-10 mx-10'>Today's Appointments List</div>
            <table className="w-[100%] max-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-md leading-5 text-gray-500 ">
                        <th className="px-6 py-3 text-left font-medium">PATIENTS</th>
                        <th className="px-6 py-3 text-left font-medium">DATE</th>
                        <th className="px-6 py-3 text-left font-medium">TIME</th>
                        <th className="px-6 py-3 text-left font-medium">DOCTOR</th>
                        <th className="px-6 py-3 text-left font-medium">INJURY</th>
                        <th className="px-6 py-3 text-left font-medium">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id} className="border-b border-gray-200">
                            <td className="px-6 py-4 flex items-center gap-5">
                                <div className=' rounded-full bg-gray-300 px-2 py-2'><FaUser  fontSize={24}/></div>
                                <div className="leading-5 text-gray-900 flex flex-col gap-2">
                                    <p className="text-md font-semibold">{d.patient_name}</p>
                                    <p className="text-sm text-[#777676] font-semibold">{d.mobile_number}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                               <div className='flex items-center gap-2'>
                               <div><CiCalendar /></div>
                                <div className="text-sm leading-5 text-gray-900 font-semibold">
                                    {d.appointment_date}
                                </div>
                               </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                               <div className='flex items-center gap-2'>
                               <div><IoTimeOutline /></div>
                                <div className="text-sm leading-5 text-gray-900 font-semibold">
                                    {d.appointment_date}
                                </div>
                               </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                               <div className='flex items-center gap-2'>
                               <div><CiStar /></div>
                                <div className="text-sm leading-5 text-gray-900 font-semibold">
                                    {d.appointment_date}
                                </div>
                               </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 flex items-center">
                                <div className="flex items-center justify-center text-sm leading-5 text-[#635f5f] font-semibold bg-gray-200 rounded-lg p-2 rounded-xlflex ">
                                    {d.injury}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                <div className="text-sm leading-5 text-[#777676] font-semibold">
                                <CiMenuKebab />

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
