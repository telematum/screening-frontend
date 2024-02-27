import { Calendar, Clock4, MoreVertical, Star } from "lucide-react";

import { formatDate, hasAppointmentTimePassed } from "../utils/functions.js";
import { tableHeading } from "../constants/constants.js";
import useFetchAppointments from "../hooks/useFetchAppointsments";
import TableSkeletonLoader from "./TableSkeletonLoader.jsx";

import ProfileImage from "./Profileimage";

const AppointmentTable = () => {
  const { appointments, isLoading } = useFetchAppointments();
  return (
    <table className="w-full rounded-2xl overflow-hidden transition-all">
      <thead className="bg-slate-50 text-sm">
        <tr className="h-14">
          {tableHeading.map((heading, i) => (
            <th
              key={heading + i}
              className="text-left px-4 text-neutral-500 font-medium"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <TableSkeletonLoader />
        ) : (
          appointments?.map((appointment, i) => {
            const [first, last] = appointment.patient_name.split(" ");
            const appointmentTimePassed = hasAppointmentTimePassed(
              appointment.appointment_time
            );
            return (
              <tr key={appointment.patient_name + i} className="border-b">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <ProfileImage
                      index={i}
                      first={first.charAt(0)}
                      last={last.charAt(0)}
                    />
                    <div className="grid">
                      <span className="font-medium">
                        {appointment.patient_name}
                      </span>
                      <span className="text-sm text-neutral-500">
                        +{appointment.mobile_number}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Calendar strokeWidth={1.5} size={20} />
                    {formatDate(appointment.appointment_date)}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Clock4 strokeWidth={1.5} size={20} />

                    {appointment.appointment_time}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-full p-1 justify-center flex items-center ${
                        appointmentTimePassed ? "bg-[#fab592]" : "bg-[#66cb9f]"
                      }`}
                    >
                      <Star
                        strokeWidth={1.5}
                        size={15}
                        className="text-white fill-white"
                      />
                    </div>
                    <span>{appointment.doctor}</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-200 text-neutral-600 text-sm font-medium rounded inline-flex px-2 py-0.5">
                      {appointment.injury}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <button className="flex items-center gap-2">
                      <MoreVertical size={20} className="opacity-30" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
