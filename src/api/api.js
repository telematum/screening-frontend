import { BASE_URL } from "./config";

export const getAppointmentList = () => {
  return fetch(
    BASE_URL +
      "telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
  );
};
