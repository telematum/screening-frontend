import React, { useState } from 'react'
import { useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { PiClockCountdownLight } from "react-icons/pi";
import { MdStars } from "react-icons/md";

const Appointments = () => {
const [patientsData, setPatientsData] = useState()
const [patientsHeaders, setPatientsHeaders] = useState()

const getPatientList = async ()=>{
try{
  // fetching the patients data
const res = await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
const data = await res.json()
setPatientsData(data?.appointments)
setPatientsHeaders(Object.keys(data?.appointments[0]).filter((header)=>(!header.includes("mobile_number"))))
console.log(data, "Res")
}
catch(err){
  console.log(err)
}
}

  useEffect(()=>{
getPatientList()
  },[])

return (
    <div className='w-full overflow-auto mx-2 p-3 border-slate-100 border-2 rounded-lg lg:w-4/5 lg:py-4 lg:px-6'>
      <h4 className='text-xl font-bold text-slate-400'>Today's Appointment List</h4>
      <table className='w-full mt-4 mx-auto table-fixed'>
        <thead>
          <tr className='bg-slate-50 border-slate-200 border-b-2 rounded-lg'>
            {
              patientsHeaders?.map((header)=>(<th key={header} className='w-48 uppercase text-left text-xs text-zinc-400 py-6 px-3'> {header.replaceAll("_", " ").replaceAll("appointment", "")}
              </th>))
            }
            <th className='w-32 uppercase text-left text-zinc-400 p-3 text-xs'>
              Action
            </th>
          </tr>
        </thead>
        
        <tbody>
          {patientsData?.map((row, index) => (
            <tr key={index} className='border-b-2 border-slate-200' >
             <td className=' w-48 capitalize text-gray-500'>
              <div className='p-3 flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-full p-2 border-2 flex justify-center items-center text-xs'>
<span className='m-auto'>{row?.patient_name[0]}</span>
                </div>
           <div className='flex flex-col'>
           <span className='text-black font-bold'>{row?.patient_name}</span>
           <span className='text-xs'>{row?.mobile_number}</span>
           </div>
              </div></td>
             <td className='w-48 capitalize text-gray-500'>
              <div className='flex justify-start items-center gap-2 p-3'>
              <HiOutlineCalendarDays className='text-xl'/>
              <span>{row?.appointment_date}</span>
              </div>
             </td>
             <td className='w-48 capitalize text-gray-500'>
              <div className='flex justify-start items-center gap-2 p-3'>
              <PiClockCountdownLight className='text-xl'/>
             <span>{row?.appointment_time}</span> 
              </div>
              </td>
             <td className='w-48 capitalize text-gray-500'>
              <div className='flex justify-start items-center gap-2 p-3'>
              <MdStars className='text-emerald-400 text-xl'/>
              <span>{row?.doctor}</span>
              </div>
             </td>
             <td className='w-48 capitalize p-3 text-gray-500'>
              <span className='bg-blue-100 text-sky-950 p-2 font-bold text-sm rounded-md'>{row?.injury}</span>
              </td>
<td className='w-32 text-slate-400' >
  <div className='p-3'>
  <BsThreeDotsVertical className='text-xl' />
  </div>
  </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Appointments