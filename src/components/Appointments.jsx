import {useEffect,useState } from "react";
import Appointment from "./Appointment"
import { fetchAppointments } from "../api/fetchAppointments";
import ErrorComponent from "./ErrorComponent";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(false)
    const appointmentTableHeader = ["Patients", "Date", "Time", "Doctor", "Injury", "Action"]

    useEffect(() => {
        fetchAppointments()
        .then((appointments) => setAppointments(appointments))
        .catch(() => setError(true))
    },[])
    
    return (
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            {error ? <ErrorComponent /> :
            <div class="rounded-lg overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-gray-50">
                  <tr>
                      {appointmentTableHeader.map((header) => {
                              return <th key={header} className="px-6 py-6 text-start text-xs font-bold text-gray-400 uppercase">{header}</th>                    
                          })}
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment,index) => <Appointment key={index} {...appointment}/>)}
                </tbody>
              </table>
            </div>
          }
          </div>
        </div>
      </div>
    )
}

export default Appointments