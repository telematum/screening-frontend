import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { FcRating } from "react-icons/fc";


const AppointmentDetails = ({appoint}) => {
  return (
    <div>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className=" mx-2 flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[30px] h-[30px] rounded-lg '/>
                  <div>
                  <h1 className='mx-2'>{appoint.name}</h1>
                 <h1 className='text-sm mx-2 text-gray-400'>{appoint.mobile_number}|</h1>
                  </div>
               
                </th>
                <td className="px-6 py-4">
                    <div className='flex mx-8'>
                    <CiCalendarDate className='w-[30px] mt-1' /> 
                    <h1 className='mb-2'>{appoint.appointment_date}</h1>
                    </div>
               
                </td>
                <td className="px-6 py-4">
                   <div className='flex mx-10'>
                   <CiTimer className='w-[30px] mt-1'/>
                   <h1 className='mb-2'>{appoint.appointment_time}</h1>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <div className='flex mx-14'>
                  <FcRating className='w-[30px] mt-1' />
                  <h1 className='mb-2'>{appoint.doctor}</h1>
                  </div>
                </td>
                <td className="px-6 py-4">
                  
                 <button className='bg-gray-300 px-2 rounded-lg mx-20'>{appoint.injury}</button>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-20">:</a>
                </td>
            </tr>
           
    </div>
  )
}

export default AppointmentDetails