import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentList from "../src/Appointment";
import "../src/index.css";

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-lg border border-white shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-4 text-purple-400">
          Today's Appointment List
        </h2>
        <div className="mb-4">
          <AppointmentList appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default App;
