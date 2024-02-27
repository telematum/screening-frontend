import { useEffect, useState } from "react";
import { appointmentsEndpoint, tableHead } from "../utils/constants";
import axios from "axios";
import TableList from "../ui_components/TableList";
import { TAppointment } from "../ui_components/types";

function AppointmentTable() {
  const [appointments, setAppointments] = useState<Array<TAppointment>>([]);
  const fetchAppointments = async () => {
    try {
      const result = await axios.get(appointmentsEndpoint);
      setAppointments(result.data.appointments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="border-2 border-[#f5f5f7] p-4 sm:p-8 rounded-[35px]">
      <p className="text-[#7D7D9E] font-medium sm:text-2xl">
        Today's Appointment List
      </p>
      {/* tablet container */}
      <div className=" overflow-auto">
        <div className="min-w-[1024px]">
          {/* table head */}
          <ul className="custom-grid gap-3 bg-[#FAFAFB] p-6 rounded-t-3xl mt-5">
            {tableHead.map((head, i) => {
              return (
                <li
                  key={i}
                  className={`uppercase text-xs sm:text-sm font-semibold tracking-wide text-[#8D9AAD] ${
                    i === tableHead.length - 1 && "text-center"
                  }`}
                >
                  {head}
                </li>
              );
            })}
          </ul>
          {/* table list */}
          {appointments.map((appointment, i) => {
            return <TableList {...appointment} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AppointmentTable;
