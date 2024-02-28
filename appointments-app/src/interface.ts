import { IStaticMethods } from "preline";

export interface appointmentType {
  appointment_id?: string;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
  mobile_number: string;
  patient_name: string;
}

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSDropdown: any;
    HSOverlay: any;
  }
}
