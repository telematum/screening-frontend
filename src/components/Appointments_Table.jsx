import { useState, useEffect } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { TbProgressCheck } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { MdOutlineMoreVert } from "react-icons/md";
import DialogBox from "./DialogBox";

// Sample Data's
const appointments = [
  {
    patient_name: "John Doe",
    mobile_number: "123-456-7890",
    appointment_date: "2024-02-26",
    appointment_time: "10:00 AM",
    doctor: "Dr. Smith",
    injury: "Sprained ankle",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Jane Smith",
    mobile_number: "987-654-3210",
    appointment_date: "2024-02-26",
    appointment_time: "11:30 AM",
    doctor: "Dr. Johnson",
    injury: "Back pain",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Michael Johnson",
    mobile_number: "456-789-0123",
    appointment_date: "2024-02-26",
    appointment_time: "1:00 PM",
    doctor: "Dr. Lee",
    injury: "Headache",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Emily Davis",
    mobile_number: "789-012-3456",
    appointment_date: "2024-02-26",
    appointment_time: "2:30 PM",
    doctor: "Dr. Patel",
    injury: "Sore throat",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "David Wilson",
    mobile_number: "321-654-9870",
    appointment_date: "2024-02-26",
    appointment_time: "4:00 PM",
    doctor: "Dr. Garcia",
    injury: "Fever",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Sarah Brown",
    mobile_number: "654-321-0987",
    appointment_date: "2024-02-26",
    appointment_time: "5:30 PM",
    doctor: "Dr. Kim",
    injury: "Cough",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const AppointmentTable = () => {
  const [appointmentList, setAppointmentList] = useState([]); // State for storing appointment list
  const [selectedAppointment, setSelectedAppointment] = useState(null); // State for managing selected appointment

  // Initialize appointment list on component mount
  useEffect(() => {
    setAppointmentList(appointments);
  }, []);

  // Function to open dialog for a selected appointment
  const openDialog = (appointment) => {
    setSelectedAppointment(appointment);
  };

  // Function to close dialog
  const closeDialog = () => {
    setSelectedAppointment(null);
  };

  // Function to delete an appointment
  const deleteAppointment = (patient_name) => {
    const updatedList = appointmentList.filter(
      (appointment) => appointment.patient_name !== patient_name
    );
    setAppointmentList(updatedList);
    setSelectedAppointment(null);
  };

  // Function to generate random color
  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Function to get the first letter of a name
  const getFirstLetter = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      {/* Desktop view */}
      <div className="container h-screen mx-auto overflow-x-auto hidden md:block">
        <h1 className="text-2xl font-medium mb-4 text-neutral-500 py-6">
          Today&apos;s Appointment List
        </h1>
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-left text-sm text-neutral-500 font-normal">
                <th className="p-4 py-2 border-b">PATIENTS</th>
                <th className="p-4 py-2 border-b">DATE</th>
                <th className="p-4 py-2 border-b">TIME</th>
                <th className="p-4 py-2 border-b">DOCTOR</th>
                <th className="p-4 py-2 border-b">INJURY</th>
                <th className="p-4 py-2 border-b">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through appointments and render table rows */}
              {appointmentList.map((appointment, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border-b whitespace-nowrap">
                    {/* Patient avatar */}
                    <div className="flex items-center gap-3">
                      <div
                        className="avatar-placeholder w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all cursor-pointer transition-all"
                        style={{ backgroundColor: randomColor() }}
                      >
                        <span className="text-xl text-slate-100	">
                          {getFirstLetter(appointment.patient_name)}
                        </span>
                      </div>

                      {/* Patient details */}
                      <div className="flex flex-col">
                        <span className="font-bold">
                          {appointment.patient_name}
                        </span>
                        <span className="text-sm text-neutral-500">
                          {appointment.mobile_number}
                        </span>
                      </div>
                    </div>
                  </td>
                  {/* Appointment date */}
                  <td className="px-4 py-2 border-b">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <CiCalendarDate size={20} />
                      {appointment.appointment_date}
                    </div>
                  </td>
                  {/* Appointment time */}
                  <td className="px-4 py-2 border-b">
                    <div className="flex items-center gap-1 text-neutral-500">
                      <TbProgressCheck size={20} />
                      {appointment.appointment_time}
                    </div>
                  </td>
                  {/* Doctor */}
                  <td className="px-4 py-2 border-b">
                    <div className="flex items-center gap-1 text-neutral-500">
                      <MdStars
                        size={20}
                        className={
                          index === 3 || index === 4
                            ? "text-orange-500"
                            : "text-green-500"
                        }
                      />
                      <span className="text-xs md:text-sm">
                        {appointment.doctor}
                      </span>
                    </div>
                  </td>
                  {/* Injury */}
                  <td className="px-4 py-2 border-b">
                    <span className="px-2 py-1 rounded-md bg-slate-200 text-xs text-zinc-700 font-medium">
                      {appointment.injury}
                    </span>
                  </td>
                  {/* Action */}
                  <td className="px-4 py-2 border-b">
                    <div
                      className="flex items-center justify-start cursor-pointer"
                      onClick={() => openDialog(appointment)}
                    >
                      <MdOutlineMoreVert
                        size={25}
                        className="text-slate-300 font-bold"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile view */}
      <div className="grid grid-cols-1 gap-4 md:hidden p-5 bg-gradient-to-r from-gray-50 to-gray-100">
        <h2 className="text-lg font-semibold text-neutral-500">
          Today&apos; Appointments
        </h2>
        {/* Map through appointments and render mobile cards */}
        {appointmentList.map((appointment, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-md backdrop-blur-sm	shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {/* Patient avatar and details */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div
                  className="avatar-placeholder w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all"
                  style={{ backgroundColor: randomColor() }}
                >
                  <span className="text-xl text-slate-100	">
                    {getFirstLetter(appointment.patient_name)}
                  </span>
                </div>
                <span className="font-bold text-sm text-neutral-500">
                  {appointment.patient_name}
                </span>
                <span className="text-sm text-neutral-500">
                  {appointment.mobile_number}
                </span>
              </div>
            </div>
            {/* Appointment date and time */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-medium text-neutral-500">D/T</span>
              <div className="flex items-center gap-2 text-neutral-500 text-xs">
                {appointment.appointment_date}
              </div>
              <div className="flex items-center gap-1 text-neutral-500 text-xs">
                {appointment.appointment_time}
              </div>
            </div>
            {/* Doctor */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-medium text-neutral-500">Dr.</span>
              <span className="text-xs italic font-medium text-neutral-500">
                {appointment.doctor}
              </span>{" "}
            </div>
            {/* Action */}
            <div
              className="flex items-center justify-start cursor-pointer transform hover:scale-110"
              onClick={() => openDialog(appointment)}
            >
              <MdOutlineMoreVert
                size={25}
                className="text-slate-300 font-bold"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dialog Box */}
      <DialogBox
        isOpen={selectedAppointment !== null}
        onClose={closeDialog}
        onDelete={deleteAppointment}
        appointment={selectedAppointment}
      />
    </>
  );
};

export default AppointmentTable;
