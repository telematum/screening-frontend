import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./table";

const url =
  "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

const Appointment = () => {
  const [appointmentData, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url);
        const data = await res.data.appointments;
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <table className="table-auto w-full rounded-xl overflow-hidden">
      <thead className="bg-gray-50 text-left text-gray-500">
        <tr>
          <th className="pl-4 py-4">PATIENTS</th>
          <th>DATE</th>
          <th>TIME</th>
          <th>DOCTOR</th>
          <th>INJURY</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <Table appointmentData={appointmentData} />
      </tbody>
    </table>
  );
};

export default Appointment;
