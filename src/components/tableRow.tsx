import { useState, useEffect } from 'react';

interface TableRowProps {
  patientName: string;
  patientPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  doctorName: string;
  patientInjury: string;
  countryCode: string;
}
const TableRow: React.FC<TableRowProps> = ({
  patientName,
  patientPhone,
  appointmentDate,
  appointmentTime,
  doctorName,
  patientInjury,
  countryCode
}: TableRowProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [color, setColor] = useState('');

  const handleActionClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlur = () => {
    setIsMenuOpen(false);
  };

  function getRandomSubtleColor() {
    const min = 100;
    const max = 200;

    const r = Math.floor(Math.random() * (max - min + 1) + min);
    const g = Math.floor(Math.random() * (max - min + 1) + min);
    const b = Math.floor(Math.random() * (max - min + 1) + min);

    const hexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    return hexColor;
  }
  useEffect(() => {
    const randomColor = getRandomSubtleColor();
    setColor(randomColor);
  }, []);

  return (
    <tr className="border-b last:border-b-0">
      <td className="p-1 px-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full text-white font-bold flex items-center justify-center`}
            style={{ backgroundColor: color }}>
            {patientName[0]}
          </div>

          <div>
            <p className="font-semibold text-gray-700">{patientName}</p>
            <p className="text-sm">
              {countryCode} {patientPhone}
            </p>
          </div>
        </div>
      </td>
      <td className="p-1">
        <div>
          <i className="fa-regular fa-calendar mr-1.5"></i> {appointmentDate}
        </div>
      </td>
      <td className="p-1">
        <div>
          <i className="fa-regular fa-clock mr-1.5"></i>
          {appointmentTime}
        </div>
      </td>
      <td className="p-1">
        <div className="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <circle cx="12" cy="12" r="11" fill="#66CB9F" />
            <path fill="white" d="M12 2l1.9 6.2H22l-5.9 4.2 2.3 7-6-4-6 4 2.4-7L2 8.2h7.1z" />
          </svg>
          {doctorName}
        </div>
      </td>
      <td className="p-1">
        <div className="bg-[#e4ecf7] rounded-lg px-3 py-1 w-fit text-xs font-medium cursor-pointer">
          {patientInjury}
        </div>
      </td>
      <td className="text-center p-1">
        <div className="flex justify-center">
          <button
            className="relative p-2 rounded-full"
            onClick={() => handleActionClick()}
            onBlur={() => handleBlur()}>
            <i className="fa-solid fa-ellipsis-vertical text-2xl text-gray-400"></i>
            {isMenuOpen && (
              <div
                className={`absolute right-0 bg-white shadow-lg rounded-lg p-2 z-20 overflow-hidden`}>
                <button className="w-full flex gap-2 items-center text-left hover:bg-gray-100 py-2 px-5 text-sm rounded-md text-gray-500">
                  <i className="fa-solid fa-pen-to-square"></i>
                  Edit
                </button>
                <button className="w-full flex gap-2 items-center text-left hover:bg-red-100 py-2 px-5 text-sm rounded-md text-red-500">
                  <i className="fa-solid fa-trash"></i>
                  Delete
                </button>
              </div>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
