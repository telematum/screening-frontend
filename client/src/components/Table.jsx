import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";

//function to allocate random colors to the patients
const RandomColor = () => {
  let color = "#";
  const letters = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//function to change date format from "24-02-2024" to "24 Feb 2024"
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const Table = () => {
  const [appointments, setAppointments] = useState([]);

  
  useEffect(() => {
    const requestData = async () => {
      try {
        // sending request to the endpoint using axios
        const response = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        setAppointments(response.data.appointments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    requestData(); //returning the fetched data
  }, []);

  return (
    <div className="overflow-x-auto overflow-y-auto rounded-3xl">
      {/* creating table using the tailwind   */}
      <table className="table-auto min-w-full border rounded-xl  border-white-300 border-transparent md:table-fixed ">
         {/* setting up column headers  */}
        <thead className="bg-gray-100 h">
          <tr>
            <th className="px-6 py-5 text-left text-xs font-small text-gray-500 uppercase tracking-wider">
              PATIENTS
            </th>

            <th className="px-6 py-5 text-left text-xs font-small text-gray-500 uppercase tracking-wider">
              DATE
            </th>
            <th className="px-6 py-5 text-left text-xs font-small text-gray-500 uppercase tracking-wider">
              TIME
            </th>
            <th className="px-6 py-5 text-left text-xs font-small text-gray-500 uppercase tracking-wider">
              DOCTOR
            </th>
            <th className="px-6 py-5 text-left text-xs font-small text-gray-500 uppercase tracking-wider">
              INJURY
            </th>
            <th className="px-6 py-5 text-left text-xs font-small text-gray-500 uppercase tracking-wider">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
           {/* mapping the data fetched from the endpoint to make the table dynamic */}
          {appointments.map((data, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center ">
                  {/* used the random color generator function to generate random colors for every user */}
                  <div
                    className="rounded-full w-9 h-9 mr-2  "
                    style={{ backgroundColor: RandomColor() }}  
                  ></div>
                  <span className="flex items-start flex-col ">
                    <span>{data.patient_name}</span>
                    <span className="text-gray-500 text-sm">
                      +{data.mobile_number}
                    </span>
                  </span>
                </div>
              </td>

              <td className=" text-left whitespace-nowrap p-3">
                <FaCalendarAlt className="inline-block mr-2 " />
                {formatDate(data.appointment_date)}
              </td>
              <td className=" text-left whitespace-nowrap p-3">
                <FaClock className="inline-block mr-2" />
                {data.appointment_time}
              </td>
              <td className=" text-left whitespace-nowrap p-3">
                <FaStar className="inline-block mr-2" />
                {data.doctor}
              </td>
              <td className="  text-left whitespace-nowrap p-3 ">
                <span className="font-medium p-2 text-blue-800 bg-blue-200 rounded-3xl bg-opacity-50">
                  {data.injury}
                </span>
              </td>
              <td className=" text-center whitespace-nowrap p-3">
                <button>
                  <BiDotsVertical className="inline-block mr-2 hover" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
