"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomTable from "../sharedComponents/CustomTable";
import { FiClock } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { AvatarGenerator } from "random-avatar-generator";

const TablePage = () => {
  const [patientData, setPatientData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let randomNumber = 0;
  const generator = new AvatarGenerator();
  generator.generateRandomAvatar();

  const avatarImage = `${generator.generateRandomAvatar(randomNumber)}`;

  async function fetchData() {
    const response = await fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json",
    );
    const data = await response.json();
    setPatientData(data?.appointments);

    console.log(data);
  }
  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  // const appointments = [
  //   {
  //     patient_name: "John Doe",
  //     mobile_number: "123-456-7890",
  //     appointment_date: "2024-02-26",
  //     appointment_time: "10:00 AM",
  //     doctor: "Dr. Smith",
  //     injury: "Sprained ankle",
  //   },
  //   {
  //     patient_name: "Jane Smith",
  //     mobile_number: "987-654-3210",
  //     appointment_date: "2024-02-26",
  //     appointment_time: "11:30 AM",
  //     doctor: "Dr. Johnson",
  //     injury: "Back pain",
  //   },
  //   {
  //     patient_name: "Michael Johnson",
  //     mobile_number: "456-789-0123",
  //     appointment_date: "2024-02-26",
  //     appointment_time: "1:00 PM",
  //     doctor: "Dr. Lee",
  //     injury: "Headache",
  //   },
  //   {
  //     patient_name: "Emily Davis",
  //     mobile_number: "789-012-3456",
  //     appointment_date: "2024-02-26",
  //     appointment_time: "2:30 PM",
  //     doctor: "Dr. Patel",
  //     injury: "Sore throat",
  //   },
  //   {
  //     patient_name: "David Wilson",
  //     mobile_number: "321-654-9870",
  //     appointment_date: "2024-02-26",
  //     appointment_time: "4:00 PM",
  //     doctor: "Dr. Garcia",
  //     injury: "Fever",
  //   },
  //   {
  //     patient_name: "Sarah Brown",
  //     mobile_number: "654-321-0987",
  //     appointment_date: "2024-02-26",
  //     appointment_time: "5:30 PM",
  //     doctor: "Dr. Kim",
  //     injury: "Cough",
  //   },
  // ];

  const columnData = [
    {
      header: "Patients",
      render: (row) => (
        <div className="flex items-center">
          <Image
            src={avatarImage}
            alt="Avatar"
            width={40}
            height={40}
            className="w-8 mr-2"
          />
          <div>
            <div>{row.patient_name}</div>
            <div>{row.mobile_number}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Date",
      render: (row) => (
        <div className="flex items-center">
          <BsCalendar4Week className="w-4 h-10 mr-2" />
          <div>{row.appointment_date}</div>
        </div>
      ),
    },
    {
      header: "Time",
      render: (row) => (
        <div className="flex items-center">
          <FiClock className="w-4 h-10 mr-2" />
          <div>{row.appointment_time}</div>
        </div>
      ),
    },
    {
      header: "Doctor",
      render: (row) => (
        <div className="flex items-center">
          <IoIosStar className="bg-green-400 p-1 rounded-full text-lg text-white mr-2 h-4 w-4" />
          <div>{row.doctor}</div>
        </div>
      ),
    },
    {
      header: "Injury",
      render: (row) => (
        <div className="text-center p-2 bg-gray-200 rounded-md">
          {row.injury}
        </div>
      ),
    },
    {
      header: "Actions",
      render: () => (
        <div className="text-center">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <PiDotsThreeOutlineVerticalFill className="w-4 h-10 mr-2" />
          </button>
        </div>
      ),
    },
  ];

  const Compo = ({ name, phone }) => {
    return (
      <>
        <div className="flex flex-col justify-center">
          <div>{name}</div>
          <div>{phone}</div>
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Today's appointment list</h1>
      </div>
      <div className="w-4/5">
        <CustomTable
          stickyColumn
          stickyHeader
          data={patientData}
          columns={columnData}
        />
      </div>
    </div>
  );
};

export default TablePage;
