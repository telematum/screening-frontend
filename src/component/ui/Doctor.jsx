import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
const Doctor = ({name,index}) => {
  return (
    <div className='flex flex-row items-center space-x-2'>
        <div className={`${index>2&&index<5?'bg-yellow-500':'bg-green-500'} relative rounded-full w-6 h-6`}>
            <BsFillStarFill className='absolute top-[5.5px] left-[6px] w-[13px] h-[13px] text-white'/>
        </div>
        <h2 className='text-[18px] text-slate-500 font-medium'>
            {name.split(' ').join('')}
        </h2>
    </div>
  )
}

export default Doctor