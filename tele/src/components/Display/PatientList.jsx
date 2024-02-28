import React, {useState, useEffect} from "react";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faStar } from "@fortawesome/free-regular-svg-icons";

const PatientList = (props) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [patientData, setPatientData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setPatientData([
        // Your patient data here
      ]);
      setIsLoading(false);
    }, 2000); // Simulate a delay
 }, []);

 if (isLoading) {
   return <Loading />;
 }

  const formatDate = (dateString) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day}-${monthNames[monthIndex]}-${year}`;
  };
   // Function to handle doctor selection

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor)
  }
  return (
    <React.Fragment>
      {props.patientData.map((data) => {
        return (
          <tbody className="flex py-[10px] px-3 rounded" key={data.id}>
            <tr className="flex gap-5 w-full">
              <td className="flex flex-col items-start flex-1 font-px-regular text-[14px]  leading-5 text-[#146EB4]">
                <div className="flex items-center">
                  <span className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center mr-2"></span>
                  <div className="flex flex-col">
                    <div className="font-bold text-black">{data.name}</div>
                    <div className="text-gray-500 text-sm">{data.mobile}</div>
                  </div>
                </div>
              </td>
              <td className="flex flex-1 justify-center gap-4 font-px-regular text-[15px] text-gray-700 font-regular leading-5">
                <FontAwesomeIcon icon={faCalendar} className=" justify-end "/>
                {formatDate(data.date)}
              </td>
              <td className="flex flex-1 justify-center items-center gap-1 font-px-regular text-[16px] text-gray-700 leading-5">
              <FontAwesomeIcon icon={faClock} className=" text-blue-500 "/>
                {data.time}
              </td>
              <td className="flex flex-1 justify-center items-center gap-1 font-px-regular text-[14px] leading-5 text-justify cursor-pointer" onClick={() => handleDoctorClick(data.doctor)}>
              <div className={`flex items-center justify-center h-6 w-6 rounded-full ${selectedDoctor === data.doctor ? 'bg-orange-500' : 'bg-green-500'}`}>
                 <FontAwesomeIcon
                    icon={faStar}
                    className=" text-white "
                 />
                </div>
                {data.doctor}
              </td>
              <td className="flex flex-1 justify-end items-center gap-1 font-px-regular text-[14px] leading-5 text-justify">
                <div className="bg-gray-200 p-2 rounded flex items-center justify-center h-[40px] w-[100px]">
                  <span className="text-center w-full text-gray-700 font-bold">{data.injury}</span>
                </div>
              </td>
              <td className="flex flex-1 justify-end items-center gap-1 font-px-regular text-[14px] font-medium leading-5">
                <span className="text-gray-500 text-2xl rounded px-4 py-1 flex items-center justify-center transform rotate-90">
                  ...
                </span>
              </td>
            </tr>
          </tbody>
        );
      })}
    </React.Fragment>
  );
};

export default PatientList;
