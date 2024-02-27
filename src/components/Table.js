import React from 'react';
import { appointments } from './Data';
import AppointmentDetails from './AppointmentDetails';
// import { CiCalendarDate } from "react-icons/ci";
// import { CiTimer } from "react-icons/ci";
// import { FcRating } from "react-icons/fc";



const Table = () => {
  return (
   

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-4">
    <table className=" w-[100%] text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" flex justify-between text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                   <h1 className='text-xl  text-gray-400 mx-2'>Patients</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                <h1 className='text-xl mx-20 text-gray-400'>Date</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                <h1 className='text-xl mx-20 text-gray-400'>Time</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                <h1 className='text-xl mx-20 text-gray-400'>Doctor</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                <h1 className='text-xl mx-20 text-gray-400'>Injury</h1>
                    </th>
                <th scope="col" className="px-6 py-3">
                <h1 className='text-xl mx-20 text-gray-400'>Action</h1>
                </th>
            </tr>
        </thead>
        <tbody>

   

         
        {
            appointments.map((appoint)=> (
                <AppointmentDetails appoint={appoint}/>
            ))
        }
    
    </tbody>

      
            
    </table>
</div>

  )
}

export default Table