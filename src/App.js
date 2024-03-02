import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import dayjs from "dayjs";
import randomcolor from "randomcolor";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let url =
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";
    let response = await axios({
      method: "get",
      url: url,
    });
    setData(response.data.appointments);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="flex flex-col">
      <div> {console.log("response", data)}</div>

      <div className="shadow-lg  m-10 rounded-3xl p-10 overflow-x-auto border">
        <p className="font-semibold text-xl text-gray-500 ">
          {" "}
          Today's Appointment List{" "}
        </p>
        <table className="min-w-full  divide-gray-200 dark:divide-gray-700 mt-4 shadow-lg  rounded-3xl">
          <thead className="bg-gray-50 dark:bg-gray-700 rounded-3xl">
            <tr>
              <th className="px-9 py-5 uppercase text-gray-400 text-sm text-left">
                Patients
              </th>
              <th className="px-9 py-5 uppercase text-gray-400 text-sm text-left">
                Date
              </th>
              <th className="px-9 py-5 uppercase text-gray-400 text-sm text-left">
                Time
              </th>
              <th className="px-9 py-5 uppercase text-gray-400 text-sm text-left">
                Doctor
              </th>
              <th className="px-9 py-5 uppercase text-gray-400 text-sm text-left">
                Injury
              </th>
              <th className="px-1 py-5 uppercase text-gray-400 text-sm text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((attribute, index) => (
              <tr key={index}>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex">
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-black/30"
                      style={{ backgroundColor: randomcolor() }}
                    >
                      <p className="mb-1 text-2xl font-bold text-center text-white">
                        {attribute?.patient_name.substring(0, 1)}
                      </p>
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-gray-900 whitespace-no-wrap ">
                        {attribute.patient_name}
                      </p>
                      <p className="py-1 text-xs font-light text-gray-600 whitespace-no-wrap">
                        {attribute.mobile_number}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex">
                    <div className="flex-shrink-0 w-5 h-5">
                      <img
                        src="https://img.icons8.com/material-two-tone/24/calendar--v1.png"
                        alt="calendar--v1"
                      />
                    </div>
                    <div className="ml-1">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {dayjs(attribute.appointment_date).format(
                          "DD MMM YYYY"
                        )}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5">
                      <img
                        src="https://img.icons8.com/windows/20/clock--v1.png"
                        alt="clock--v1"
                      />
                    </div>
                    <div className="ml-1">
                      <p className="text-gray-900 whitespace-no-wrap ">
                        {attribute.appointment_time}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex">
                    <div className="flex-shrink-0 w-5 h-5">
                      <img
                        src="https://img.icons8.com/ios-filled/50/40C057/rating-circled.png"
                        alt="rating-circled"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap ">
                        {attribute.doctor}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 ">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-black-900">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-blue-200 rounded-lg opacity-50 px-2 py-1 "
                    ></span>
                    <span className="relative">{attribute.injury}</span>
                  </span>
                </td>
                <td className="px-5 py-5 text-2xl bg-white border-b border-gray-200">
                  &#8942;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
