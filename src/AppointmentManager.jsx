import { useState, useEffect } from "react"
import axios from "axios"
import AppointmentItem from "./AppointmentItem"

const AppointmentManager = () => {
  const [appointments, setAppointments] = useState([])
  console.log(appointments)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        )
        setAppointments(response.data.appointments)
      } catch (error) {
        console.error("Error fetching appointments:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-4">
      <div className="container mx-auto p-8 border rounded-3xl shadow-sm">
        <h1 className="text-2xl font-semibold mb-4">
          Today's Appointment List
        </h1>
        <div className="overflow-x-auto rounded-3xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Injury
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex justify-center items-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment, index) => (
                <AppointmentItem key={index} appointment={appointment} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AppointmentManager
