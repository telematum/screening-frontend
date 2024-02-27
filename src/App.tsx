import React, { useEffect, useState } from 'react'
import PatientTable from './components/PatientTable'
import { appointmentList } from './services/services'
import toast from 'react-hot-toast'
export interface AppointmentsType {
  patient_name: string
  mobile_number: string
  appointment_date: string
  appointment_time: string
  doctor: string
  injury: string
}

const App = () => {

  const [data, setData] = useState<AppointmentsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAppointments = async () => {
    try {
      setLoading(true)
      const response = await appointmentList();

      if (response.status === 200) {
        // console.log(response.data?.appointments);
        setData(response.data?.appointments)
        setLoading(false)
      }
    } catch (error: any) {
      toast.error(error.response?.data.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAppointments()
  }, [])

  console.log(data);

  return (
    <React.Fragment>
      <PatientTable patientData={data} loading={loading} />
    </React.Fragment>
  )
}

export default App