import React from "react";

const TableHeading = () => {
  return (
    <thead className="text-xs text-gray-600 uppercase bg-[#f6f6f6] p-4">
      <tr>
        <th scope="col" className="py-6 px-4">
          Patients
        </th>
        <th scope="col" className="py-6 px-4">
          Date
        </th>
        <th scope="col" className="py-6 px-4">
          Time
        </th>
        <th scope="col" className="py-6 px-4">
          Doctor
        </th>
        <th scope="col" className="py-6 px-4">
          Injury
        </th>
        <th scope="col" className="py-6 px-4 text-center">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default TableHeading;
