import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./header";
import Card from "./card";
import PatientList from "./patientList";
import { fetchData } from "./service";

const App = () => {
  const [patientList, setPatientList] = useState();

  useEffect(() => {
    async function getData() {
      const patientList = await fetchData();
      setPatientList(patientList);
    }

    getData();
  }, []);

  return (
    <Card>
      <div className="my-4 ml-10 mr-10">
        <Header>Today's Appointment List</Header>
        {patientList && patientList.length > 0 ? (
          <PatientList patientList={patientList} />
        ) : (
          <div className="text-red-600 text-center text-lg font-bold">
            PatientList is Empty
          </div>
        )}
      </div>
    </Card>
  );
};

export default App;
