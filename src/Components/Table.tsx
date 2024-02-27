import { useTableData } from "../utils/DataFetch";
import calendarIcon from "../assets/calendarIcon.png";
import clockIcon from "../assets/clockIcon.png";
import greenStarIcon from "../assets/greenStarIcon.png";
import verticalDots from "../assets/verticalDots.png";

type TableProps = {
  heading: string;
  dataURL: string;
  tableHeadings: string[];
};

type Appointment = {
  patient_name: string;
  mobile_number: string;
  injury: string;
  doctor: string;
  appointment_time: string;
  appointment_date: string;
};

const Table: React.FC<TableProps> = ({ heading, dataURL, tableHeadings }) => {
  const { status, data } = useTableData(dataURL);
  console.log(status);
  console.log(data);

  return (
    <div className="border border-borderGray p-5 rounded-xl flex flex-col gap-5">
      <h1 className="font-bold text-tableHeading">{heading}</h1>
      <div className="w-full overflow-x-auto rounded-lg text-left">
        {status === "pending" && <p>Please Wait. We are Getting the data fpr you ✨</p>}
        {status === "success" && (
          <table>
            <thead className="uppercase bg-gray-100">
              <tr>
                {tableHeadings.map((heading) => (
                  <th key={heading} scope="col" className="px-6 py-3 text-xs font-medium text-headingRowIem">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.appointments.map((appointment: Appointment) => (
                <tr key={appointment.patient_name} className="text-sm border-b border-tableSeparator">
                  <th scope="row" className="px-6 py-4 text-sm flex items-center gap-2">
                    <div>
                      <p className="w-9 h-9 rounded-full bg-red-300"></p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium">{appointment.patient_name}</p>
                      <p className="text-xs font-medium text-mobileText">+{appointment.mobile_number}</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-grayTableText font-medium">
                    <div className="flex items-center gap-1">
                      <img src={calendarIcon} alt="calendar-icon" className="w-4 h-4" />
                      <p>
                        {new Date(appointment.appointment_date).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-grayTableText font-medium">
                    <div className="flex items-center gap-1">
                      <img src={clockIcon} alt="clock-icon" className="w-4 h-4" />
                      <p>{appointment.appointment_time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-grayTableText font-medium">
                    <div className="flex gap-1 items-center">
                      <img src={greenStarIcon} alt="gree-star-icon" className="w-4 h-4" />
                      <p>{appointment.doctor}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-grayTableText bg-pillBG text-[10px] w-max text-center font-bold rounded-lg py-1 px-2">
                      {appointment.injury}
                    </p>
                  </td>
                  <td className="text-center text-grayTableText">
                    <button>
                      <img src={verticalDots} alt="menu-itom" className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
