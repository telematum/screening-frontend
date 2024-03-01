import React, { useEffect, useState, useMemo } from "react";
import TableInfo from "./TableInfo";
import { PATIENTS_URL } from "../BaseUrl/Api";
import TableHeading from "./TableHeading";

const Table = () => {
  const [patientInfo, setPatientInfo] = useState([]);

  useEffect(() => {
    fetchPatiendData();
  }, []);

  const fetchPatiendData = async () => {
    const response = await fetch(PATIENTS_URL);
    const res = await response.json();
    setPatientInfo(res.appointments);
  };

  const renderPatientInfo = useMemo(() => {
    return patientInfo.map((e,i) => (
      <TableInfo
        id={i}
        key={i}
        patientName={e.patient_name}
        mobileNumber={e.mobile_number}
        appointmentDate={e.appointment_date}
        appointmentTime={e.appointment_time}
        doctor={e.doctor}
        injury={e.injury}
      />
    ));
  }, [patientInfo]);

  return (
    <div className="bg-white-800 border-red border-2 p-3 my-4 rounded-xl overflow-x-auto">
      <div className="p-2">
        <div className="pb-4 text-gray-600 font-bold">
            <h2>Today's Appointment List</h2>
        </div>
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 rounded-2xl overflow-hidden">
            <TableHeading />
            <tbody>{renderPatientInfo}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
