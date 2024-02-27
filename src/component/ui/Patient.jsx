import React, { useEffect } from 'react'
import profile from '../../../src/profile.webp'
const Patient = ({name,number,color}) => {

    useEffect(()=>{
        
    },[])
  return (
    <div className='flex flex-row space-x-3'>
        <img className={`w-10 h-10 rounded-full object-cover`} src={profile} alt=''></img>
        <div>
            <h2 className='text-black text-md font-semibold'>
                {name}
            </h2>
            <p className='text-gray-500/70 font-medium text-sm'>+ {number.split('-').join(' ')}</p>
        </div>
    </div>
  )
}

export default Patient