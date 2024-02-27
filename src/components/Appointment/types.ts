export type appointmentDataTypes = {
  patient_name: string;
  mobile_number: string;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
};


export type appointmentAPIResponseType = {
  appointments: appointmentDataTypes[];
};