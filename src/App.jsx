import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GiAlliedStar } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { formatDate } from "./utils/formatDate";
import { formatTime } from "./utils/formatTime";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const url =
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";
        let res = await fetch(url);
        if (!res.ok) throw new Error("HTTP error " + res.status);
        let json = await res.json();
        console.log(json);
        setData(json.appointments);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPatients();
  }, []);

  const url = "https://xsgames.co/randomusers/avatar.php?g=male";

  return (
    <main className="overflow-x-auto mx-24 mt-12 border border-slate-200 p-12 max-sm:px-2 max-sm:py-4 rounded-3xl max-xl:mx-4">
      <h1 className="text-2xl font-semibold mb-6 text-slate-500">
        Today's Appointment List
      </h1>
      <table className="w-full mx-auto overflow-hidden">
        <thead>
          <tr className="bg-slate-200 text-left text-xs text-slate-400">
            <th className="px-4 py-6 max-lg:px-2 max-lg:py-2">PATIENTS</th>
            <th className="px-8 max-lg:px-4">DATE</th>
            <th className="px-8 max-lg:px-4">TIME</th>
            <th className="px-8 max-lg:px-4">DOCTOR</th>
            <th className="px-8 max-lg:px-4">INJURY</th>
            <th className="px-8 max-lg:px-4">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 max-sm:text-xs">
          {data.map((patient, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2 max-sm:px-1 flex gap-2 items-center">
                <img
                  src={url}
                  className="h-10 w-10 rounded-full max-sm:hidden"
                />

                <div className="info">
                  <h1 className="font-bold">{patient.patient_name}</h1>
                  <h1 className="text-sm max-sm:text-xs text-gray-400 font-semibold">
                    {patient.mobile_number}
                  </h1>
                </div>
              </td>
              <td className="px-8 py-6 max-lg:px-4 max-lg:py-2 max-sm:px-2">
                <div className="flex gap-2 items-center">
                  <IoCalendarOutline className="text-xl" />
                  {formatDate(patient.appointment_date)}
                </div>
              </td>
              <td className="px-8 max-lg:px-4 max-sm:px-2">
                <div className="flex gap-2 items-center">
                  <CiTimer className="text-xl" />
                  {formatTime(patient.appointment_time)}
                </div>
              </td>
              <td className="px-8 max-lg:px-4 max-sm:px-2">
                <div className="flex gap-2 items-center">
                  <GiAlliedStar className="text-lg text-emerald-400" />
                  <span>{patient.doctor}</span>
                </div>
              </td>
              <td className="px-8 max-lg:px-4 border-slate-400 max-sm:px-2">
                <span className="text-sm font-semibold bg-slate-200 rounded-lg px-4 max-sm:text-xs max-sm:p-1 py-1">
                  {patient.injury}
                </span>
              </td>
              <td className="px-12 max-lg:px-4 max-sm:px-2">
                <div className="flex flex-col gap-1 cursor-pointer">
                  <div className="h-1 w-1 bg-stone-500 rounded-full"></div>
                  <div className="h-1 w-1 bg-stone-500 rounded-full"></div>
                  <div className="h-1 w-1 bg-stone-500 rounded-full"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
