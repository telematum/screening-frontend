export type Appointment = {
  patient_name: string;
  mobile_number: string;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
};

export type AppointmentList = {
  appointments: Appointment[];
};
