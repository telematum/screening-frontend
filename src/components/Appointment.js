import React from 'react'
import Table from './Table';







const Appointment = () => {
  return (
    <div>
        <h1 className='text-3xl text-slate-400 font-semibold mx-5 mt-10 '>Today's Appointment List</h1>
        <div className='mt-10 ml-10'>
        
       <Table/>
    
        </div>
       
    </div>
  )
}

export default Appointment