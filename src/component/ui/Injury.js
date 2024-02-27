import React from 'react'

const Injury = ({injury}) => {
  return (
    <span className='rounded-lg inline-block py-2 px-3 bg-blue-100/70 text-center'>  
           <h2 className='text-sm text-slate-600/90 font-semibold'> {injury}</h2>
    </span>
  )
}

export default Injury