import { HTMLProps } from "react";

export interface AppointmentListProps {
    patient_name: string;
    mobile_number: string;
    appointment_date: string;
    appointment_time: string;
    doctor: string;
    injury: string;
}

export interface ColumnProps {
    id: number;
    name: string;
    label: string;
    headerStyle?: HTMLProps<HTMLElement>["className"];
    dataStyle?: HTMLProps<HTMLElement>["className"];
    align?: "left" | "center" | "right";
    sort?: boolean;
    renderHeader?: (
      id?: number | string,
      label?: string,
      name?: string
    ) => JSX.Element;
    renderCell?: (params?: AppointmentListProps) => JSX.Element;
  }