import React, { useEffect, useState } from "react";
import TableContent from "../Components/TableContent";

// Table Titles
const titles = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTION"];

const Home = () => {
  // eslint-disable-next-line no-undef
  const API_URL = process.env.REACT_APP_API_URL;
  // state declaration for table
  const [tableData, setTableData] = useState(null);
  const [err, setErr] = useState(false);

  // API call to fetch data from provided url
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setTableData(jsonData);
        setErr(false);
      } catch (error) {
        error && setErr(true);
      }
    };
    fetchData();
  }, [API_URL,err]);

  return (
    <div className="overflow-x-auto">
      <div className="border rounded-lg border-gray-400 pt-8 p-4">
        {!err && (
          <>
            <div className="text-xl font-bold">
              <p className="text-gray-500 text-left p-4">
                Today&apos;s Appointments List
              </p>
            </div>
            <div className="relative p-4">
              <TableContent tableData={tableData} titles={titles} />
            </div>
          </>
        )}
        {err && <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>}
      </div>
    </div>
  );
};

export default Home;
