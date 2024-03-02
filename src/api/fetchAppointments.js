import axios from "axios";

export const fetchAppointments = async() => {
    try{
        const response = await axios.get("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
        return response.data.appointments ?? []
    }
    catch(error){
        throw Error("Error occured while fetching appointments")
    }
}
