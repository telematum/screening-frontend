import { AppointmentType } from "@/utils/dataType";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineTimer, MdStars } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";

const TableBody = ({
  data,
  index,
}: {
  data: AppointmentType;
  index: number;
}) => {
  const {
    patient_name,
    mobile_number,
    doctor,
    injury,
    appointment_date,
    appointment_time,
  } = data;
  return (
    <tr>
      <td className="px-6 py-2 md:px-6 md:py-4 td text-gray-800 dark:text-gray-200 flex items-center">
        <div
          className={`w-12 h-12  rounded-full mr-4 ${
            index % 2 ? "bg-gray-400" : "bg-stone-500"
          }`}
        ></div>
        <div className="">
          <p className="font-bold capitalize">{patient_name}</p>
          <p className=" text-xs text-gray-500 dark:text-gray-400">
            +{mobile_number}
          </p>
        </div>
      </td>
      <td className="px-6 py-2 md:px-6 md:py-4 td ">
        <FcCalendar className="inline mb-0.5 mr-2 " />
        {appointment_date}
      </td>
      <td className="px-6 py-2 md:px-6 md:py-4 td  ">
        <MdOutlineTimer className="inline mb-0.5 mr-2" />
        {appointment_time}
      </td>
      <td className="px-6 py-2 md:px-6 md:py-4 td capitalize">
        <MdStars
          className={`inline mb-0.5 mr-2  ${
            index % 2 ? "text-orange-500" : "text-green-600"
          }`}
        />
        {doctor}
      </td>
      <td className="px-4 py-3 td">
        <p className="bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-100 font-bold text-sm max-w-fit p-1 px-2 rounded-lg">
          {injury}
        </p>
      </td>
      <td className="text-center">
        <FaEllipsisVertical className="inline-block" />
      </td>
    </tr>
  );
};

export default TableBody;
