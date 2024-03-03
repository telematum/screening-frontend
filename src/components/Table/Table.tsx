import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

const Table: React.FC = () => {
  return (
    <div
      className="table-container overflow-auto rounded-[28px] mt-6"
      style={{ maxHeight: "100%", height: "calc(100% - 5rem)" }}
    >
      <table className="w-full">
        <TableHeading />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
