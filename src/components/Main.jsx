import React from "react";
import { MdStars } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { FaEllipsisVertical } from "react-icons/fa6";
import { HiMiniCalendarDays } from "react-icons/hi2";
import useAppointmentsData from "../custom/useAppointmentsData";
import TelTable from "./TelTable";

const Main = () => {
  const { appointments } = useAppointmentsData();

  // Making custom Cell
  function PatientCell({ row }) {
    const { patient_name, mobile_number } = row.original;
    return (
      <div className="flex flex-row items-center">
        <div className="w-12 h-12 rounded-full bg-blue-200 mr-2 md:block hidden "></div>
        <div className="flex flex-col">
          <div className="font-bold">{patient_name}</div>
          <div className="text-[#3d3d3d]">{mobile_number}</div>
        </div>
      </div>
    );
  }

  function DateCell({ value }) {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return (
      <div className="flex items-center">
        <HiMiniCalendarDays color="#3d3d3d" className="mr-2 md:block hidden" />
        <span className="text-[#3d3d3d]">{formattedDate}</span>
      </div>
    );
  }
  function TimeCell({ value }) {
    const timeWithoutAmPm = value.replace(/\s*(AM|PM)$/, "");
    return (
      <div className="flex items-center">
        <BsClockHistory
          className={`mr-2 ${
            value.includes("AM") ? "text-green-500" : "text-red-500"
          }`}
        />
        <span className="text-[#3d3d3d]">{timeWithoutAmPm}</span>
      </div>
    );
  }

  function DoctorCell({ value }) {
    return (
      <div className="flex items-center">
        <MdStars color="#3d3d3d" size={20} className="mr-2 md:block hidden" />
        <span className="text-[#3d3d3d]">{value}</span>
      </div>
    );
  }

  function InjuryCell({ value }) {
    return (
      <div className="bg-blue-200 py-1 px-4 rounded-md w-fit text-[15px] font-[400] ">
        {value}
      </div>
    );
  }

  function ActionCell({ row }) {
    const handleIconClick = () => {
      console.log(`Clicked row-${row.index}`);
    };
    return (
      <div className="flex items-center justify-center">
        <FaEllipsisVertical
          color="gray"
          size={25}
          onClick={handleIconClick}
          className="text-center cursor-pointer"
        />
      </div>
    );
  }

  const columns = [
    { Header: "Patients", accessor: "patient_name", Cell: PatientCell },
    { Header: "Date", accessor: "appointment_date", Cell: DateCell },
    { Header: "Time", accessor: "appointment_time", Cell: TimeCell },
    { Header: "Doctor", accessor: "doctor", Cell: DoctorCell },
    { Header: "Injury", accessor: "injury", Cell: InjuryCell },
    { Header: "Action", accessor: "action", Cell: ActionCell },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="border-[1px] border-[#b8b6b6] rounded-3xl p-8">
        <h1 className="text-xl font-bold mb-4 text-[#666]">
          Today's Appointment List
        </h1>
        <TelTable columns={columns} data={appointments} />
      </div>
    </div>
  );
};

export default Main;
