import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Appointmentpage from './Appointmentpage'


const AppointmentData = () => {

    const[appointments, setAppointments] = useState([])

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const response = await axios.get('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
                setAppointments(response.data.appointments)
            } 
            catch (error) {
                console.log('Error fetching appointments from Api:', error)
            }
        }

        fetchApiData()
    }, [])

    // console.log(appointments)

  return (
    <Appointmentpage appointments = {appointments} />
  )
}

export default AppointmentData
