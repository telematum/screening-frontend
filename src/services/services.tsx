import axios from "axios"

let url = 'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json'

export const appointmentList = async () => {
    const response = await axios.get(url);
    return response
}