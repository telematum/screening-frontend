import { headings } from "../../utils";

const TableHeading: React.FC = () => {
  return (
    <>
      <thead className="sticky top-0 bg-gray-50">
        <tr className="">
          {headings.map((item, index) => (
            <th key={index} className="text-left text-gray-500 font-normal p-4">
              {item}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeading;
