import React, { useEffect } from 'react'

const Patient = ({name,number,color}) => {

    useEffect(()=>{
        
    },[])
  return (
    <div className='flex flex-row space-x-3'>
        <div className={`w-10 h-10 rounded-full bg-[#222222]`}></div>
        <div>
            <h2 className='text-black text-md font-semibold'>
                {name}
            </h2>
            <p className='text-gray-400/80 font-medium text-sm'>+ {number.split('-').join(' ')}</p>
        </div>
    </div>
  )
}

export default Patient