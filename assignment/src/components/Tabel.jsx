import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaEllipsisV } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PiClockCountdown } from "react-icons/pi";
import { format, parseISO } from "date-fns";
import Gravatar from "react-gravatar";
import { FiSearch } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const Tabel = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchInputRef = useRef(null);

  const url =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url) {
          const response = await axios.get(url);
          setData(response.data.appointments);
        } else {
          throw new Error("URL is not defined");
        }
      } catch (err) {
        setError(error);
        console.error("Error in fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    const delay = 1000;

    const fetchDataWithDelay = async () => {
      setTimeout(() => {
        fetchData();
      }, delay);
    };

    fetchDataWithDelay();

   

    return () => clearTimeout(fetchDataWithDelay);
  }, [url]);

  const filteredData = data.filter((appointment) =>
    appointment.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const setDate = (dateString) => {
    const formattedDate = format(parseISO(dateString), "dd MMM yyyy");
    return formattedDate;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-red-500" />
        <p style={{ marginLeft: "10px" }}>Please Wait Data is Loading </p>
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center h-70vh w-full mt-20">
      <div className="w-full lg:w-4/5 overflow-x-auto border border-solid border-red-1D1E1E rounded-3xl p-9">
        <h2 className="text-2xl mb-4 flex justify-start ">
          <span className="hover-line  text-gray-900 hover-text">
            Today's Appointments List
          </span>
        </h2>
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full pr-10"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchInputRef}
          />
          <div
            style={{
              position: "absolute",
              top: "38%",
              right: "5px",
              transform: "translateY(-50%)",
            }}
          >
            <FiSearch size={35} />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="lg:overflow-hidden">
            <table className="w-full border-collapse ">
              <thead className="h-[50px]  border-b">
                <tr className="bg-gray-50 text-gray-500 ">
                  <th className=" pl-4 px-2 py-2 text-gray-300 rounded-tl-lg text-left">
                    PATIENTS
                  </th>
                  <th className=" px-4 py-2 text-gray-300 rounded-tr-lg text-left">
                    DATE
                  </th>
                  <th className=" px-4 py-2 text-gray-300 rounded-tr-lg text-left">
                    TIME
                  </th>
                  <th className=" px-4 py-2 text-gray-300 rounded-tr-lg text-left">
                    DOCTOR
                  </th>
                  <th className=" px-4 py-2 text-gray-300 rounded-tr-lg text-left">
                    INJURY
                  </th>
                  <th className=" px-4 py-2 text-gray-300 rounded-tr-lg text-left">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((appointment, index) => (
                  <tr
                    key={index}
                    className="border-b"
                    style={{
                      borderBottom: index != 5 ? "" : "1px",
                    }}
                  >
                    <td
                      className="  px-2 py-4 relative text-sm whitespace-nowrap"
                      style={{ paddingRight: "20px" }}
                    >
                      <div className="absolute rounded-full w-10 h-10 flex items-center justify-center">
                        <Gravatar
                          email={appointment.patient_name[0]}
                          size={40}
                          default="wavatar"
                          className="rounded-full"
                        />
                      </div>
                      <div className="ml-12">
                        <div>{appointment.patient_name}</div>
                        <div>{appointment.mobile_number}</div>
                      </div>
                    </td>

                    <td className="  px-4 py-2 whitespace-nowrap text-sm text-center">
                      <div className="flex items-center">
                        <SlCalender style={{ marginRight: "6px" }} />
                        {setDate(appointment.appointment_date)}
                      </div>
                    </td>

                    <td className="  px-4 py-2 whitespace-nowrap text-sm">
                      <div className="flex items-center ">
                        <PiClockCountdown
                          style={{ marginRight: "6px" }}
                          size="24px"
                        />
                        {appointment.appointment_time.split(" ")[0]}
                      </div>
                    </td>
                    <td
                      className=" px-4 py-2 text-sm whitespace-nowrap"
                      style={{ paddingRight: "20px" }}
                    >
                      <div className="flex items-center">
                        <div
                          className="circle"
                          style={{
                            marginRight: "6px",
                            backgroundColor:
                              index === 3
                                ? "red"
                                : index === 4
                                ? "red"
                                : "green",
                          }}
                        >
                          <div className="star">&#9733;</div>
                        </div>
                        {appointment.doctor}
                      </div>
                    </td>
                    <td className=" px-4 py-2 text-sm whitespace-nowrap">
                      <span
                        style={{
                          backgroundColor: "#E9F0F9",
                          padding: "4px",
                          borderRadius: "4px",
                        }}
                      >
                        {appointment.injury}
                      </span>
                    </td>
                    <td className=" px-4 py-2" style={{ textAlign: "center" }}>
                      <div style={{ display: "inline-block", margin: "auto" }}>
                        <FaEllipsisV color="#808080" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
