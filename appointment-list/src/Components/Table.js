import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";

const Table = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      const data = await response.json();
      setAppointments(data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const tableHeadData = [
    "PATIENTS",
    "DATE",
    "TIME",
    "DOCTOR",
    "INJURY",
    "ACTION",
  ];
  return (
    <>
      <div>
        <table className=" w-full ">
          <thead>
            <tr className="bg-[#fafafb]  text-gray-400 pl-4 ">
              {tableHeadData.map((tableHeader, index) => {
                return (
                  <th
                    // className="text-left py-4 rounded-lg ml-2"
                    className={`text-left py-4 px-2 ml-2 
                    ${index === 0 ? "  rounded-tl-lg" : ""} 
                    ${
                      index === tableHeadData.length - 1
                        ? "  rounded-tr-lg"
                        : ""
                    }`}
                    key={tableHeader}
                  >
                    {tableHeader}
                  </th>
                );
              })}
            </tr>
          </thead>
          <TableBody tableData={appointments} />
        </table>
      </div>
    </>
  );
};

export default Table;
