import { ColumnProps } from "./types";

export const TableHeader = ({
  tableColumn,
}: {
  tableColumn: ColumnProps[];
}) => {
  return (
    <thead className="text-[14px] text-gray-500 uppercase bg-gray-200 h-16 ">
      <tr>
        {tableColumn.map((list,index) => {
          return (
            <>
              {list.renderHeader ? (
                <th
                  key={index}
                  scope="col"
                  className={`${list.headerStyle} px-6 py-3`}
                >
                  {list.renderHeader(list.id, list.label, list.name)}
                </th>
              ) : (
                <th
                  key={index}
                  scope="col"
                  className={`${list.headerStyle} px-6 py-3`}
                >
                  {list.label}
                </th>
              )}
            </>
          );
        })}
      </tr>
    </thead>
  );
};
