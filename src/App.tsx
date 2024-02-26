import { useEffect, useState } from "react";

interface Patient {
  patient_name: string;
  mobile_number: string;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
}

const tableHeader = ["patients", "date", "time", "doctor", "injury", "action"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [appointmentList, setAppointmentList] = useState<Patient[]>([]);

  const handleActionClick = (id: string) => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedPatient(id);
  };

  const handleButtonBlur = () => {
    setIsMenuOpen(false);
    setSelectedPatient(null);
  };

  useEffect(() => {
    const fetchGistData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        const data = await response.json();
        setAppointmentList(data.appointments);
      } catch (error) {
        console.error("Error fetching Gist data:", error);
      }
    };

    fetchGistData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-md overflow-hidden border-b border-gray-200 p-4 rounded-2xl">
            <h1 className="text-[#676F93] font-semibold mb-5">
              Today's Appointment List
            </h1>
            <table className="min-w-full divide-y divide-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-[#FAFAFB]">
                <tr>
                  {tableHeader.map((header, index) => (
                    <th
                      key={header}
                      scope="col"
                      className={`px-6 py-3 ${
                        index === tableHeader.length - 1
                          ? "text-center"
                          : "text-left"
                      } text-xs font-medium text-[#929FB0] uppercase tracking-wider"`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 min-w-full">
                {appointmentList?.map((patient, index) => (
                  <tr key={patient.patient_name} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="rounded-full h-9 w-9 bg-red-400" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#393940]">
                            {patient.patient_name}
                          </div>
                          <div className="text-xs text-[#7b8693]">
                            {patient.mobile_number}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#676F93]">
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-calendar"></i>
                        <div className="text-sm">
                          {patient.appointment_date}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#676F93]">
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-clock"></i>
                        <div className="text-sm">
                          {patient.appointment_time}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#676F93]">
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-star text-white bg-[#66CB9F] p-[3px] text-[12px] rounded-full border-[#676F93]"></i>
                        <div className="text-sm">{patient.doctor}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xs bg-[#E4ECF7] px-3 py-1 text-center rounded-lg text-[#676F93] font-bold w-fit">
                        {patient.injury}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <button
                          className="relative  hover:bg-gray-100 p-2 rounded-full"
                          onClick={() =>
                            handleActionClick(patient.patient_name)
                          }
                          onBlur={() => handleButtonBlur()}
                        >
                          <i className="fa-solid fa-ellipsis-vertical text-gray-400 text-xl"></i>
                          {isMenuOpen &&
                            selectedPatient === patient.patient_name && (
                              <div
                                className={`absolute ${
                                  index === appointmentList.length - 1
                                    ? "bottom-8"
                                    : "bottom-100%"
                                } right-0 bg-white shadow-lg rounded-lg overflow-hidden p-2 z-20`}
                              >
                                <button className="w-full flex gap-2 items-center text-left hover:bg-gray-100 py-2 px-4 text-sm rounded-md text-[#676F93]">
                                  <i className="fa-solid fa-pen-to-square"></i>
                                  Edit
                                </button>
                                <button className="w-full flex gap-2 items-center text-left text-red-500 hover:bg-red-100 py-2 px-4 text-sm rounded-md">
                                  <i className="fa-solid fa-trash"></i>
                                  Delete
                                </button>
                              </div>
                            )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
