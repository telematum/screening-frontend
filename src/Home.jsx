import React from "react";
import TableRow from "./Components/TableRow";
import { data } from "./sampleData";

const headings = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTION"];
const Home = () => {
  return (
    <>
      <div className="shadow-lg  m-10 rounded-lg p-10 overflow-x-auto border">
        <p className="font-semibold text-xl text-slate-500 text-violet-400">
          Today's Appointment List
        </p>
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
          <thead className=" text-xs  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-t-lg text-gray-400">
            {/* column headings */}
            <tr>
              {headings.map((item, index) => (
                <th className="p-8" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <TableRow key={index} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
