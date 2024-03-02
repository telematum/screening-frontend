import axios from 'axios';

// to fetch the data from the API
export const fetchPatientData = async () => {

    // usually we store url's in the environment variables, if it contains the secret keys
    const URL = `https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json`;

    // make a get request to fetch the data 
    return axios.get(URL).then(response => {

        return response?.data?.appointments;
    })
}