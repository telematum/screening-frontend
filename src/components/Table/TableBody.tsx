import { data } from "../../utils";
import { Calendar, CircleUser, Clock9, MoreVertical, Star } from "lucide-react";

const TableBody: React.FC = () => {
  return (
    <tbody className="bg-white px-4">
      {data.map((item, index) => (
        <tr
          key={index}
          className="hover:bg-gray-50 border-bg-blue-200 border-b "
        >
          <div className="px-4">
            <td className="flex items-center gap-3">
              <CircleUser color="rgb(102,203,159)" width={40} height={42} />
              <div className="flex flex-col">
                {item.patient_name}
                <br />
                <p className="text-gray-400 text-sm">{item.mobile_number}</p>
              </div>
            </td>
          </div>

          <td>
            <div className="flex items-center gap-2">
              <Calendar color="gray" />
              <p className="text-gray-700">{item.appointment_date}</p>
            </div>
          </td>
          <td>
            <div className="flex items-center gap-2">
              <Clock9 color="gray" />
              <p className="text-gray-700">{item.appointment_time}</p>
            </div>
          </td>
          <td>
            <div className="flex items-center gap-2">
              <Star color="rgb(102,203,159)" />
              <p className="text-gray-700">{item.doctor}</p>
            </div>
          </td>
          <td>
            <div className="flex items-center gap-2 ">
              <p className="bg-blue-200 border w-24 text-center py-[2px] rounded-md">
                {item.injury}
              </p>
            </div>
          </td>
          <td>
            <div className="flex px-8 cursor-pointer">
              <MoreVertical color="gray" width={30} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
