// Import necessary hooks and components
import { useState, useEffect } from "react";
import PatientList from "./PatientList";

// Define the DisplayData component
function DisplayData() {
 // State to hold the patient data
 const [patientData, setPatientData] = useState([]);

 // useEffect hook to fetch patient data when the component mounts
 useEffect(() => {
    // Define an async function to fetch patient data
    const fetchPatientData = async () => {
      // Fetch data from the provided URL
      const response = await fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // Parse the response as JSON
      const data = await response.json();
      // Transform the data to match the expected structure
      const transformedData = data.appointments.map((patients, index) => {
        return {
          id: index,
          name: patients.patient_name,
          mobile: patients.mobile_number,
          date: patients.appointment_date,
          time: patients.appointment_time,
          doctor: patients.doctor,
          injury: patients.injury,
        };
      });
      // Update the state with the transformed data
      setPatientData(transformedData);
      // Uncomment the following line to log the transformed data
      // console.log(transformedData);
    };
    // Call the fetchPatientData function and catch any errors
    fetchPatientData().catch((error) => {
      console.log(error.message);
    });
 }, []); // Empty dependency array means this effect runs once on mount

 // Return the JSX for rendering the component
 return (
    <table className="w-[1128px] mt-3">
      <thead className="flex py-[10px] px-3 rounded bg-[#F2F2F2]">
        <tr className="flex gap-10 w-full">
          {/* Table headers */}
          <th className="flex flex-1 font-px-regular text-[14px] font-medium leading-5">
            Patients
          </th>
          <th className="flex flex-1 justify-center gap-4 font-px-regular text-[14px] font-medium leading-5">
            Date
          </th>
          <th className="flex flex-1 justify-center items-center gap-1 font-px-regular text-[14px] font-medium leading-5">
            Time
          </th>
          <th className="flex flex-1 justify-center items-center gap-1 font-px-regular text-[14px] font-medium leading-5">
            Doctor
          </th>
          <th className="flex flex-1 justify-end items-center gap-1 font-px-regular text-[14px] font-medium leading-5">
            Injury
          </th>
          <th className="flex flex-1 justify-end items-center gap-1 font-px-regular text-[14px] font-medium leading-5">
            Action
          </th>
        </tr>
      </thead>
      {/* Render the PatientList component with the fetched patient data */}
      <PatientList patientData={patientData} />
    </table>
 );
}

// Export the DisplayData component
export default DisplayData;
