export const Injury = ({ data_row: { injury } }) => {
  return (
    <div className="w-1/6 m-2 p-2 flex items-center place-content-center">
      <div className="flex bg bg-slate-200 text-center w-fit h-fit p-2 rounded-xl">
        {injury}
      </div>
    </div>
  );
};
