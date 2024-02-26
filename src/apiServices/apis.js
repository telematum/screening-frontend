import axios from "axios";

const baseUrl =
  "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

export const getTableData = async () => {
  try {
    const result = await axios.get(`${baseUrl}`);
    return result;
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};
