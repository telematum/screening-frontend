import { useState } from "react";

const appointmentList = [
  {
    id: 1,
    name: "Pankaj Singh",
    contact: "+152 1234 567",
    date: "20 Jan 2024",
    Time: "10:18",
    doctor: "Dr. Sarah Smith",
    injury: "Fever",
    image: "https://bit.ly/3vaOTe1",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Cara Stevens",
    contact: "+152 1234 567",
    date: "20 Jan 2024",
    Time: "10:18",
    doctor: "Dr. Rajesh",
    injury: "Malaria",
    image: "https://bit.ly/3I9nL2D",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Pooja Patel",
    contact: "+152 1234 567",
    date: "20 Jan 2024",
    Time: "10:18",
    doctor: "Dr. Megha Trivedi",
    injury: "Cholera",
    image: "https://bit.ly/33HnjK0",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Megha Trivedi",
    contact: "+152 1234 567",
    date: "20 Jan 2024",
    Time: "10:18",
    doctor: "Dr. Rajesh",
    injury: "Fever",
    image:
      "https://files.strengthsprofile.com/Testimonials/Images/Strengths_Profile_testimonial_98_image.png?v=637424298494292838",
    isAvailable: false,
  },
  {
    id: 5,
    name: "John Doe",
    contact: "+152 1234 567",
    date: "20 Jan 2024",
    Time: "10:18",
    doctor: "Dr. Cara Stevens",
    injury: "Cholera",
    image:
      "https://www.ultimatebeaver.com/wp-content/uploads/bb-plugin/cache/photo-gallery-img-02-circle.jpg",
    isAvailable: false,
  },
  {
    id: 6,
    name: "Nasir Uddin",
    contact: "+152 1234 567",
    date: "20 Jan 2024",
    Time: "10:18",
    doctor: "Dr. Rajesh",
    injury: "Fever",
    image: "http://thepointe.uk/assets/img/team/5.jpg",
    isAvailable: true,
  },
];

const tableHeader = ["patients", "date", "time", "doctor", "injury", "action"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleActionClick = (id: number) => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedId(id);
  };

  const handleButtonBlur = () => {
    setIsMenuOpen(false);
    setSelectedId(null);
  };
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
                {appointmentList.map((patient, index) => (
                  <tr key={patient.name} className="table-row">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-9 w-9">
                          <img
                            className="h-9 w-9 rounded-full object-cover"
                            src={patient.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#393940]">
                            {patient.name}
                          </div>
                          <div className="text-xs text-[#7b8693]">
                            {patient.contact}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#676F93]">
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-calendar"></i>
                        <div className="text-sm">{patient.date}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#676F93]">
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-clock"></i>
                        <div className="text-sm">{patient.Time}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#676F93]">
                      <div className="flex items-center gap-2">
                        <i
                          className={`fa-solid fa-star text-white ${
                            patient.isAvailable
                              ? "bg-[#66CB9F]"
                              : "bg-[#FAB592]"
                          } p-[3px] text-[12px] rounded-full border-[#676F93]`}
                        ></i>
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
                          onClick={() => handleActionClick(patient.id)}
                          onBlur={() => handleButtonBlur()}
                        >
                          <i className="fa-solid fa-ellipsis-vertical text-gray-400 text-xl"></i>
                          {isMenuOpen && selectedId === patient.id && (
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
