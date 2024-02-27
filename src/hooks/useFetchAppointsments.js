import { useEffect, useState } from "react";
import { fetchAppointments } from "../gateways/appointmentGateway";

const useFetchAppointments = () => {
  const [appointmentsData, setAppointmentsData] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchAppointmentsData = async () => {
      setAppointmentsData({ data: [], isLoading: true });

      try {
        const response = await fetchAppointments();

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
