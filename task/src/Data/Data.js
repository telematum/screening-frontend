import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = ({ header, Svgs }) => {
  const { clock, star, action, date, profile } = Svgs;
  const [data, setData] = useState();

  const baseURL =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.appointments);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <table className="w-full h-16">
        <thead className="border-b-2  bg-gray-50">
          <tr>
            {header.map((headers, idx) => (
              <th key={idx} className="p-3 text-sm text-slate-400 text-left">
                <p className="text-slate-400">{headers}</p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="p-3 text-base flex items-center gap-x-3">
                <div className=" h-10 w-10 rounded-full bg-slate-200	 flex items-center pl-2">
                  {profile}
                </div>
                <div>
                  <p className="font-bold">{item.patient_name}</p>
                  <p className="font-light text-slate-500">
                    +{item.mobile_number}
                  </p>
                </div>
              </td>

              <td className="p-3 text-lg ">
                <div className="flex items-center gap-x-3">
                  {date}
                  <p className="font-medium text-slate-500">
                    {item.appointment_date}
                  </p>
                </div>
              </td>

              <td className="p-3 text-lg">
                <div className="flex items-center gap-x-2">
                  {clock}
                  <p className="font-medium text-gray-500">
                    {item.appointment_time}
                  </p>
                </div>
              </td>

              <td className="p-3 text-xl">
                <div className="flex items-center gap-x-3">
                  {star}
                  <p className="font-medium text-gray-500">{item.doctor}</p>
                </div>
              </td>

              <td className="p-3 text-base">
                <div className="inline-flex items-center bg-slate-200	rounded-md px-3 py-1">
                  <p className="font-bold text-slate-500	">{item.injury}</p>
                </div>
              </td>

              <td className="p-3 text-base text-slate-700 ">{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
