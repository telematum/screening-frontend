"use client";
import React, { useEffect, useState } from "react";
import AppointmentTable from "@/components/appointment-table";
import { Appointment } from "@/components/appointment-table/row";

interface ApiResponse {
  appointments: Appointment[];
}

const URL =
  "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

const AppointmentContainer: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  useEffect(() => {
    const fetchAppoinments = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: ApiResponse = await response.json();
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppoinments();
  }, []);

  return appointments ? <AppointmentTable data={appointments} /> : null;
};

export default AppointmentContainer;
