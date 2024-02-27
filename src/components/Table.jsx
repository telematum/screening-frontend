import React from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { MdStars } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Table = ({ headers, patients }) => {

    const convertToDate = (date) => {
        const dateObj = new Date(date);
        const options = { day: "numeric", month: "short", year: "numeric" };
        const formattedDate = dateObj.toLocaleDateString("en-GB", options);
        return formattedDate;
    };

    const convertToTimeFormat = (time) => {
        const [hours, minutes, period] = time.split(/:| /);
        const formattedHours =
            period === "PM" ? (parseInt(hours, 10) + 12).toString().padStart(2, "0"): hours;
        const formattedTime = `${formattedHours}:${minutes}`;
        return formattedTime;
    };
    return (
        <>
            <div className="relative overflow-x-auto border-0 rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='h-16'>
                            {headers?.map((header) => {
                                return (
                                    <th scope="col" className="px-6 py-3" key={header}>
                                        {header}
                                    </th>
                                )
                            })}


                        </tr>
                    </thead>
                    <tbody>
                        {patients?.map((patient,i) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100" key={i}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                        <div className='flex gap-x-4'>
                                            <div className='border rounded-full '>
                                                <RxAvatar size={35} />
                                            </div>
                                            <div className='flex flex-col w-10'>
                                                <span className="block text-gray-700 text-sm font-medium">{patient.patient_name}</span>
                                                <span className="block text-gray-400 text-xs">+ {patient.mobile_number}</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 ">
                                        <div className='flex gap-x-3'>

                                            <IoCalendarOutline size={20} />
                                            {convertToDate(patient.appointment_date)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex gap-x-3'>

                                            <BsClockHistory size={20} />
                                            {convertToTimeFormat(patient.appointment_time)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex gap-x-3'>

                                            <MdStars size={25} color={i===3?"orange":"green"}/>
                                            {patient.doctor}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className='bg-blue-100 font-bold p-1 rounded-lg'>

                                        {patient.injury}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <PiDotsThreeOutlineVerticalFill size={20} className='cursor-pointer'/>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Table;