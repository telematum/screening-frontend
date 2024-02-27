import { RiCalendarTodoFill } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { getFormattedDate, getFormattedMobileNo } from "../../utils/helper";
import { tableBodyPropsTypes } from "./types";
import { IMAGE_BASE_URL } from "../../utils/constant";

const TableBody = ({ appointment }: tableBodyPropsTypes) => {
  return (
    <tr className="border-t">
      <td className="flex px-3 py-2 gap-2 items-center">
        <img
          src={IMAGE_BASE_URL}
          alt={appointment?.patient_name}
          className="h-10 w-10 rounded-full"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-bold text-black">
            {appointment?.patient_name}
          </span>
          <span className="text-[12px]">
            {getFormattedMobileNo(appointment?.mobile_number)}
          </span>
        </div>
      </td>
      <td className="px-3 font-semibold text-base">
        <div className="flex gap-2 items-center">
          <RiCalendarTodoFill />
          <span>{getFormattedDate(appointment?.appointment_date)}</span>
        </div>
      </td>
      <td className="px-3 font-semibold text-base">
        <div className="flex gap-2 items-center">
          <BsClockHistory />
          {appointment?.appointment_time}
        </div>
      </td>
      <td className="px-3 font-semibold text-base">{appointment?.doctor}</td>
      <td className="px-3">
        <span className="text-[12px] px-3 py-[6px] rounded-md bg-[#e4edf6] text-[#5f687a] font-semibold">
          {appointment?.injury}
        </span>
      </td>
      <td className="font-semibold text-base">
        <span className="cursor-pointer flex justify-center">
          <HiOutlineDotsVertical cursor={"pointer"} />
        </span>
      </td>
    </tr>
  );
};

export default TableBody;
