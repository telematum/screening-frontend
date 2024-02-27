import { TAppointment } from "./types";
import { HiDotsVertical } from "react-icons/hi";
import UserImg from "../assets/user.png";
import { PiClockCountdownLight } from "react-icons/pi";
import { TbCalendarEvent } from "react-icons/tb";
import { MdStars } from "react-icons/md";

function TableList(props: TAppointment) {
  const {
    appointment_date,
    appointment_time,
    doctor,
    injury,
    mobile_number,
    patient_name,
  } = props;
  return (
    <div className="custom-grid items-center border-t-2 border-[#F1F5F8] text-[#5b626a] px-6 py-3">
      <div className="flex gap-2">
        <img className="w-12 h-12 rounded-full" src={UserImg} alt="" />
        <div className="truncate">
          <p className="text-black font-semibold truncate">{patient_name}</p>
          <p className="text-[#87929D] text-sm truncate">+{mobile_number}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <TbCalendarEvent className="text-2xl" />
        <p className="sm:text-lg truncate">{appointment_date}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <PiClockCountdownLight className="text-2xl" />
        <p className="sm:text-lg truncate">{appointment_time}</p>
      </div>
      <div className="flex gap-1.5 items-center">
        <MdStars className="text-2xl text-[#66CB9F]" />
        <p className="sm:text-lg truncate">{doctor}</p>
      </div>
      <div className="">
        <p className="bg-[#E3ECF7] truncate text-sm text-[#505881] w-max p-1.5 rounded-lg px-3 font-bold">
          {injury}
        </p>
      </div>
      <div className="flex justify-center text-[#DAE3F0] text-3xl">
        <HiDotsVertical className="cursor-pointer" />
      </div>
    </div>
  );
}

export default TableList;
