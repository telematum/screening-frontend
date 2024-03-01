import React from 'react';

function Table() {
  const tableHeadings = ['Patients', 'Date', 'Time', 'Doctor', 'Injury', 'Action'];
  return (
    <div>
      <table>
        <tr>
          {tableHeadings.map((header, index) => (
            <th key={index} className="uppercase">
              {header}
            </th>
          ))}
        </tr>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
