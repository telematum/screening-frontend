import s from "./Appointment.module.scss";
import AppointmentList from "./AppointmentList";

const url = 'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json'

async function getAppointmentList() {
    const res = await fetch(url)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function  Appointment(){
    const appointMentList: AppointmentsResponse = await getAppointmentList()
    return (
        <div className={s.appointment}>
            <label className={s.label}>Today&apos;s Appointment List</label>
            <AppointmentList list={appointMentList.appointments}/>
        </div>
    );
}

export type Appointment = {
    patient_name: string;
    mobile_number: string;
    appointment_date: string;
    appointment_time: string;
    doctor: string;
    injury: string;
  }
  

export type AppointmentsResponse = {
appointments: Appointment[];
}
  