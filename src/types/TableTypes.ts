export type TableProps = {
  heading: string;
  dataURL: string;
  tableHeadings: string[];
};

export type Appointment = {
  patient_name: string;
  mobile_number: string;
  injury: string;
  doctor: string;
  appointment_time: string;
  appointment_date: string;
};
