import { AppointmentType } from "@/utils/dataType";
import getData from "@/utils/getData";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineTimer, MdStars } from "react-icons/md";

const Final = async () => {
  const { appointments } = await getData();

  return (
    <div className="m-20 p-5 border rounded-[3rem]">
      <h1 className="py-6 px-5 text-3xl font-medium text-gray-600 dark:text-gray-400">
        Todays Appointment list
      </h1>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 px-5 min-w-full inline-block align-middle">
            <div className="border rounded-[2rem] shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="th">
                      Name
                    </th>
                    <th scope="col" className="th">
                      Date
                    </th>
                    <th scope="col" className="th">
                      Time
                    </th>
                    <th scope="col" className="th">
                      Doctor
                    </th>
                    <th scope="col" className="th">
                      Injury
                    </th>
                    <th scope="col" className="th text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {appointments.map((i: AppointmentType, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 td text-gray-800 dark:text-gray-200 flex items-center">
                        <div
                          className={`w-12 h-12  rounded-full mr-4 ${
                            index % 2 ? "bg-gray-400" : "bg-stone-500"
                          }`}
                        ></div>
                        <div className="">
                          <p className="font-bold capitalize">
                            {i.patient_name}
                          </p>
                          <p className=" text-xs text-gray-500 dark:text-gray-400">
                            +{i.mobile_number}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 td ">
                        <FcCalendar className="inline mb-0.5 mr-2 " />
                        {i.appointment_date}
                      </td>
                      <td className="px-6 py-4 td  ">
                        <MdOutlineTimer className="inline mb-0.5 mr-2" />
                        {i.appointment_time}
                      </td>
                      <td className="px-6 py-4 td capitalize">
                        <MdStars
                          className={`inline mb-0.5 mr-2  ${
                            index % 2 ? "text-orange-500" : "text-green-600"
                          }`}
                        />
                        {i.doctor}
                      </td>
                      <td className="px-4 py-3 td">
                        <p className="bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-100 font-bold text-sm max-w-fit p-1 px-2 rounded-lg">
                          {i.injury}
                        </p>
                      </td>
                      <td className="text-center">
                        <FaEllipsisVertical className="inline-block" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
