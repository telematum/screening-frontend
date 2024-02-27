import "./App.css";
import { FaSortAmountDown } from "react-icons/fa";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";

const App = () => {
  return (
    <div className="w-11/12 h-4/5 rounded-xl border-slate-500 shadow-md shadow-slate-400 p-4">
      <div className="flex justify-between m-2">
        <span className="text-font">Today's Appointment List</span>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded">
            <IoMdAddCircle />
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded">
            <FaSortAmountDown />
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="rounded-lg overflow-hidden dark:border-gray-700">
                <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-slate-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 w-1/6 text-start text-xs font-bold text-gray-400 uppercase"
                      >
                        patients
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 w-1/6 text-start text-xs font-bold text-gray-400 uppercase"
                      >
                        date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 w-1/6 text-start text-xs font-bold text-gray-400 uppercase"
                      >
                        time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 w-1/6 text-start text-xs font-bold text-gray-400 uppercase"
                      >
                        doctor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 w-1/6 text-start text-xs font-bold text-gray-400 uppercase"
                      >
                        injury
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 w-1/6 text-center text-xs font-bold text-gray-400 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 flex justify-center items-center">
                        <div className="w-1/2 flex justify-center items-center">
                          <div className="rounded-xl bg-red-400 text-2xl text-white uppercase">
                            jd
                          </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-start">
                          <span className="font-medium text-black">
                            John Doe
                          </span>
                          <span className="font-medium text-sm text-slate-500">
                            +153 1451 141
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        45
                      </td>
                      <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        New York No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        New York No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        New York No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 w-1/6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        New York No. 1 Lake Park
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
