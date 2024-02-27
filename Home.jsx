import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const imageArray = [
  "/assets/john.jpg",
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
];

const Home = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let respData = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        console.log(respData);
        if (respData && respData.data) {
          setAllData(respData.data);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-12 gap-6 ml-10">
        <h1 className="text-2xl font-bold text-gray-500">
          Today's Appointment List
        </h1>
        <table className="overflow-hidden rounded-3xl w-9/12">
          <thead className="text-left bg-gray-100">
            <tr className="text-sm text-gray-400">
              <th className="px-5 py-5 border-b border-grey-500 ">PATIENTS</th>
              <th className="px-5 py-5 border-b border-grey-500 ">DATE</th>
              <th className="px-5 py-5 border-b border-grey-500 ">TIME</th>
              <th className="px-5 py-5 border-b border-grey-500 ">DOCTOR</th>
              <th className="px-5 py-5 border-b border-grey-500 ">INJURY</th>
              <th className="px-5 py-5 border-b border-grey-500">ACTION</th>
            </tr>
          </thead>
          <tbody className="ml-8">
            {Array.isArray(allData.appointments) &&
            allData.appointments.length > 0 ? (
              allData.appointments.map((value, index) => (
                <tr key={index}>
                  <td className="px-5 py-2 border-b border-grey-500 ">
                    <div className="flex flex-row ">
                      <img
                        src={imageArray[index]}
                        className="w-9 h-9 rounded-full mr-2"
                      />
                      <div className="flex flex-col">
                        <div className="font-bold text-sm mt-0.5">
                          {value.patient_name}
                        </div>
                        <div className="text-xs text-gray-400">
                          +{value.mobile_number}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 border-b border-grey-500 ">
                    <div className="flex flex-row gap-1">
                      <div class="flex items-center justify-center rounded-full w-6 h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          stroke="grey"
                          class="w-4 h-4"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                            stroke-width="2"
                            fill="transparent"
                          />

                          <line
                            x1="7"
                            y1="2"
                            x2="7"
                            y2="6"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <line
                            x1="17"
                            y1="2"
                            x2="17"
                            y2="6"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <line
                            x1="3"
                            y1="10"
                            x2="21"
                            y2="10"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-bold text-gray-500 mt-0.5">
                        {value.appointment_date}
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 border-b border-grey-500 ">
                    <div className="flex flex-row gap-1">
                      <div class="flex items-center justify-center rounded-full w-4 h-4 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          stroke="grey"
                          class="w-5 h-5"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke-width="2"
                            fill="transparent"
                          />

                          <line
                            x1="12"
                            y1="12"
                            x2="12"
                            y2="7"
                            stroke-width="2"
                            stroke-linecap="round"
                          />

                          <line
                            x1="12"
                            y1="12"
                            x2="16"
                            y2="12"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-bold text-gray-500">
                        {" "}
                        {value.appointment_time}
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 border-b border-grey-500 ">
                    <div className="flex flex-row gap-1">
                      {index === 3 || index === 4 ? (
                        <div class="flex items-center justify-center bg-orange-500 rounded-full w-4 h-4 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            stroke="white"
                            class="w-3 h-3"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 2l2.142 6.47h6.716l-5.47 4.885 2.37 6.915-6.558-4.807-6.56 4.807 2.37-6.915L3.142 8.47H9.86L12 2z"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div class="flex items-center justify-center bg-green-500 rounded-full w-4 h-4 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            stroke="white"
                            class="w-3 h-3"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 2l2.142 6.47h6.716l-5.47 4.885 2.37 6.915-6.558-4.807-6.56 4.807 2.37-6.915L3.142 8.47H9.86L12 2z"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="text-sm font-bold text-gray-500">
                        {value.doctor}
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 border-b border-grey-500 ">
                    <div className="text-xs font-bold text-gray-500 inline-block bg-blue-100 p-2 rounded">
                      {value.injury}
                    </div>
                  </td>
                  <td className="px-2 py-2 border-b border-grey-500">
                    <div class="flex items-center justify-center rounded-full w-8 h-8 gap-8  ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="lightgrey"
                        viewBox="0 0 24 24"
                        stroke="lightgrey"
                        class="w-6 h-6"
                      >
                        <circle cx="12" cy="6" r="2" stroke-width="2" />

                        <circle cx="12" cy="12" r="2" stroke-width="2" />
                        <circle cx="12" cy="18" r="2" stroke-width="2" />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
