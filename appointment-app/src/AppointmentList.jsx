import React, { useState, useEffect } from "react";
import avatar from "./avatar.jpg";
const AppointmentList = () => {
  const [appointMentList, setAppointMentList] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        const { appointments } = res;
        setAppointMentList(appointments);
      });
  }, []);
  return (
    <>
      <div className="ml-4 min-h-14 text-xl font-extrabold text-slate-500	">
        Today's Appointment List
      </div>
      <table className="ml-4 size-11/12 border border-x-0 rounded-md shadow-sm">
        <thead className="border border-x-0 border-separate  bg-slate-100">
          <tr className="border-separate ">
            <th className="text-slate-400	leading-10	text-sm min-w-90 text-start p-6">
              PATIENTS
            </th>
            <th className="text-slate-400	leading-10	text-sm min-w-90 text-start p-6">
              DATE
            </th>
            <th className="text-slate-400	leading-10	text-sm min-w-200 text-start p-6">
              TIME
            </th>
            <th className="text-slate-400	leading-10	text-sm min-w-90 text-start p-6">
              DOCTOR
            </th>
            <th className="text-slate-400	leading-10	text-sm min-w-90 text-start p-6">
              INJURY
            </th>
            <th className="text-slate-400	leading-10	text-sm min-w-90 text-start p-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {appointMentList.map((appointment) => (
            <tr className="border border-x-0   h-22">
              <td className="w-70  flex  flex-row justify-center ">
                <div className="h-12 w-12  basis-1/6  flex-none self-center ">
                  <img className="h-12 w-12 border rounded-full" src={avatar} />
                </div>
                <div className="w-70 basis-3/4  self-center text-start ml-2">
                  <div className="font-bold	">{appointment.patient_name}</div>
                  <div className="text-slate-500 ">
                    +{appointment.mobile_number}
                  </div>
                </div>
              </td>
              <td className="w-200 text-center">
                <span className="material-symbols-outlined fill-slate-600">
                  event
                </span>{" "}
                <span className="text-slate-600 font-medium ml-2">
                  {appointment.appointment_date}
                </span>
              </td>
              <td className="w-100 text-center ">
                <span class="material-symbols-outlined">schedule</span>
                <span className="text-slate-600 font-medium ml-2">
                  {appointment.appointment_time}
                </span>
              </td>
              <td className="w-70  text-slate-600 font-medium">
                <span class="material-symbols-outlined text-center">stars</span>
                <span className="text-center ml-2">{appointment.doctor}</span>
              </td>
              <td className="w-70  text-slate-600 font-medium">
                <div className="h-8 max-w-fit bg-indigo-300 border border-1 rounded text-start">
                  {appointment.injury}
                </div>
              </td>
              <td className="w-70 text-center text-slate-600 font-medium">
                <span class="material-symbols-outlined">more_vert</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AppointmentList;
