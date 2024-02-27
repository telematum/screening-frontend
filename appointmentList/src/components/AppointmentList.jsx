import React, { useEffect, useState } from 'react'
import { getAppointmentList } from '../ApiHelper/AppointmentApi'

function AppointmentList() {

    
  const [appointments , setAppointments] = useState([])

  useEffect(() => {
   getAppointmentList()
   .then((res) => {
    setAppointments(res)
    console.log(appointments)
   })
},[])

  return (
    <div className='m-4 p-4 rounded-xl border-2 border-gray-500'>AppointmentList</div>
  )
}

export default AppointmentList