/* eslint-disable react/prop-types */
const TableHeader = ({ headers }) => {
  return (
    <thead className="bg-slate-50 border-b border-slate-200">
      <tr>
        {headers.map((header) => {
          return (
            <th
              className="p-4 text-left uppercase text-slate-500 text-[10px] font-semibold"
              key={header.accessor}
            >
              {header.header()}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
