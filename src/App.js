import React from "react"
import Table, { AvatarCell, InjuryPill } from "./Table" 
import { DotsVerticalIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/solid"
import { ClockIcon } from "@heroicons/react/solid"
import { CalendarIcon } from "@heroicons/react/solid"

const getData = () => {
  const data = [
    {
      patient_name: "John Doe",
      mobile_number: "+123-456-7890",
      appointment_date: "2024-02-26",
      appointment_time: "10:00 AM",
      doctor: "Dr. Smith",
      injury: "Sprained ankle",
      imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      patient_name: "Jane Smith",
      mobile_number: "+987-654-3210",
      appointment_date: "2024-02-26",
      appointment_time: "11:30 AM",
      doctor: "Dr. Johnson",
      injury: "Back pain",
      imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      patient_name: "Michael Johnson",
      mobile_number: "+456-789-0123",
      appointment_date: "2024-02-26",
      appointment_time: "1:00 PM",
      doctor: "Dr. Lee",
      injury: "Headache",
      imgUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      patient_name: "Emily Davis",
      mobile_number: "+789-012-3456",
      appointment_date: "2024-02-26",
      appointment_time: "2:30 PM",
      doctor: "Dr. Patel",
      injury: "Sore throat",
      imgUrl: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      patient_name: "David Wilson",
      mobile_number: "+321-654-9870",
      appointment_date: "2024-02-26",
      appointment_time: "4:00 PM",
      doctor: "Dr. Garcia",
      injury: "Fever",
      imgUrl: "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      patient_name: "Sarah Brown",
      mobile_number: "+654-321-0987",
      appointment_date: "2024-02-26",
      appointment_time: "5:30 PM",
      doctor: "Dr. Kim",
      injury: "Cough",
      imgUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ]
  return [...data]
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "PATIENTS",
        accessor: "patient_name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        phone: "mobile_number",
      },
      {
        Header: "DATE",
        accessor: "appointment_date",
        Cell: ({ value }) => {
          const date = new Date(value)

          const formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          return (
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 text-gray-400 mr-1" />
              {formattedDate}
            </div>
          )
        },
      },
      {
        Header: "TIME",
        accessor: "appointment_time",
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
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
            {row.original.doctor} {/* Accessing the original doctor's name */}
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
  )

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h4 className="text-xl font-semibold">Today's Appointment List</h4>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  )
}

export default App
