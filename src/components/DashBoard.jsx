import { useState, useEffect } from "react";

import TableEntry from "./TableEntry";

const DashBoard = () => {
  const headings = ["Paitents", "Date", "Time", "Doctor", "Injury", "Action"];

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAppointments(data.appointments);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen h-full bg-white flex  items-center justify-center py-10">
        <div className="lg:min-w-[1022px] xl:min-w-[1230px] 2xl:min-w-[1530px]">
          <div className="w-full  px-2 max-w-[453px] mx-auto">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Today's Appointment List
            </h3>
          </div>
          <div class="flex items-center justify-center">
            <div class="">
              <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full text-sm text-left sm:inline-table flex flex-row sm:bg-white  overflow-hidden">
                  <thead className="bg-gray-50 text-gray-600 border-b">
                    {headings.map((item, index) => {
                      return (
                        <tr
                          className={`flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ${
                            index == 0 ? "sm:flex" : "sm:hidden"
                          }`}
                          key={index}
                        >
                          <th className="pt-5 pb-3 px-6 sm:py-3">Patients</th>
                          <th className="py-4 px-6 sm:py-3">Date</th>
                          <th className="py-4 px-6 sm:py-3">Time</th>
                          <th className="py-4 px-6 sm:py-3">Doctor</th>
                          <th className="py-4 px-6 sm:py-3">Injury</th>
                          <th className="pb-3.5 pt-3 px-6 sm:py-3">Action</th>
                        </tr>
                      );
                    })}
                  </thead>
                  <tbody className="flex-1 sm:flex-none text-gray-600 divide-y">
                    {appointments.map((item, idx) => (
                      <TableEntry key={idx} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
