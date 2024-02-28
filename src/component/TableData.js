import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

export function TableData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
      .then((response) => {
        setData(response.data.appointments);
      });
  }, []);

  if (!data) return null;

  // console.log(data.appointments,"datas")

  return (
    <>
      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-4">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-gray-400">
              Today's Appointment List
            </h2>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-6 text-xs font-bold tracking-wider text-left text-gray-400 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Patients
                    </th>
                    <th className="px-5 py-6 text-xs font-bold tracking-wider text-left text-gray-400 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Date
                    </th>
                    <th className="px-5 py-6 text-xs font-bold tracking-wider text-left text-gray-400 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Time
                    </th>
                    <th className="px-5 py-6 text-xs font-bold tracking-wider text-left text-gray-400 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Doctor
                    </th>
                    <th className="px-5 py-6 text-xs font-bold tracking-wider text-left text-gray-400 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Injury
                    </th>
                    <th className="px-5 py-3 text-xs font-bold tracking-wider text-left text-gray-400 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((element,index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-black/30">
                            <p className="mb-1 text-2xl font-bold text-center text-white">{element?.patient_name.substring(0,1)}</p>
                          </div>
                          <div className="ml-3">
                            <p className="font-bold text-gray-900 whitespace-no-wrap ">
                              {element.patient_name}
                            </p>
                            <p className="py-1 text-xs font-light text-gray-600 whitespace-no-wrap">
                              {element.mobile_number}
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
                              {dayjs(element.appointment_date).format('DD MMM, YYYY')}
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
                              {element.appointment_time}
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
                              {element.doctor}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-gray-200 rounded-lg opacity-50 "
                          ></span>
                          <span className="relative">{element.injury}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 text-2xl bg-white border-b border-gray-200">
                        :
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}