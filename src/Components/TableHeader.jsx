function TableHead() {
  return (
    <tr className=" bg-gray-50  py-4 text-left uppercase text-gray-400">
      <th className="w-64 rounded-tl-xl px-6 py-4 text-xs font-bold">
        Patients
      </th>
      <th className="w-48 px-6 py-4 text-xs font-bold">Date</th>
      <th className="w-36 px-6 py-4 text-xs font-bold">Time</th>
      <th className="w-44 px-6 py-4 text-xs font-bold">Doctor</th>
      <th className="w-40 px-6 py-4 text-xs font-bold">Injury</th>
      <th className=" rounded-tr-xl px-6 py-4 text-xs font-bold">Action</th>
    </tr>
  );
}

export default TableHead;
