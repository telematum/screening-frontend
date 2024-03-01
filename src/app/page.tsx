"use client";
import AppointmentTable from "@/components/appointment-table";
import { Appointment } from "@/components/appointment-table/row";
import React, { useEffect, useState } from "react";
const URL =
  "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";
export default function Appointments() {
  const [appointments, setAppointments] = useState<null | Appointment[]>(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((v: any) => {
        setAppointments(v.appointments);
      });
  }, []);
  return (
    <div className="p-8 rounded-2xl border-gray-100 border-2 m-2 ">
      <h1 className="text-gray-500  font-semibold text-lg">
        Today's Appointment List
      </h1>
      {appointments ? <AppointmentTable data={appointments} /> : null}
    </div>
  );
}
