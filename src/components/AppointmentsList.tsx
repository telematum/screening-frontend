import getAppointments from "@api/getAppointments";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarDays, Clock4, MoreVertical, Star } from "lucide-react";
import Avatar from "@components/Avatar";
import { cn } from "@/utils";

export default function AppointmentsList() {
  const appointmentsQuery = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });

  return (
    <div className="border rounded-3xl p-8 w-full max-w-7xl mx-auto bg-white shadow-sm">
      <h1 className="text-xl mb-6 text-neutral-500 font-bold">
        Today&apos;s Appointment List
      </h1>
      <table className="w-full rounded-2xl overflow-hidden">
        <thead className="bg-slate-50 text-sm">
          <tr className="h-14">
            <th className="text-left px-4 font-normal text-neutral-500">
              PATIENTS
            </th>
            <th className="text-left px-4 font-normal text-neutral-500">
              DATE
            </th>
            <th className="text-left px-4 font-normal text-neutral-500">
              TIME
            </th>
            <th className="text-left px-4 font-normal text-neutral-500">
              DOCTOR
            </th>
            <th className="text-left px-4 font-normal text-neutral-500">
              INJURY
            </th>
            <th className="text-center px-4 font-normal text-neutral-500">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {appointmentsQuery.data?.map((appointment) => (
            <tr key={appointment.mobile_number} className="border-b">
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <Avatar
                    firstName={appointment.patient_name.split(" ")[0]}
                    lastName={appointment.patient_name.split(" ")[1]}
                  />
                  <div className="grid">
                    <span className="font-medium">
                      {appointment.patient_name}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {appointment.mobile_number}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-neutral-500" />
                  {format(
                    new Date(appointment.appointment_date),
                    "dd MMM yyyy"
                  )}
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <Clock4 className="w-4 h-4 text-neutral-500" />
                  {appointment.appointment_time}
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <div
                    className={cn("rounded-full p-1 bg-green-400", {
                      "bg-orange-400": Math.random() >= 0.4,
                    })}
                  >
                    <Star className="h-4 w-4 text-white fill-white" />
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
                    <MoreVertical className="text-neutral-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
