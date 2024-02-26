import { useEffect, useState } from "react";
import CalendarIcon from "./assets/calendar";
import ClockIcon from "./assets/clock";
import MenuIcon from "./assets/menu";
import StarIcon from "./assets/star";
import { API_URL, COLUMNS } from "./constants";
import { formatDate } from "./utils";
import { TPatient, TPatientData } from "./types";

function App() {
  const [patients, setPatients] = useState<TPatient[]>([]);

  const fetchPatients = async () => {
    try {
      const data = await fetch(API_URL);
      const resp: TPatientData = await data.json();
      setPatients(resp?.appointments);
    } catch (error) {
      console.error("Data failed", error);
      alert("Could not load data");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container border border-slate-200 rounded-3xl mx-auto p-6">
        <h3 className="text-xl font-semibold text-slate-500 mb-4">
          Today's Appointment List
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-2xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                {COLUMNS.map((col, idx) => {
                  return (
                    <th
                      key={col + idx}
                      className="px-6 py-6 text-gray-400 text-sm text-left"
                    >
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {patients &&
                patients.length > 0 &&
                patients.map((ele, idx) => {
                  return (
                    <tr
                      key={ele.mobile_number + idx}
                      className={`bg-white ${
                        idx !== patients.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 flex items-center">
                        <div className="h-12 w-12 bg-orange-100 rounded-full mr-3"></div>
                        <div className="text-left">
                          <p className="font-semibold">{ele.patient_name}</p>
                          <p className="text-gray-500 text-sm">
                            {ele.mobile_number}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-x-1">
                          <Icon icon={<CalendarIcon />} />
                          {formatDate(ele.appointment_date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-x-1">
                          <Icon icon={<ClockIcon />} />
                          {ele.appointment_time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        {" "}
                        <div className="flex items-center gap-x-1">
                          <Icon icon={<StarIcon />} />
                          {ele.doctor}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <div className="inline-block bg-slate-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                          {ele.injury}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left ">
                        <span className="cursor-pointer">
                          <Icon icon={<MenuIcon />} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

function Icon({ icon }: { icon: React.ReactNode }) {
  return <div>{icon}</div>;
}
