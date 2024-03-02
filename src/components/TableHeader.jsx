import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ objects }) => (
  <thead className="px-4 py-6">
    <tr>
      {objects.map((object, index) => (
        <th
          key={index}
          className="text-gray-500 w-[250px] py-4 text-[14px] font-bold"
        >
          {object}
        </th>
      ))}
    </tr>
  </thead>
);
TableHeader.propTypes = {
  objects: PropTypes.array.isRequired,
};

export default TableHeader;
