import React, { useEffect, useState } from "react";
import { CALENDER, STAR, TIME } from "./assets";
import { APPOINTMENT_LIST_API, strings } from "./constants";

export default function AppointmentList() {
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(APPOINTMENT_LIST_API);
    const data = await response.json();
    setDisplayData(data?.appointments);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const generateColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }

    return color;
  };

  return (
    <div className="border border-black-50 rounded-2xl p-5  m-20">
      <h1
        style={{ marginLeft: "-1050px" }}
        className="font-bold mb-4 text-gray-500"
      >
        Todays Appointment List
      </h1>

      <div className="border  rounded-2xl border-collapse ">
        <table className="w-full ">
          <thead className="relative">
            <tr className="text-left bg bg-gray-50  rounded-2xl text-gray-500">
              <th className="m-3 p-3 ">{strings.patient}</th>
              <th>{strings.date}</th>
              <th>{strings.time}</th>
              <th>{strings.doctor}</th>
              <th>{strings.injury}</th>
              <th>{strings.action}</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="bg bg-gray-200 h-0.25" colSpan="6"></td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center justify-start  ml-4 ">
                      <div
                        className="w-8 h-8 bg-black rounded-full"
                        style={{
                          backgroundColor: generateColor(row.patient_name),
                        }}
                      ></div>
                      <div className="ml-3 ">
                        <h1 className="font font-bold">{row.patient_name}</h1>
                        {row.mobile_number}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-start">
                      <img
                        className="h-4 w-4 mr-1"
                        src={CALENDER}
                        alt="calendar"
                      />
                      {formatDate(row.appointment_date)}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-start">
                      <img className="h-3 w-3 mr-1" src={TIME} alt="calendar" />
                      {row.appointment_time.slice(0, -3)}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-start">
                      <img className="h-3 w-3 mr-1" src={STAR} alt="star" />
                      {row.doctor}
                    </div>
                  </td>
                  <td className="max-w-12">
                    <h1 className="flex items-center justify-center border border-blue-200 rounded-md bg-blue-200 text-gray-600 ">
                      {row.injury}
                    </h1>
                  </td>
                  <td className="font-bold">{"⁝"}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
