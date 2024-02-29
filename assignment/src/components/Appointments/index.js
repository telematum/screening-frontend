import { useEffect, useState } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

function Appointments() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        const json = await response.json();
        setPatientData(json.appointments);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h2 class="text-xl font-semibold text-gray-500 dark:text-gray-400 py-2 sm:px-4 lg:px-8">
        Today's Appointments List
      </h2>
      <div class="flex flex-col">
        <div>
          <div class="inline-block min-w-full py-2 sm:px-4 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500 bg-neutral-100 uppercase">
                  <tr>
                    <th scope="col" class="px-4 py-4">
                      Patients
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Date
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Time
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Doctor
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Injury
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patientData ? (
                    patientData.map((patient) => {
                      return (
                        <>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-4 py-4 font-medium">
                              <div class="flex space-x-4 flex-shrink-0">
                                <img
                                  src="https://randomuser.me/api/portraits/men/1.jpg"
                                  alt="User Profile Pic"
                                  class="w-10 h-10 rounded-full"
                                />
                                <div>
                                  <div class="font-semibold">
                                    {patient.patient_name}
                                  </div>
                                  <div class="font-light text-sm">
                                    {patient.mobile_number}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <div class="flex space-x-2 flex-shrink-0">
                                <IoCalendarClearOutline size="20" />
                                <div>{patient.appointment_date}</div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <div class="flex space-x-2 flex-shrink-0">
                                <BsClockHistory size="20" />
                                <div>{patient.appointment_time}</div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <div class="flex space-x-2 flex-shrink-0">
                                <MdStars size="20" color={"green"} />
                                <div>{patient.doctor}</div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <span class="px-2 py-1 bg-slate-300 rounded font-normal">
                                {patient.injury}
                              </span>
                            </td>
                            <td class="whitespace-nowrap px-4 py-4">
                              <BsThreeDotsVertical color={"#64748b"} />
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td
                        class="whitespace-nowrap px-4 py-4 font-medium"
                        colSpan={6}
                      >
                        No Appointments Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointments;
