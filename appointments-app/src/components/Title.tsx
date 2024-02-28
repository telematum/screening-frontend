import React from "react";
import { FaSortAmountDown } from "react-icons/fa";
import Add from "./Add";

const Title: React.FC<{ getData: () => void; sortHandler: () => void }> = ({
  getData,
  sortHandler,
}) => {
  return (
    <div className="flex justify-between m-2">
      <span className="text-font">Today's Appointment List</span>
      <div className="flex justify-center">
        <Add onAddHandler={getData} />
        <button
          onClick={() => {
            sortHandler();
          }}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mx-3 rounded"
        >
          <FaSortAmountDown className="inline" /> SORT
        </button>
      </div>
    </div>
  );
};

export default Title;
