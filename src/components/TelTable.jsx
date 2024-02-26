import React from "react";
import { useTable } from "react-table";

function TelTable({ columns, data }) {
  const {  headerGroups, rows, prepareRow, getTableProps, getTableBodyProps, } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className="table-auto w-full rounded-3xl overflow-hidden"
      >
        <thead className="bg-gray-100 border-b ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-6 text-[#666] text-[14px] text-left uppercase"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`border-b border-gray-200 ${
                  rowIndex === rows.length - 1 ? "border-b-0" : ""
                }`}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TelTable;
