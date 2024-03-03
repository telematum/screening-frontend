import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { changeTimeFormat } from "./utils/helper";
import { MdStars } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      let a = await axios.get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      console.log(a.data.appointments);
      setAppointments(a.data.appointments);
    }
    getAppointments();
  }, []);

  return (
    <>
      <div className="m-6">
        <h3 className="mb-5 text-3xl text-slate-600">Today's Appointment List</h3>

        <table className="border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-300 p-3 text-slate-400 text-xl">Patients</th>
              <th className="border border-slate-300 p-3 text-slate-400 text-xl">Date</th>
              <th className="border border-slate-300 p-3 text-slate-400 text-xl">Time</th>
              <th className="border border-slate-300 p-3 text-slate-400 text-xl">Doctor</th>
              <th className="border border-slate-300 p-3 text-slate-400 text-xl">Injury</th>
              <th className="border border-slate-300 p-3 text-slate-400 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((x) => {
              return (
                <tr key={x.mobile_number}>
                  <td className="border border-slate-300 p-2">
                    <div className="flex items-center  ">
                      <span className="p-1">
                        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                          <img
                            src="http://source.unsplash.com/100x100/?boy"
                            class="rounded-full"
                          />
                        </div>
                      </span>
                      <div className="flex flex-col">
                         <span className="px-1 text-slate-700 text-lg">{x.patient_name}</span>
                         <span className="px-1 text text-slate-400 text-sm">{x.mobile_number}</span>
                      </div>                      
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex content-center text-slate-500">
                      <span className="p-1">
                        <SlCalender
                          style={{
                            marginTop: "3px",
                            fontSize: "1.2rem",
                          }}
                        />
                      </span>
                      <span className="p-1">
                        {changeTimeFormat(x.appointment_date)}
                      </span>
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex content-center text-slate-500 ">
                      <span className="p-1">
                        <GoClock
                          style={{
                            marginTop: "3px",
                            fontSize: "1.2rem",
                          }}
                        />
                      </span>
                      <span className="p-1">{x.appointment_time}</span>
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex content-center  ">
                      <span className="p-1">
                        <MdStars
                          style={{
                            color: `${
                              x.doctor.length % 2 == 0 ? "orange" : "green"
                            }`,
                            marginTop: "3px",
                            fontSize: "1.2rem",
                          }}
                        />
                      </span>
                      <span className="p-1 text-slate-500">{x.doctor}</span>
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex content-center  ">
                      <span className="bg-slate-300 text-slate-600 p-1 rounded-md">
                        {x.injury}
                      </span>
                    </div>
                  </td>
                  <td className="border border-slate-300 p-2">
                  <div className="flex content-center justify-center ">
                      <span className="p-1">
                        <button>
                        <CiMenuKebab
                          style={{
                            marginTop: "3px",
                            fontSize: "1.2rem",
                          }}
                        />
                        </button>
                      </span>
                     
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
