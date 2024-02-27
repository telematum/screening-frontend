import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../Constant/Constant";
import { COLUMNS_HEADER } from "../Constant/Column";

export default function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data.appointments);
        setData(res.data.appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full flex justify-center overflow-x-auto p-5 shadow-xl">
      <table style={{ width: "100%" }} className="overflow-hidden ">
        <thead className="border-b-2 border-gray-100">
          {" "}
          <tr>
            {COLUMNS_HEADER.map((itr, index) => (
              <th key={index}>{itr}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((itr, index) => (
            <tr key={index}>
              {" "}
              <td className="p-3 text-sm text-gray-700 flex items-center gap-x-2 whitespace-nowrap">
                <div className="inline-block h-10 w-32 rounded-full bg-orange-500"></div>
                <div>
                  <p className="font-bold">{itr.patient_name}</p>
                  <p className="font-light">{itr.mobile_number}</p>
                </div>
              </td>
              <td>{itr.appointment_date}</td>
              <td>{itr.appointment_time}</td>
              <td>{itr.doctor}</td>
              <td>{itr.injury}</td>
              <td>{itr.mobile_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ​
    </div>
  );
}
