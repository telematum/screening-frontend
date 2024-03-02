import React, { useEffect, useState } from "react";
import TableHeader from "./components/TableHeader";
import TableRow from './components/TableRow'
import Heading from "./components/Heading";

function App() {

  const objects = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTION"];

  const [appointments, setAppointments] = useState([]);
  const [selectedDoctorIndices, setSelectedDoctorIndices] = useState([]);

  const toggleCheck = (index) => {
    setSelectedDoctorIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        const result = await response.json();
        setAppointments(result.appointments);
      } catch (error) {
        console.error("Error in fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" overflow-hidden w-[95vw] h-[95vh] border-gray-300 border-[1px] m-auto items-center py-3 px-3 mt-3">
      <Heading/>
      <table className="min-w-full divide-gray-200 px-4 py-4">
        <TableHeader objects={objects} />
        <tbody>
          {appointments.map((appointment, index) => (
            <TableRow
              key={index}
              appointment={appointment}
              index={index}
              selectedDoctorIndices={selectedDoctorIndices}
              toggleCheck={toggleCheck}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
