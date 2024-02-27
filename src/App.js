import { useEffect, useState } from "react";
import getData from "./getData";
import { Patients } from "./patients";
import { Appointment } from "./appointment";
import { Doctor } from "./doctor";
import { Action } from "./action";
import { Injury } from "./injury";
import { Headers } from "./headers";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ setData });
  }, []);

  return (
    <div className="flex flex-col h-full w-content p-5 border border-slate-100 m-5 rounded-3xl">
      <b className="text-slate-600 p-5">Today's Appointment List</b>
      <div className="w-full text-center">
        <div>
          <Headers />
        </div>
        <div>
          {data.map((data_row) => {
            return (
              <div
                className="flex text-center border-t-2 border-slate-200"
                key={data_row.patient_name}
              >
                <Patients data_row={data_row} />
                <Appointment data_row={data_row} />
                <Doctor data_row={data_row} />
                <Injury data_row={data_row} />
                <Action />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
