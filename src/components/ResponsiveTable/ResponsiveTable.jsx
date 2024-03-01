import PropTypes from "prop-types";

const ResponsiveTable = ({ columns, children }) => {
  return (
    <div className="realtive rounded-2xl overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-left text-xs font-medium text-gray-400 uppercase">
          <tr>
            {columns?.map((column) => {
              return (
                <th key={column} scope="col" className="p-4">
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
      </table>
    </div>
  );
};

ResponsiveTable.propTypes = {
  columns: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ResponsiveTable;
