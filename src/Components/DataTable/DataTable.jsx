import React from "react";
import { format } from "date-fns";

const DataTable = ({ tableHeader, tableData, svgs }) => {
  const { clockSvg, dateSvg, starSvg, moreIconSvg } = svgs;

  const formattedDate = (inputDate) => {
    const date = new Date(inputDate);
    return format(date, "dd MMM yyyy");
  };
  return (
    <>
      <table className="w-full">
        <thead className="border-b-2 border-gray-100">
          <tr>
            {tableHeader.map((header, idx) => (
              <th key={idx} className="p-3 text-sm text-slate-400 text-left">
                <p>{header}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, idx) => (
            <tr key={idx}>
              <td className="p-3 text-sm text-gray-700 flex items-center gap-x-2 whitespace-nowrap">
                <div className="inline-block h-10 w-10 rounded-full bg-slate-500"></div>
                <div>
                  <p className="font-bold">{item.patient_name}</p>
                  <p className="font-light">{item.mobile_number}</p>
                </div>
              </td>
              <td className="p-3 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                  {dateSvg}
                  <p className="font-medium text-gray-500">
                    {formattedDate(item.appointment_date)}
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                  {clockSvg}
                  <p className="font-medium text-gray-500">
                    {item.appointment_time}
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                  {starSvg}
                  <p className="font-medium text-gray-500">{item.doctor}</p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  <p>{item.injury}</p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {moreIconSvg}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
