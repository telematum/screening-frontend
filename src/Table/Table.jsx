import React, { useEffect, useState } from "react";

export default function CustomTable({
  isLoading = true,
  columns,
  rawData = [],
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full ">
        <thead className="whitespace-nowrap">
          <tr className="bg-gray-50 border-b  border-gray-200">
            {columns.map((header, index) => (
              <th
                key={index}
                className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider"
              >
                {header.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 whitespace-nowrap">
          {data.length === 0 && isLoading ? (
            <tr className="w-full">
              <td className="py-4" colSpan={columns.length}>
                <div className="border border-blue-300 shadow rounded-md p-4  w-full mx-auto">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </td>
            </tr>
          ) : (
            data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-100 whitespace-nowrap"
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-2 whitespace-nowrap text-sm text-gray-500"
                  >
                    {column.rowCell({ row })}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
