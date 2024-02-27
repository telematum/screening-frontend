import React from "react";
import { useTable } from "react-table";
import { classNames } from "./common";

// Renamed the component to use camelCase
export function InjuryPill({ value }) {
  const injuryType = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-lg shadow-sm bg-blue-100 text-gray-500"
      )}
    >
      {injuryType}
    </span>
  );
}

// Renamed variables and made some minor adjustments
export function AvatarCell({ value, column, row }) {
  const { imgAccessor, phone } = column;
  const { original } = row;

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={original[imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{original[phone]}</div>
      </div>
    </div>
  );
}

// Renamed the component to use camelCase and made some minor adjustments
function CustomTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="mt-4 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        {...column.getHeaderProps(column)}
                      >
                        <div className="flex items-center justify-between">
                          {column.render("Header")}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={rowIndex}>
                      {row.cells.map((cell, cellIndex) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap"
                          role="cell"
                          key={cellIndex}
                        >
                          {cell.column.Cell.name === "defaultRenderer" ? (
                            <div className="text-sm text-gray-500">
                              {cell.render("Cell")}
                            </div>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
