import { TableHeadPropsTypes } from "./types";

const TableHead = ({ headData }: TableHeadPropsTypes) => {
  return (
    <thead className="text-xs text-[#a2a4aa] uppercase bg-[#fafafa]">
      <tr>
        {headData.map((data: string) => (
          <th className="px-3 py-5" key={data}>{data}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
