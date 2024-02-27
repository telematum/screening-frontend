import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";

function App() {
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
      .then((res) => settableData(res.data.appointments))
      .catch((err) => console.log(err));
  };

  const diffColour = tableData?.map((item) => {
    return item?.doctor === "Dr. Patel" || item?.doctor === "Dr. Garcia"
      ? "text-orange-400"
      : "text-[#31b260]";
  });
  const colors = [
    "bg-red-600",
    "bg-blue-700",
    "bg-gray-300",
    "bg-slate-300",
    "bg-green-300",
    "bg-stone-500",
  ];
  const getRandomColour = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const formatdate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObject.toLocaleDateString("en-GB", options);
  };

  const formatTime = (inputTime) => {
    return inputTime.replace(/\b(?:AM|PM)\b/g, "");
  };
  return (
    <div className="border-2 p-6 m-4 rounded-3xl min-h-screen">
      <div className="pb-4  text-gray-600 font-medium text-lg font-sans">
        <h1>Today&apos;s Appointment List</h1>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-500  uppercase bg-gray-200/85 rounded-t-lg sm:rounded-t-lg">
            <tr>
              <th scope="col" className="px-6 py-3">
                PATIENTS
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
              <th scope="col" className="px-6 py-3">
                TIME
              </th>
              <th scope="col" className="px-6 py-3">
                DOCTOR
              </th>
              <th scope="col" className="px-6 py-3">
                INJURY
              </th>
              <th scope="col" className="px-4 py-3">
                ACTION
              </th>
            </tr>
          </thead>

          {tableData.length > 0 ? (
            <tbody>
              <>
                {tableData?.map((item, index) => (
                  <tr key={index} className="bg-white  border-t">
                    <td
                      scope="row"
                      className={`flex px-6 py-4 font-medium  whitespace-nowrap dark:text-white `}>
                      <span
                        className={`w-12 h-12 rounded-full mr-4 ${getRandomColour()}`}></span>
                      <div className="flex flex-col">
                        <span className="text-sm text-black">
                          {item?.patient_name}
                        </span>
                        <span className=" text-xs font-normal text-gray-500">
                          +{item?.mobile_number}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-start items-center gap-1 ">
                        <CiCalendarDate className="text-xl text-gray-500" />
                        <span className="text-md font-medium">
                          {formatdate(item?.appointment_date)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {" "}
                      <div className="flex justify-start items-center gap-1">
                        <BsClockHistory className="text-lg " />
                        <span className="text-md font-medium">
                          {formatTime(item?.appointment_time)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-start items-center gap-1">
                        <MdStars className={`text-xl ${diffColour[index]}`} />

                        <span className="text-md font-medium">
                          {item?.doctor}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-slate-700 rounded-md text-sm font-semibold p-2 bg-slate-300">
                        {item?.injury}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <FaEllipsisVertical className="text-lg " />
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          ) : (
            <p className="text-black p-2">Data Loading</p>
          )}
        </table>
      </div>
    </div>
  );
}

export default App;
