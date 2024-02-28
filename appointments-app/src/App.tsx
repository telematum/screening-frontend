import "./App.css";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

import { FiCalendar } from "react-icons/fi";
import { PiClockCountdownBold } from "react-icons/pi";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { appointmentType } from "./interface";
import { child, get, ref } from "firebase/database";
import { database } from "./firebase/firebaseConfig";
import Edit from "./components/Edit";
import Title from "./components/Title";
import Delete from "./components/Delete";

const App = () => {
  const [appointments, setAppointments] = useState<appointmentType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [EditFormVisible, setEditFormVisible] = useState<boolean>(false);
  const [appointmentData, setAppointmentData] = useState<appointmentType>();

  const headings: string[] = [
    "patients",
    "date",
    "time",
    "doctor",
    "injury",
    "action",
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    get(child(ref(database), "/appointments"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data: appointmentType[] = snapshot.val();
          const tempArr = Object.keys(data).map((item_id: any) => {
            return {
              ...data[item_id],
              appointment_id: item_id,
            };
          });

          setAppointments([...tempArr]);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setAppointments([]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  };

  const sortHandler = () => {
    let tempAppointments = appointments;
    tempAppointments = tempAppointments.sort((a, b) => {
      if (a.patient_name < b.patient_name) {
        return -1;
      }
      if (a.patient_name > b.patient_name) {
        return 1;
      }
      return 0;
    });
    setAppointments([...tempAppointments]);
  };

  const editButtonClickHandler = (appointment: appointmentType) => {
    setEditFormVisible(true);
    setAppointmentData(appointment);
  };

  return (
    <>
      {EditFormVisible && appointmentData && (
        <Edit
          isEditVisible={() => {
            setEditFormVisible(false);
          }}
          appointmentData={appointmentData}
          getData={getData}
        />
      )}
      <div className="w-11/12 h-4/5 rounded-xl border-slate-500 shadow-md shadow-slate-400 p-4 my-6">
        <Title getData={getData} sortHandler={sortHandler} />
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="rounded-lg overflow-hidden dark:border-gray-700">
                  <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-slate-50">
                      <tr>
                        {headings.map((item) => (
                          <th
                            key={item}
                            scope="col"
                            className="px-6 py-3 w-1/6 text-start text-xs font-bold text-gray-400 uppercase"
                          >
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {isLoading ? (
                        <div
                          className=" flex justify-center items-center animate-spin size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                          role="status"
                          aria-label="loading"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : isError ? (
                        <div>
                          Something went wrong! Appointments data not available.
                        </div>
                      ) : appointments.length === 0 ? (
                        <div>No Appointments available!</div>
                      ) : (
                        appointments.map((item) => (
                          <tr key={item.appointment_id}>
                            <td className="px-6 py-4 w-auto whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 flex justify-center items-center">
                              <div className="w-auto flex justify-center items-center">
                                <div className="rounded-xl bg-red-400 text-2xl text-white uppercase me-2">
                                  jd
                                </div>
                              </div>
                              <div className="w-2/3 flex flex-col justify-center items-start">
                                <span className="font-medium text-black">
                                  {item.patient_name}
                                </span>
                                <span className="font-medium text-sm text-slate-500">
                                  {item.mobile_number}
                                </span>
                              </div>
                            </td>
                            <td className=" px-6 py-4 w-1/6 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">
                              <FiCalendar className="inline" size={18} />{" "}
                              <span>{item.appointment_date}</span>
                            </td>
                            <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200 ">
                              <PiClockCountdownBold
                                className="inline"
                                size={18}
                              />{" "}
                              <span>{item.appointment_time}</span>
                            </td>
                            <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">
                              <MdStars
                                color="#90EE90"
                                className="inline"
                                size={18}
                              />{" "}
                              <span>{item.doctor}</span>
                            </td>
                            <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">
                              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-800 ring-1 ring-inset ring-transparent">
                                {item.injury}
                              </span>
                            </td>
                            <td className="px-6 py-4 w-auto whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200 flex justify-start items-center">
                              <div
                                className="hs-dropdown relative inline-flex"
                                id={`hs-parent-${item.appointment_id}`}
                              >
                                <button
                                  id={`hs-dropdown-${item.appointment_id}`}
                                  type="button"
                                  className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  onClick={() => {
                                    const dropdown = new window.HSDropdown(
                                      document.querySelector(
                                        `#hs-parent-${item.appointment_id}`
                                      )
                                    );
                                    dropdown.open();
                                  }}
                                >
                                  <BsThreeDotsVertical />
                                </button>

                                <div
                                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-100 w-56 hidden absolute z-50 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                  aria-labelledby={`hs-dropdown-${item.appointment_id}`}
                                  id={`hs-${item.appointment_id}`}
                                >
                                  <a
                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-blue-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                                    href="#"
                                    onClick={() => {
                                      editButtonClickHandler(item);
                                    }}
                                  >
                                    <FaEdit size={20} /> EDIT
                                  </a>
                                  <Delete
                                    getData={getData}
                                    appointment_id={item.appointment_id}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
