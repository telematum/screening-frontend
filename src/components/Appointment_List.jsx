import React, { useEffect, useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
function Appointment_List() {
    const [info, setinfo] = useState([]);
    function getRandomColor() {
        // Generate a random hexadecimal color code
        const randomColor = '#' + Math.floor(Math.random()*16777265).toString(16);
      
        return randomColor;
      }

      const formatDate = (inputDate) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
        return formattedDate;
      };
    const fetchData = async () => {
        try {
            const res = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
        const data = await res.json();
        console.log(data.appointments)
        setinfo(data.appointments);
        } catch (error) {
            console.log(error)
          
        }
        
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
            <div className="main w-full  px-12 py-14  border-2 rounded-lg">
                <h1 className='font-bold text-[34px] text-gray-500 mb-8'>Today's Appointment List</h1>
                <table className=' w-full   '>
                    <thead className=' rounded-lg text-gray-400 bg-gray-100 '  >
                        <tr className='text-left text-[20px] font-[300px] uppercase '>
                            <th className='px-4 py-2'>Patients</th>
                            <th className='px-4 py-2'>Date</th>
                            <th className='px-4 py-2'>Time</th>
                            <th className='px-4 py-2'>Doctor</th>
                            <th className='px-4 py-2'>Injury</th>
                            <th className='px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((item, index) => (
                            <tr key={index} className='border-b hover:bg-slate-50 cursor-pointer  '>
                                <td className='px-4 py-3'>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <span style={{backgroundColor:getRandomColor()}} className='bg-${getRandomColor()} h-[28px] w-[28px] rounded-full'></span>
                                        <span className='text-[19px] text-slate-600 font-bold'>{item.patient_name}</span>
                                    </div>
                                    <span className='text-[17px] font-semibold text-slate-700'>+{item.mobile_number}</span>
                                </td>
                                <td className='px-4 py-2 '>
                                    <div className='flex items-center gap-2 text-slate-500 font-semibold text-[19px]'>
                                        <span><SlCalender  /></span>

                                        <span>{formatDate(item.appointment_date)}</span>
                                    </div>
                                </td>
                                <td className='px-4 py-2'><div className='flex items-center gap-2 text-slate-500 font-semibold text-[19px] '>
                                    <span><IoMdTime /></span>

                                    <span>{item.appointment_time}</span>
                                </div> </td>
                                <td className='px-4 py-2'>
                                    <div className='flex items-center gap-2 text-slate-500 font-semibold text-[19px] '>
                                        <span className='text-green-500'><MdStars /></span>

                                        <span>{item.doctor}</span>
                                    </div>
                                </td>
                                <td className='px-4 py-2'> <span className='bg-slate-200 rounded-lg px-3 py-2 font-bold text-[19px] text-slate-500 text-center'>{item.injury} </span></td>
                                <td className='px-4 py-2'>
                                    <span className=' cursor-pointer'><HiOutlineDotsVertical className='hover:scale-150 transition duration-300 ease-in-out text-[19px]'/></span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Appointment_List