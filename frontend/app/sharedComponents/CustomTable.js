import React from "react";

const CustomTable = ({ data, columns, stickyHeader, stickyColumn }) => {
  return (
    <div className="overflow-x-auto mx-auto w-4/5">
      <table className="table-auto divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr
            className={`rounded bg-gray-200 ${stickyHeader && "sticky top-0"}`}
          >
            {columns.map(({ header }, index) => (
              <th
                key={index}
                className={`${stickyColumn && index === 0 && "sticky left-0 bg-gray-200"} px-4 py-2`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${stickyColumn && rowIndex === 0 && "sticky left-0"} px-4 py-2`}
            >
              {columns.map(({ accessor, render }, columnIndex) => (
                <td
                  key={columnIndex}
                  className={`${stickyColumn && columnIndex === 0 && "sticky left-0 bg-white z-10"} border px-4 py-2`}
                >
                  {render ? render(row) : row[accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
