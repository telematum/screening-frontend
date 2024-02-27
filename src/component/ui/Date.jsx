import React, { useEffect, useState } from 'react'
import { LuCalendar } from "react-icons/lu";
const Dates = ({date}) => {

    console.log(date)
    const [fullDate,setFullDate]=useState('')

    const setDate=()=>{
    
       const d=new Date(date)
       const day=d.getDate()
       const month=d.toLocaleString('en-us',{month:'short'})
       const year=d.getFullYear()

       setFullDate(day+" "+month+" "+year)
    }

    useEffect(()=>{
        setDate()
    },[])
  return (
    <div className='flex flex-row space-x-2 items-center'>
        <LuCalendar className='text-slate-500 w-5 h-5'/>
        <h2 className='text-xl text-slate-500 font-medium'>
            {fullDate}
        </h2>
    </div>
  )
}

export default Dates