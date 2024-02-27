/* eslint-disable react/prop-types */
const TableBody = ({ rows }) => {
  return (
    <tbody className="divide-y divide-slate-200">
      {rows.map((row, index) => {
        return (
          <tr className="hover:bg-slate-50 duration-300" key={row.id}>
            {row.columns.map((column) => {
              return (
                <td className="text-slate-500" key={column.accessor}>
                  {column.renderCell({ row: row.data, id: index })}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
