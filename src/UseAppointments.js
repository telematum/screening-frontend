import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function UseAppointments() {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = useCallback(() => {
    const url = `https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json`;
    axios
      .get(url, "GET")
      .then((res) => {
        setAppointments(res?.data?.appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    appointments,
  };
}
