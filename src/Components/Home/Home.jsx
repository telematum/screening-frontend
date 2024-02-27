import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import StarCircleIcon from "../CustumIcon";
// import { faCircleStar } from "../CustumIcon";
import profile1 from "../../assets/girl-1.avif";
import profile2 from "../../assets/girl2.avif";
import profile3 from "../../assets/Mark Haddon.jpg";
import profile4 from "../../assets/java-author.jpg";
import profile5 from "../../assets/girl-1.avif";
import profile6 from "../../assets/girl2.avif";

const Home = () => {
  const [data, setData] = useState([]);

  const API =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

  useEffect(() => {
    getAppointmentListData();
  }, []);

  const getAppointmentListData = () => {
    axios
      .get(API)
      .then((res) => {
        console.log(res.data.appointments);
        setData(res.data.appointments);
      })
      .catch((err) => console.log(err));
  };

  const getProfileImage = (index) => {
    switch (index) {
      case 0:
        return profile1;
      case 1:
        return profile2;
      case 2:
        return profile3;
      case 3:
        return profile4;
      case 4:
        return profile5;
      case 5:
        return profile6;
      default:
        return profile4;
    }
  };
  return (
    <div className="container mx-auto mt-8 p-3  rounded-md  border-gray-150  bg-gray-120 shadow ">
      <div className="container mx-auto  ">
        <h4 className="text-2xl  mb-4 text-black-400 text-md font-semibold opacity-60">
          Today's Appointment List
        </h4>

        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full rounded-lg">
            <thead className="bg-gray-100 border-b-2 border-gray-200 uppercase">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-150">
                  Patient
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Time
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Doctor
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Injury
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((appointment, index) => (
                <tr
                  key={index}
                  className="bg-white 
              divide-y divide-gray-100
              "
                >
                  <td className="p-3 text-sm text-gray-700 hover:gray  whitespace-nowrap">
                    <div className="flex space-x-2 items-center">
                      <img
                        src={getProfileImage(index)}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-md font-semibold">
                          {" "}
                          {appointment.patient_name}
                        </p>
                        <p className="text-sm  opacity-60">
                          + {appointment.mobile_number}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 hover:gray whitespace-nowrap">
                    <div className="flex space-x-2 items-center">
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="w-4 h-4 mr-1 text-gray-500"
                        />
                      </span>
                      <span> {appointment.appointment_date}</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 hover:gray whitespace-nowrap">
                    {/* {appointment.appointment_time} */}
                    <div className="flex space-x-2 items-center">
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faClock}
                          className="w-4 h-4 mr-1 text-gray-500"
                        />
                      </span>
                      <span> {appointment.appointment_time}</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 hover:gray whitespace-nowrap">
                    <div className="flex space-x-2 items-center">
                      <span>
                        {" "}
                        <StarCircleIcon
                          starColor="#fff"
                          circleColor={
                            index == 3 || index == 4 ? "#FFD43B" : "#63E6BE"
                          }
                        />
                      </span>
                      <span> {appointment.doctor}</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700 bg-gray whitespace-nowrap">
                    <span className="text-black-800 tracking-wider p-1 font-medium rounded-md bg-gray-300 bg-opacity-70">
                      {" "}
                      {appointment.injury}
                    </span>
                  </td>
                  <td className="px-7  py-3 text-sm text-gray-700 hover:gray whitespace-nowrap">
                    {" "}
                    <span className="text-xl text-gray-400">:</span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
