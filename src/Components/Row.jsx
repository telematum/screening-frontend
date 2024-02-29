import { IoIosStar, IoMdMore, IoMdCalendar } from 'react-icons/io';
import { BsClockHistory } from 'react-icons/bs';

function Row({ appointment }) {
  const {
    patient_name,
    mobile_number,
    appointment_date,
    appointment_time,
    doctor,
    injury,
  } = appointment;

  function dateFormate(appointment_date) {
    const date = new Date(appointment_date);

    const month = date.toLocaleString('en-IN', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }
  function generateRandomColor() {
    const R = Math.trunc(Math.random() * 255) + 1;
    const G = Math.trunc(Math.random() * 255) + 1;
    const B = Math.trunc(Math.random() * 255) + 1;

    return `#${R.toString(16)}${G.toString(16)}${B.toString(16)}`;
  }

  return (
    <tr className="border-t-2 border-gray-50">
      <td className="flex items-center gap-2 px-6 py-3">
        <div
          className="h-10 w-10 rounded-full border-2 border-gray-200"
          style={{ backgroundColor: generateRandomColor() }}
        ></div>
        <div className="text-sm leading-4 ">
          <p className="font-bold text-gray-600">{patient_name}</p>
          <p className="text-xs text-gray-400/80">+{mobile_number}</p>
        </div>
      </td>

      <td className="px-6 py-3">
        <div className="flex items-center gap-1">
          <IoMdCalendar />
          <p>{dateFormate(appointment_date)}</p>
        </div>
      </td>

      <td className="px-6 py-3">
        <div className="flex items-center gap-1">
          <BsClockHistory />
          <p>{appointment_time.padStart(8, 0)}</p>
        </div>
      </td>

      <td className=" px-6 py-3">
        <div className="flex items-center gap-1">
          <span className="flex items-center justify-center rounded-full bg-green-400 p-1">
            <IoIosStar color="white" size="9px" />
          </span>
          <p>{doctor}</p>
        </div>
      </td>

      <td className="px-6 py-3">
        <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500">
          {injury}
        </span>
      </td>
      <td className=" px-6 py-3">
        <div className="flex justify-center">
          <IoMdMore size="22px" />
        </div>
      </td>
    </tr>
  );
}

export default Row;
