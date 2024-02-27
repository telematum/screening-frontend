import React from "react";

const Appointment = () => {
  const json = {
    appointments: [
      {
        patient_name: "John Doe",
        mobile_number: "123-456-7890",
        appointment_date: "2024-02-26",
        appointment_time: "10:00 AM",
        doctor: "Dr. Smith",
        injury: "Sprained ankle",
      },
      {
        patient_name: "Jane Smith",
        mobile_number: "987-654-3210",
        appointment_date: "2024-02-26",
        appointment_time: "11:30 AM",
        doctor: "Dr. Johnson",
        injury: "Back pain",
      },
      {
        patient_name: "Michael Johnson",
        mobile_number: "456-789-0123",
        appointment_date: "2024-02-26",
        appointment_time: "1:00 PM",
        doctor: "Dr. Lee",
        injury: "Headache",
      },
      {
        patient_name: "Emily Davis",
        mobile_number: "789-012-3456",
        appointment_date: "2024-02-26",
        appointment_time: "2:30 PM",
        doctor: "Dr. Patel",
        injury: "Sore throat",
      },
      {
        patient_name: "David Wilson",
        mobile_number: "321-654-9870",
        appointment_date: "2024-02-26",
        appointment_time: "4:00 PM",
        doctor: "Dr. Garcia",
        injury: "Fever",
      },
      {
        patient_name: "Sarah Brown",
        mobile_number: "654-321-0987",
        appointment_date: "2024-02-26",
        appointment_time: "5:30 PM",
        doctor: "Dr. Kim",
        injury: "Cough",
      },
    ],
  };
  return (
    <div>
      <h1 className="text-5xl mb-8 text-left">Today's Appointment List</h1>

      <table className="table-auto border px-4 mx-4 w-[100%]">
        <thead>
          <tr className="">
            <th>PATIENT</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>DOCTOR</th>
            <th>INJURY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {json.appointments.map((appointment, index) => (
            <tr key={index} className="border h-10 px-3 w-4">
              <td className="flex items-center pl-4">
                {/* Assuming you want to display patient_name and mobile_number */}
                <div className="bg-blue-800 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  {appointment.patient_name}
                  <p>{appointment.mobile_number}</p>
                </div>
              </td>
              <td>{appointment.appointment_date}</td>
              <td>{appointment.appointment_time}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.injury}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;
