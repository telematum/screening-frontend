import Row, { Appointment } from "./row";

type Header = "PATIENTS" | "DATE" | "TIME" | "DOCTOR" | "INJURY" | "ACTION";

interface AppointmentTableProps {
  data: Appointment[];
}

interface HeaderProps {
  headers: Header[];
}

const Header: React.FC<HeaderProps> = ({ headers }) => {
  return (
    <div className="w-full flex justify-between text-sm text-gray-400 bg-gray-50 p-4  rounded-t-xl gap-1">
      {headers.map((header) => (
        <span className="w-48" key={header}>
          {header}
        </span>
      ))}
    </div>
  );
};
const headerTitles: Header[] = [
  "PATIENTS",
  "DATE",
  "TIME",
  "DOCTOR",
  "INJURY",
  "ACTION",
];
const AppointmentTable: React.FC<AppointmentTableProps> = ({ data }) => {
  return (
    <div className="w-full p-6">
      <Header headers={headerTitles} />
      <div className="w-full flex flex-col gap-2 p-4">
        {data.map((appointment) => (
          <Row data={appointment} key={appointment.mobile_number} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentTable;
