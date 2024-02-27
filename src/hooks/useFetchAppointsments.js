import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAppointments = () => {
  const [appointmentsData, setAppointmentsData] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchAppointmentsData = async () => {
      setAppointmentsData({ data: [], isLoading: true });

      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );

        setAppointmentsData({
          data: response?.data?.appointments || [],
          isLoading: false,
        });
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setAppointmentsData({ data: [], isLoading: false });
      }
    };
    fetchAppointmentsData();
  }, []);

  return {
    isLoading: appointmentsData.isLoading,
    appointments: appointmentsData.data,
  };
};

export default useFetchAppointments;
