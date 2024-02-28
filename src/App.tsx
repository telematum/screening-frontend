import { useEffect, useState } from "react";
import Table from "./components/Table";
import { APPOINTMENT_ENDPOINT } from "./constants/api";
import { Appointment, AppointmentList } from "./types/appointments";
import Badge from "./components/Badge";

function App() {
  const [appointmentList, setAppointmentList] = useState<
    null | Appointment[]
  >();

  async function getTodayAppointmentList() {
    const res = await fetch(APPOINTMENT_ENDPOINT);
    const resJson: AppointmentList = await res.json();
    setAppointmentList(resJson.appointments);
  }

  useEffect(() => {
    getTodayAppointmentList();
  }, []);

  const headers = ["patients", "date", "time", "doctor", "injury", "action"];

  return (
    <div className="shadow-sm border border-gray-100 rounded-xl px-6 py-4 space-y-4 mx-auto w-full">
      <h2 className="text-lg text-gray-500 font-medium">
        Today's Appointment List
      </h2>

      <Table
        headers={headers}
        rows={appointmentList?.map((it) => {
          return {
            patients: (
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://source.unsplash.com/user/erondu"
                    alt="user profile picture"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm">
                    <h3 className="font-medium text-gray-900  leading-5">
                      {it.patient_name}
                    </h3>
                    <p className="text-gray-500">{it.mobile_number}</p>
                  </div>
                </div>
              </div>
            ),

            date: <Badge label={it.appointment_date} icon="calendarIcon" />,

            time: <Badge label={it.appointment_time} icon="clockIcon" />,

            doctor: <Badge label={it.doctor} icon="starIcon" />,

            injury: (
              <Badge label={it.injury} className="bg-blue-200 rounded-lg p-2" />
            ),

            action: <Badge icon="dotsVerticalIcon" />,
          };
        })}
      />
    </div>
  );
}

export default App;
