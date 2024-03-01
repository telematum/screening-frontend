import React, { useEffect, useState } from "react";
import { data_URL } from "../constant";
import Shimmer from "./Shimmer";
import { BsClockHistory, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const Appointment = () => {
  const title = ["Patients", "Date", "Time", "Doctor", "Injury", "Action"];
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(data_URL);
    const jsonData = await data.json();
    setPatientData(jsonData);
  };

  if (patientData.length === 0) return <Shimmer />;
  console.log(patientData);

  return (
    <div className="relative overflow-x-auto px-4 sm:px-2">
      <table className=" shadow-md dark:shadow-[0_10px_15px_-3px_#0B0C0E] w-[70%] sm:w-[80%] md:w-[90%] my-6 sm:my-10 mx-auto text-xs lg:text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-xs sm:text-sm lg:text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {title.map((title, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patientData &&
            patientData.appointments?.map((patient) => (
              <tr
                key={patient.patient_name}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="flex items-center gap-1 sm:gap-2 md:gap-4 px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <span
                    className={`w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full`}
                    style={{
                      backgroundColor:
                        "#" +
                        ((Math.random() * 0xffffff) << 0)
                          .toString(16)
                          .padStart(6, "0"),
                    }}
                  ></span>
                  <div className="flex flex-col">
                    <p>{patient.patient_name}</p>
                    <p className="font-normal text-gray-500 dark:text-gray-400">
                      {patient.mobile_number}
                    </p>
                  </div>
                </th>

                <td className="px-2 md:px-6  py-4">
                  <div className="flex flex-col md:flex-row items-center gap-1">
                    <span className="">
                      <FaRegCalendarCheck />
                    </span>
                    <p>{patient.appointment_date}</p>
                  </div>
                </td>

                <td className="px-2 md:px-6 py-4">
                  <div className="flex flex-col md:flex-row items-center gap-1">
                    <span>
                      <BsClockHistory />
                    </span>
                    <p>{patient.appointment_time}</p>
                  </div>
                </td>
                <td className="px-2 md:px-6  py-4">
                  <div className="flex flex-row items-center gap-1">
                    <span
                      className={` p-[2px] md:p-1 rounded-full ${
                        patient.doctor.includes("Patel", "Gracia")
                          ? `bg-yellow-500`
                          : `bg-green-600`
                      }`}
                    >
                      <IoStar fill="white" />
                    </span>
                    <p>{patient.doctor}</p>
                  </div>
                </td>
                <td className="px-2 md:px-6 py-4">
                  <p className="bg-[#E4ECF7] dark:bg-slate-950 text-[#5a5f76] dark:text-gray-300 font-medium w-max px-2 py-1 rounded-md">
                    {patient.injury}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;
