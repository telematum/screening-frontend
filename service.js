export const fetchData = async () => {
  try {
    const jsonData = await fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    );
    const patientList = await jsonData.json();
    return patientList.appointments;
  } catch (err) {
    alert(err);
  }
};
