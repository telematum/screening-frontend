import React from "react";
import { useEffect, useState } from "react";
import { PiClockCountdown } from "react-icons/pi"; ///importing all the icons from react icon library
import { HiOutlineDotsVertical } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";

export const Table = () => {
  const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-violet-300",
  ];

  const getRandomColor = (array) => {
    ///to get random patient icon color
    return array[Math.floor(Math.random() * array.length)];
  };

  const [users, setUsers] = useState([]); ///setting the data into a state variable
  useEffect(() => {
    ///to fetch the data from the api
    return async function as() {
      const response = await fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      const data = await response.json();
      setUsers(data.appointments);
    };
  }, []);

  function formatDate(dateString) {
    /// to format raw dates into a string format
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {users.length > 0 ? (
        <div className="font-sans py-4 px-4 w-fit h-fit  rounded-xl flex flex-col gap-3 border-[1px] border-opacity-50">
          <h1 className="text-xl font-bold text-zinc-600">
            Today's Appointment List
          </h1>
          <table className=" rounded-xl p-[8vh] overflow-hidden">
            <thead className="bg-zinc-100 ">
              <tr className="text-left ">
                <th className="py-6 px-3 font-bold text-zinc-500 text-sm">
                  PATIENTS
                </th>
                <th className="text-zinc-500 text-sm">DATE</th>
                <th className="text-zinc-500 text-sm">TIME</th>
                <th className="text-zinc-500 text-sm">DOCTOR</th>
                <th className="text-zinc-500 text-sm">INJURY</th>
                <th className="text-zinc-500 text-sm">ACTION</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map(
                (
                  data,
                  index ///mapping through every data inside the json object and making each dynamic raws from it.
                ) => (
                  <tr className="border-t-[1px]  border-opacity-50">
                    <td className="flex gap-2 pr-[10vh] pt-2 px-3  pb-2">
                      <div
                        className={`w-[40px] h-[40px] ${getRandomColor(
                          colors
                        )} rounded-full`}
                      ></div>
                      <div>
                        <h1 className="font-bold text-zinc-700">
                          {data.patient_name}
                        </h1>{" "}
                        <p className="text-xs text-zinc-600">
                          +{data.mobile_number}
                        </p>
                      </div>
                    </td>
                    <td className="pr-[8vh] text-zinc-600 font-semibold">
                      <div className="flex gap-2 items-center">
                        <div>
                          <SlCalender />
                        </div>
                        <div>{formatDate(data.appointment_date)}</div>
                      </div>
                    </td>
                    <td className="pr-[8vh] text-zinc-600">
                      <div className="flex items-center gap-1">
                        <div>
                          <PiClockCountdown />
                        </div>
                        {/* /*removing the AM & PM From the time using Slice Method */}
                        <div className="text-zinc-600 font-semibold">
                          {data.appointment_time.slice(
                            0,
                            data.appointment_time.length - 3
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="flex gap-1 justify-start items-center pr-[8vh] -translate-y-[25%] text-zinc-600">
                      <div
                        className={`w-[20px] h-[20px] ${
                          index < 4 ? "bg-green-200" : "bg-yellow-200"
                        }  rounded-full `}
                      ></div>{" "}
                      <h1 className="text-zinc-600 font-semibold">
                        {data.doctor}
                      </h1>
                    </td>
                    <td className="pr-[8vh] text-zinc-600">
                      <div className="px-3 w-fit py-1 bg-blue-100 rounded-lg flex justify-center items-center">
                        <h1 className="font-bold text-sm">{data.injury}</h1>
                      </div>
                    </td>
                    <td className="pr-[8vh] pl-[2vh] text-2xl text-zinc-400">
                      <HiOutlineDotsVertical />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="font-bold text-4xl">Loading...</h1>
      )}
    </div>
  );
};
