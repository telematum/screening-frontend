import { CiCalendar } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import { MdStars } from "react-icons/md";

const HomePage = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        const jsonData = await response.json();
        setAppointmentsData(jsonData.appointments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatMobileNumber = (inputNumber) => {
    const numericString = inputNumber.replace(/\D/g, "");

    const formattedNumber = `+${numericString.slice(
      0,
      3
    )} ${numericString.slice(3, 7)} ${numericString.slice(7)}`;

    return formattedNumber;
  };

  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObject.toLocaleDateString("en-GB", options);
  };

  const formatTime = (inputTime) => {
    const formattedTime = inputTime.split(" ")[0];
    return formattedTime;
  };

  return (
    <div className="border-2 p-6 m-4 rounded-3xl">
      <div className="pb-4  text-[#a5a2b5] font-medium text-xl">
        <h1>Today&apos;s Appointment List</h1>
      </div>

      <div className="relative overflow-x-auto rounded-xl">
        <table className="w-full table-auto text-sm text-gray-500">
          <thead className="text-xs text-[#b7bac2]  uppercase bg-[#fafafa] text-left">
            <tr>
              <th scope="col" className="py-6 px-4">
                PATIENTS
              </th>

              <th scope="col">DATE</th>

              <th scope="col">TIME</th>

              <th scope="col">DOCTOR</th>

              <th scope="col">INJURY</th>

              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              appointmentsData.map((appointment, index) => (
                <tr
                  key={index}
                  className={
                    index === appointmentsData.length - 1 ? "" : "border-b"
                  }
                >
                  <td>
                    <div className="flex items-center px-4 py-4">
                      <div className="w-12 h-12 rounded-full bg-[#f3f4f6] mr-3">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm leading-relaxed font-bold text-[#38383a]">
                          {appointment.patient_name}
                        </span>
                        <span className="text-xs text-[#a4a2ac]">
                          {formatMobileNumber(appointment.mobile_number)}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <span className="text-xl text-gray-400 mr-2">
                        <CiCalendar />
                      </span>
                      <span className="text-md font-medium text-gray-400">
                        {formatDate(appointment.appointment_date)}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <span className="text-xl text-gray-400 mr-2 mt-1">
                        <CiTimer />
                      </span>
                      <span className="text-md font-medium text-gray-400 ">
                        {formatTime(appointment.appointment_time)}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <span
                        className={`text-xl ${
                          index === 3 || index === 4
                            ? "text-[#f0b496]"
                            : "text-[#6fc8a1]"
                        } mr-2 mt-1`}
                      >
                        <MdStars />
                      </span>
                      <span className="text-md font-medium text-gray-400 ">
                        {appointment.doctor}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className="text-md font-medium bg-[#e4ecf8] text-[#676d86] p-2 rounded-md">
                      {appointment.injury}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xl text-gray-300">
                      <BsThreeDotsVertical />
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
