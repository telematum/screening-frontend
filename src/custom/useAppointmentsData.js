import { useState, useEffect } from "react";

const useAppointmentsData = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        const data = await response.json();
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => setAppointments([]);
  }, []);

  return { appointments };
};

export default useAppointmentsData;
