import React from 'react'
import { AppointmentList } from './components/AppointmentList'

export const App = () => {
  return (
    <div className='max-w-[95%] mx-auto min-h-screen flex items-center justify-center'>
      <AppointmentList />
    </div>
  )
}

