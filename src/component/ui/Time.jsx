import React, { useState,useEffect } from 'react'
import { IoMdTime } from "react-icons/io";
const Time = ({normalTime}) => {

    const [fullTime,setFullTime]=useState()


    const getTime=()=>{
        const [time, modifier] = normalTime.split(' ');

        let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  setFullTime(hours+":"+minutes)
    }
    useEffect(() => {
        getTime()
    }, [])
  return (
    <div className='flex flex-row space-x-1 items-center'>
        <IoMdTime className='w-8 h-8 text-slate-500'/>
        <h2 className='text-[18px] text-slate-500 font-medium'>
            {fullTime}
        </h2>
    </div>
  )
}

export default Time