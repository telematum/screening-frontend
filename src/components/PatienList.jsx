import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function PatienList() {
  const URL =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoader(true);
        const resp = await axios.get(URL);
        if (resp?.status === 200) {
          setData(resp?.data?.appointments);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="min-[80%] mx-auto ">
      <h1 className="text-2xl font-bold sha text-slate-500">
        Today&#39;s Appointment List
      </h1>
      {loader && (
        <div className="text-slate-500 font-bold text-[15px]">
          Processing...
        </div>
      )}
      <div className="mt-5 listPatient ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-6 text-slate-400 text-[16px]"
                >
                  PATIENTS
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 text-slate-400 text-[16px]"
                >
                  DATE
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 text-slate-400 text-[16px]"
                >
                  TIME
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 text-slate-400 text-[16px]"
                >
                  DOCTOR
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 text-slate-400 text-[16px]"
                >
                  INJURY
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 text-slate-400 text-[16px]"
                >
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((patient, index) => {
                const originalDate = moment(patient?.appointment_date);
                const formattedDate = originalDate.format("DD MMM YYYY");
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center gap-2">
                        <Avatar name={patient?.patient_name} size="33" round />
                        <span>
                          <p className="font-semibold">
                            {patient?.patient_name}
                          </p>
                          <p className="text-slate-400 text-[11px]">
                            +{patient?.mobile_number}
                          </p>
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-slate-400 font-semibold">
                      <div className="flex items-center gap-1">
                        <CiCalendarDate className="text-[18px]" />{" "}
                        <span>{formattedDate}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-semibold">
                      <div className="flex items-center gap-1">
                        <AiOutlineFieldTime className="text-[18px]" />{" "}
                        <span>{patient?.appointment_time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-semibold">
                      <div className="flex items-center gap-1">
                        <FaStar
                          className={`${index % 2 === 0 ? "text-red-400" : "text-green-400"
                            } text-[18px]`}
                        />{" "}
                        <span>{patient?.doctor}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 px-4 py-1 rounded-md font-semibold inline-block">
                        {patient?.injury}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <BsThreeDotsVertical
                        size={"20px"}
                        className="cursor-pointer hover:text-gray-900"
                      />
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

export default PatienList;
