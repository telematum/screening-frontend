import { useState, useEffect } from "react";
import TableHead from "../Section/TableHead";
import TableBody from "../Section/TableBody";

const TableList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      let api = await fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      let response = await api.json();
      setData(response);
    }
    getData();
  }, []);
  return (
    <div>
      <table className="table-auto w-full rounded-2xl overflow-hidden text-left">
        <TableHead />
        <tbody>
          {data?.appointments.map((appointment, index) => (
            <TableBody
              data={appointment}
              key={appointment.mobile_number}
              orange={index === 3 || index === 4 ? true : false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
