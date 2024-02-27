import React, { useMemo } from "react";
import Table, { AvatarCell, InjuryPill } from "./Components/CustomTable";
import {
  DotsVerticalIcon,
  StarIcon,
  ClockIcon,
  CalendarIcon,
} from "@heroicons/react/solid";

const fetchAppointmentData = () => {
  const appointmentData = [
    {
      patientName: "John Doe",
      mobileNumber: "+123-456-7890",
      appointmentDate: "2024-01-20",
      appointmentTime: "10:18 AM",
      doctor: "Dr. Smith",
      injury: "Sprained ankle",
      imgUrl:
        "https://res.cloudinary.com/sommmmn/image/upload/v1709042151/photo-1570295999919-56ceb5ecca61_bbl31y.jpg",
    },
    {
      patientName: "Jane Smith",
      mobileNumber: "+987-654-3210",
      appointmentDate: "2024-01-20",
      appointmentTime: "10:18 AM",
      doctor: "Dr. Johnson",
      injury: "Back pain",
      imgUrl:
        "https://res.cloudinary.com/sommmmn/image/upload/v1709042302/photo-1494790108377-be9c29b29330_bz7ctg.jpg",
    },
    {
      patientName: "Michael Johnson",
      mobileNumber: "+456-789-0123",
      appointmentDate: "2024-01-20",
      appointmentTime: "10:18 PM",
      doctor: "Dr. Lee",
      injury: "Headache",
      imgUrl:
        "https://res.cloudinary.com/sommmmn/image/upload/v1709042366/photo-1520813792240-56fc4a3765a7_g12jy5.jpg",
    },
    {
      patientName: "Emily Davis",
      mobileNumber: "+789-012-3456",
      appointmentDate: "2024-01-20",
      appointmentTime: "10:18 PM",
      doctor: "Dr. Patel",
      injury: "Sore throat",
      imgUrl:
        "https://res.cloudinary.com/sommmmn/image/upload/v1709042393/photo-1498551172505-8ee7ad69f235_k5c9ca.jpg",
    },
    {
      patientName: "David Wilson",
      mobileNumber: "+321-654-9870",
      appointmentDate: "2024-01-20",
      appointmentTime: "10:18 PM",
      doctor: "Dr. Garcia",
      injury: "Fever",
      imgUrl:
        "https://res.cloudinary.com/sommmmn/image/upload/v1709042427/photo-1532417344469-368f9ae6d187_xjypmt.jpg",
    },
    {
      patientName: "Sarah Brown",
      mobileNumber: "+654-321-0987",
      appointmentDate: "2024-01-20",
      appointmentTime: "10:18 PM",
      doctor: "Dr. Kim",
      injury: "Cough",
      imgUrl:
        "https://res.cloudinary.com/sommmmn/image/upload/v1709042453/photo-1566492031773-4f4e44671857_ydclw4.jpg",
    },
  ];
  return [...appointmentData];
};

function App() {
  const appointmentColumns = useMemo(
    () => [
      {
        Header: "PATIENTS",
        accessor: "patientName",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        phone: "mobileNumber",
      },
      {
        Header: "DATE",
        accessor: "appointmentDate",
        Cell: ({ value }) => {
          const date = new Date(value);
          const formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          return (
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 text-gray-400 mr-1" />
              
              {formattedDate}
            </div>
          );
        },
      },
      {
        Header: "TIME",
        accessor: "appointmentTime",
        Cell: ({ value }) => (
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 text-gray-400 mr-1" />
            {value.replace(/(AM|PM)/gi, "")}
          </div>
        ),
      },
      {
        Header: "DOCTOR",
        accessor: "doctor",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2 ">
            <span className="bg-green-400 rounded-full h-5 w-5 align-middle items-center gap-2  ">
              <StarIcon className="h-5 w-5 text-white mr-1" />
            </span>
            {row.original.doctor}
          </div>
        ),
      },
      {
        Header: "INJURY",
        accessor: "injury",
        Cell: InjuryPill,
      },
      {
        Header: "ACTION",
        accessor: "ACTION",
        Cell: () => (
          <div className="flex items-center">
            <DotsVerticalIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
          </div>
        ),
      },
    ],
    []
  );

  const appointmentData = useMemo(() => fetchAppointmentData(), []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className=" mt-20 border p-6 rounded-3xl shadow  ">
          <div className=" ">
            <h4 className="text-xl font-semibold text-gray-400">
              Today's Appointment List
            </h4>
          </div>
          <div className="mt-6">
            <Table columns={appointmentColumns} data={appointmentData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
