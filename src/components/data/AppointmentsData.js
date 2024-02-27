import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

export const TableHeaders = [
  {
    id: 1,
    title: "patients",
  },
  {
    id: 2,
    title: "date",
  },
  {
    id: 3,
    title: "time",
  },
  {
    id: 4,
    title: "doctor",
  },
  {
    id: 5,
    title: "injury",
  },
  {
    id: 6,
    title: "action",
  },
];

const AppointmentData = [
  {
    id: 1,
    avatar: avatar1,
    patient_name: "John Doe",
    mobile_number: "123-456-7890",
    appointment_date: "2024-02-26",
    appointment_time: "1:00 PM",
    doctor: "Dr. Smith",
    injury: "Sprained ankle",
  },
  {
    id: 2,
    avatar: avatar2,
    patient_name: "Jane Smith",
    mobile_number: "987-654-3210",
    appointment_date: "2024-02-26",
    appointment_time: "1:30 PM",
    doctor: "Dr. Johnson",
    injury: "Back pain",
  },
  {
    id: 3,
    avatar: avatar3,
    patient_name: "Michael Johnson",
    mobile_number: "456-789-0123",
    appointment_date: "2024-02-26",
    appointment_time: "1:00 PM",
    doctor: "Dr. Lee",
    injury: "Headache",
  },
  {
    id: 4,
    avatar: avatar4,
    patient_name: "Emily Davis",
    mobile_number: "789-012-3456",
    appointment_date: "2024-02-26",
    appointment_time: "2:30 PM",
    doctor: "Dr. Patel",
    injury: "Sore throat",
  },
  {
    id: 5,
    avatar: avatar5,
    patient_name: "David Wilson",
    mobile_number: "321-654-9870",
    appointment_date: "2024-02-26",
    appointment_time: "4:00 PM",
    doctor: "Dr. Garcia",
    injury: "Fever",
  },
  {
    id: 6,
    avatar: avatar6,
    patient_name: "Sarah Brown",
    mobile_number: "654-321-0987",
    appointment_date: "2024-02-26",
    appointment_time: "5:30 PM",
    doctor: "Dr. Kim",
    injury: "Cough",
  },
];
export default AppointmentData;
