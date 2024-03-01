import PropTypes from "prop-types";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const TableRow = ({ appointment, index }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src={`https://randomuser.me/api/portraits/thumb/men/${
              index + 1
            }.jpg`}
            alt={appointment.patient_name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-semibold">{appointment.patient_name}</div>
            <div className="text-sm text-gray-600">
              {appointment.mobile_number}
            </div>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <FaRegCalendarCheck className="text-gray-500" />
          <span>{appointment.appointment_date}</span>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <BsClockHistory className="text-gray-600" />
          <span>{appointment.appointment_time}</span>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-xl text-green-400">
            <MdStars />
          </span>
          <span>{appointment.doctor}</span>
        </div>
      </td>
      <td className="p-4">
        <span className="rounded-md bg-slate-200 py-2 px-4 text-xs font-bold">
          {appointment.injury}
        </span>
      </td>
      <td className="p-4">
        <div className="relative left-4 hover:cursor-pointer text-gray-400">
          <BsThreeDotsVertical />
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  appointment: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TableRow;
