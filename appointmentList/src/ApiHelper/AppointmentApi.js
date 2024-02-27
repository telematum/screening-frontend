const API = "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"

export const getAppointmentList = (userId, token, category) => {
    return fetch(`${API}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };