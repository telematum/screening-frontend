import axios from "axios";
import { z } from "zod";

const responseSchema = z.object({
  appointments: z.array(
    z.object({
      patient_name: z.string(),
      mobile_number: z.string(),
      appointment_date: z.string(),
      appointment_time: z.string(),
      doctor: z.string(),
      injury: z.string(),
    })
  ),
});

export default async function getAppointments() {
  const response = await axios.get(
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
  );
  try {
    const data = responseSchema.parse(response.data);
    return data.appointments;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
