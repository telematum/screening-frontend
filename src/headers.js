export const Headers = () => {
  const headers = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTION"];

  return (
    <div className="flex bg bg-slate-50 rounded-t-xl hover:bg-slate-100">
      {headers.map((header) => (
        <div key={header} className="p-4 text-slate-400 grow">
          {header}
        </div>
      ))}
    </div>
  );
};
