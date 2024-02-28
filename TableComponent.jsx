import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Calendar2, Clock } from 'iconsax-react'
import { MdStars } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import '../App.css'

function TableComponent() {

    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                let actualData = await response.json();
                if (actualData) {
                    setShowData(actualData?.appointments);
                }
            } catch (error) {
                console.error("Error fetch data", error);
            }
        }
        getData()
    }, [])

    return (
        <div className='bg-white h-auto border rounded-3xl m-6 py-8'>
            <div className='px-8'>
                <h1 className='text-gray-500 font-bold text-xl'>Today's Appointment List</h1>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="px-10 py-6 min-w-full inline-block align-middle">
                        <div class="rounded-lg overflow-hidden dark:border-gray-700 rounded-t-3xl">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr className='bg-slate-100 text-gray-400'>
                                        <th className=''>
                                            <div className='text-justify pl-5 py-4'>
                                                PATIENTS
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='text-justify py-4'>
                                                DATE
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='text-justify py-4'>
                                                TIME
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='text-justify py-4'>
                                                DOCTOR
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='text-justify py-4'>
                                                INJURY
                                            </div>
                                        </th>
                                        <th className=''>
                                            <div className='text-justify py-4'>
                                                ACTION
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {showData?.length && showData?.map((showDatas, index) => (
                                      <>
                                        <tr key={index} className=''>
                                            <td className='pl-5'>
                                                <div className='flex items-center gap-x-2 py-2'>
                                                    <div className='bg-gray-300 rounded-full p-2 h-8 w-8 flex items-center justify-center'>
                                                        <span className='text-black text-sm font-normal'>
                                                            {showDatas?.patient_name
                                                                .split(' ')
                                                                .map(word => word.charAt(0))
                                                                .join('')}
                                                        </span>
                                                    </div>
                                                    <div className=''>
                                                        <div className='text-black text-md font-semibold'>
                                                            {showDatas?.patient_name}
                                                        </div>
                                                        <div className='text-gray-400 text-sm font-normal'>
                                                            +{showDatas?.mobile_number}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='pr-5'>
                                                <div className='flex items-center gap-x-2 py-2'>
                                                    <div className=''>
                                                        <Calendar2 className='h-5 w-5' color='#808080' />
                                                    </div>
                                                    <div className='text-gray-600'>
                                                        {moment(showDatas?.appointment_date).format("DD MMM YYYY")}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='pr-5'>
                                                <div className='flex items-center gap-x-2 py-2'>
                                                    <div className=''>
                                                        <Clock className='h-5 w-5' color='#808080' />
                                                    </div>
                                                    <div className='text-gray-600'>
                                                        {showDatas?.appointment_time}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='pr-5'>
                                                <div className='flex items-center gap-x-2 py-2'>
                                                    <div className=''>
                                                        <MdStars color="#3cb371" />
                                                    </div>
                                                    <div className='text-gray-600'>
                                                        {showDatas?.doctor}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='pr-5'>
                                                <div className='py-2'>
                                                    <div className='bg-blue-100 px-2 py-1 rounded-md w-fit h-8 font-bold text-gray-600'>
                                                        {showDatas?.injury}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='pr-5'>
                                                <div className='pl-5 py-2'>
                                                    <HiOutlineDotsVertical color='#808080' />
                                                </div>
                                            </td>
                                        </tr>
                                        <hr className='bg-gray-100 h-0.25 w-[425%]'/>
                                        </>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableComponent