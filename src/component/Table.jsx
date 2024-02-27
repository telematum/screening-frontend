import React, { useEffect, useState } from "react";
import { APIURL, user_img, table_header_data } from "../assets/constants";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";

const Table = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const getDateFormat = (dateFormat) => {
    let inputDate = new Date(dateFormat);

    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = inputDate.getDate();
    let monthIndex = inputDate.getMonth();
    let year = inputDate.getFullYear();

    let formattedDate = day + " " + monthNames[monthIndex] + " " + year;
    return formattedDate;
  };

  const getTimeFormat = (timeFormat) => {
    let parsedDate = new Date("2000-01-01 " + timeFormat);

    let hours = parsedDate.getHours();
    let minutes = parsedDate.getMinutes();

    let formattedTime =
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes;
    return formattedTime;
  };

  const getUserData = async () => {
    try {
      const data = await fetch(APIURL);
      const json = await data.json();
      const userDataWithColors = json.appointments.map((user) => ({
        ...user,
        appointment_date: getDateFormat(user.appointment_date),
        appointment_time: getTimeFormat(user.appointment_time),
        user_icon: user_img,
        user_color: getRandomColor(),
      }));

      setUserData(userDataWithColors);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="overflow-x-auto shadow  md:rounded-lg my-4">
      <table className="min-w-full">
        <thead className="bg-gray-50 ">
          <tr>
            {table_header_data.map((header, index) => {
              return (
                <th scope="col" className={header.headingClass} key={index}>
                  {header.heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-400">
          {userData.map((user, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-3  py-4 ">
                <div className="flex items-center">
                  <img
                    src={user.user_icon}
                    alt={user.patient_name}
                    className="border rounded-full h-9 w-9"
                  />
                  <div className="flex flex-col ml-2">
                    <span className="text-black font-medium ">
                      {user.patient_name}
                    </span>
                    <span className="text-sm">{user.mobile_number}</span>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 ">
                <div className=" flex items-center">
                  <CiCalendarDate className="mr-1  h-5 w-5" />
                  {user.appointment_date}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 ">
                <div className="flex items-center">
                  <CiClock2 className="mr-1  h-5 w-5" />
                  {user.appointment_time}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 ">
                <div className="flex items-center">
                  <MdStars
                    style={{ color: `${user.user_color}` }}
                    className="mr-1 h-5 w-5"
                  />
                  {user.doctor}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 ">
                <span className="rounded-lg py-2 px-3 bg-charcoal-200 text-black font-medium">
                  {user.injury}
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4">
                <TbDotsVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
