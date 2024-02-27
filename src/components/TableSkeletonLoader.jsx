import { Calendar, Clock4, MoreVertical, Star } from "lucide-react";

const TableSkeletonLoader = () => {
  return Array.from("abcde").map((e, i) => {
    return (
      <tr key={e + i} className="border-b">
        <td className="px-4 py-2">
          <div className="rounded-md flex items-center gap-2 flex-row p-3 max-w-sm w-full mx-auto">
            <div className="h-8 w-8 rounded-full bg-slate-300 "></div>
            <div className="h-8 w-52 bg-slate-300 rounded"></div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Calendar strokeWidth={1.5} size={20} className="opacity-30" />
            <div className="h-6 w-20 bg-slate-300 rounded"></div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Clock4 strokeWidth={1.5} size={20} className="opacity-30" />{" "}
            <div className="h-6 w-20 bg-slate-300 rounded"></div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Star strokeWidth={1.5} className="opacity-30" size={20} />{" "}
            <div className="h-6 w-20 bg-slate-300 rounded"></div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-20 bg-slate-300 rounded"></div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex justify-center">
            <button className="flex items-center gap-2">
              <MoreVertical size={20} className="opacity-30" />
            </button>
          </div>
        </td>
      </tr>
    );
  });
};

export default TableSkeletonLoader;
