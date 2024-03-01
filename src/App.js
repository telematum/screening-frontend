import "./App.css";
import { useState, useEffect } from "react";
import calendar from "./Icons/calendar.png";
import timer from "./Icons/timer.png";
import star from "./Icons/star.png";
import dots from "./Icons/interface.png";
import correct from "./Icons/correct.png";
import remove from "./Icons/remove.png";

function App() {
  const [apiData, setApiData] = useState([]);

  const [selectedRow, setSelectedRow] = useState(null);

  const initialData = [
    {
      status: "",
    },
  ];

  const [appointments, setAppointments] = useState(initialData);

  const url =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      setApiData(json.appointments);
      setAppointments(
        json.appointments.map((appointment) => ({
          ...appointment,
          status: "",
        }))
      );
    };
    getData();
  }, []);

  const ActionHandler = (index) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  const handleStatusChange = (index, status) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = status;
    setAppointments(updatedAppointments);
    setSelectedRow(null); // Reset selected row after action
  };

  return (
    <div className="border border-gray-300 shadow-2xl rounded-2xl mx-28 mt-5">
      <h1 className="text-xl text-[#8888a7] font-bold py-8 pl-11">
        Today's Appointment List
      </h1>

      <table className="mx-auto">
        <thead className="border text-xs bg-[#fafafb] text-[#a8b2c0]">
          <tr>
            <th className="pr-40 py-5 pl-5">PATIENTS</th>
            <th className="pr-36 py-5">DATE</th>
            <th className="pr-28 py-5">TIME</th>
            <th className="pr-28 py-5">DOCTOR</th>
            <th className="pr-24 py-5">INJURY</th>
            <th className="px-8 py-5">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {apiData.length > 0 ? (
            apiData.map((item, index) => (
              <tr key={index} className="border-b">
                <td>
                  <div className="flex py-3">
                    {appointments[index].status === "completed" && (
                      <img
                        src={correct}
                        alt="Completed"
                        className="h-4 w-4 m-3"
                      />
                    )}
                    {appointments[index].status === "cancelled" && (
                      <img
                        src={remove}
                        alt="Cancelled"
                        className="h-4 w-4 m-3"
                      />
                    )}
                    <div className="py-1">
                      <img
                        className="h-8 w-8"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pqpC6IgkvdxOH-qCcentLTmv_U4TeAVMPutepRWn9w&s"
                      />
                    </div>
                    <div className="px-3">
                      <p className="font-bold text-[#48484e] text-sm">
                        {item.patient_name}
                      </p>
                      <p className="text-[10px] text-[#778491] ">{`+${item.mobile_number}`}</p>
                    </div>
                  </div>
                </td>
                <td className="text-[#778491] font-medium text-[14px]">
                  <div className="flex">
                    <img src={calendar} className="h-3.5 w-3.5 mr-1 my-1" />
                    {item.appointment_date}
                  </div>
                </td>
                <td className="text-[#778491] font-medium text-[14px]">
                  <div className="flex">
                    <img src={timer} className="h-4 w-4 mr-1 my-1" />
                    {item.appointment_time}
                  </div>
                </td>
                <td className="text-[#778491] font-medium text-[14px]">
                  <div className="flex">
                    <img src={star} className="h-4 w-4 mr-1 my-1" />
                    {item.doctor}
                  </div>
                </td>
                <td>
                  <div>
                    <span className="bg-[#e4ecf7] text-center font-bold px-2 py-2  rounded-lg text-[#666d91] text-[11px]">
                      {item.injury}
                    </span>
                  </div>
                </td>
                <td>
                  {selectedRow === index ? (
                    <select
                      id="countries"
                      className="bg-gray-50 border h-10 w-24 border-gray-300 text-[10px] font-bold text-gray-900 rounded-lg focus:ring-gray-500-500 focus:border-gray-500 block  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                      onChange={(e) =>
                        handleStatusChange(index, e.target.value)
                      }
                    >
                      <option value="select">Select Action</option>
                      <option value="completed">Mark as Completed</option>
                      <option value="cancelled">Cancel Appointment</option>
                    </select>
                  ) : (
                    <>
                      <img
                        src={dots}
                        onClick={() => ActionHandler(index)}
                        className="h-4 w-4 m-auto cursor-pointer"
                      />
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className="text-cente py-10">
                  <div>
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
