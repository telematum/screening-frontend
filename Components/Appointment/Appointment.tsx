import s from "./Appointment.module.scss";
import AppointmentList from "./AppointmentList";

export default function Appointment(){
    return (
        <div className={s.appointment}>
            <label className={s.label}>Today's Appointment List</label>
            <AppointmentList/>
        </div>
    );
}