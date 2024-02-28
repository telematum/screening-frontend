import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "./Table";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import { api } from "../Constant/Constant";
import { CiCalendar } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import "react-dropdown/style.css";

const AppointmentsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(api);
        setData(res.data.appointments);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [data]);

  const columns = useMemo(
    () => [
      {
        header: "Patients",
        rowCell: ({ row }) => (
          <div className="flex gap-1.5 w-full">
            <img
              src="Person.jpg"
              alt="Person"
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white my-auto"
            />
            <div className="flex flex-col">
              <span className="lg:text-sm text-xs text-gray-600 font-bold">
                {row.patient_name}
              </span>
              <span className="text-[8px] text-gray-400 font-semibold lg:text-xs">
                {"+" + row.mobile_number}
              </span>
            </div>
          </div>
        ),
      },
      {
        header: "Date",
        rowCell: ({ row }) => {
          const date = new Date(row.appointment_date);
          const options = { day: "2-digit", month: "short", year: "numeric" };
          const formattedDate = date.toLocaleDateString("en-GB", options);
          return (
            <div className="flex gap-1 text-[rgb(105,120,134)]">
              <CiCalendar className="my-auto text-base" />
              <span className="font-medium">{formattedDate}</span>
            </div>
          );
        },
      },
      {
        header: "Time",
        rowCell: ({ row }) => {
          return (
            <div className="flex gap-1 text-[rgb(102,116,131)]">
              <CiClock1 className="my-auto text-base" />
              <span className="font-medium">
                {row.appointment_time.split(" ")[0]}
              </span>
            </div>
          );
        },
      },
      {
        header: "Doctor",
        rowCell: ({ row }) => {
          return (
            <div className="flex items-center gap-1.5">
              <span className="bg-green-300 rounded-full px-0.5 py-0.5 border-2 border-gray-200">
                <FaRegStar className="text-white" />
              </span>
              <span className="font-medium text-gray-500">{row.doctor}</span>
            </div>
          );
        },
      },
      {
        header: "Injury",
        rowCell: ({ row }) => {
          return (
            <span className="bg-[rgb(228,236,247)] p-2 text-gray-500 text-xs  font-bold rounded-lg">
              {row.injury}
            </span>
          );
        },
      },
      {
        header: "Action",
        rowCell: ({ row }) => (
          <div className="">
            <BsThreeDotsVertical className="text-gray-300 cursor-pointer" />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div>
      {data.length === 0 ? (
        <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Loading the Data
        </button>
      ) : (
        <div className="p-5 shadow-lg rounded-2xl border-[1.2px] border-gray-200 ">
          <div className="py-4 px-1 text-gray-400 font-bold">
            Today's Appointments List
          </div>
          <div className="px-2">
            <CustomTable isLoading={true} columns={columns} rawData={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsTable;
