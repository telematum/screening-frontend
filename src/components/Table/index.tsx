type TableProps = {
  headers: string[];
  rows: TableRowData[] | undefined;
};

type TableRowData = {
  [key: string]: JSX.Element | string;
};

export default function Table({ headers, rows }: TableProps) {
  return (
    <div className="py-2 overflow-x-auto">
      <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg">
        <table className="min-w-full">
          <TableHeader headers={headers} />
          <tbody className="bg-white">
            {rows?.map((rowData, index) => (
              <TableRow key={index} rowData={rowData} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableHeader({ headers }: { headers: string[] }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className="px-6 py-5 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow({ rowData }: { rowData: TableRowData }) {
  return (
    <tr>
      {Object.values(rowData).map((cell, index) => (
        <td
          key={index}
          className="px-6 py-4 whitespace-no-wrap border-b border-gray-150 text-nowrap"
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}
