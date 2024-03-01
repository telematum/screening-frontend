import { SlCalender, SlOptionsVertical } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { GiAlliedStar } from "react-icons/gi";

export interface Appointment {
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
  mobile_number: string;
  patient_name: string;
}

interface RowProps {
  data: Appointment;
}

const Row: React.FC<RowProps> = ({ data }) => {
  return (
    <div className="flex justify-between text-sm text-gray-500 gap-1 px-4 py-2">
      <div className="flex items-center gap-1 w-48">
        <div className="h-8 w-8 rounded-full bg-black"></div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-black">
            {data.patient_name}
          </span>
          <span className="text-[11px]">{`+${data.mobile_number}`}</span>
        </div>
      </div>
      <div className="flex gap-1 items-center w-48">
        <SlCalender />
        <span>{data.appointment_date}</span>
      </div>
      <div className="flex gap-1 items-center w-48">
        <CiClock2 size={16} />
        <span>{data.appointment_time}</span>
      </div>
      <div className="flex gap-1 items-center w-48">
        <GiAlliedStar size={16} color="#63e6be" />
        <span>{data.doctor}</span>
      </div>
      <div className=" w-48 p-2 flex justify-start">
        <span className="bg-slate-200 text-black py-1 px-2 rounded-md text-xs">
          {data.injury}
        </span>
      </div>
      <div className="w-48 px-6 py-3">
        <SlOptionsVertical />
      </div>
    </div>
  );
};

export default Row;
