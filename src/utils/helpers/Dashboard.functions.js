import { dashboardConstants } from "../constants/Dashboard.constant";

export const fetchUserData = async () => {
    const res = await fetch(dashboardConstants.FETCH_USER_DATA_URL, {
      method: 'GET',
    });
    const result = await res.json();
    return result;
  }