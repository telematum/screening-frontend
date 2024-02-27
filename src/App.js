import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    );
    let data = await res.json();
    setUserData(data.appointments);
  };


  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <h1 className="text-gray-400 text-3xl text-center m-5 font-bold">
        Today's appoinment list
      </h1>
      <table className=" text-center w-4/5 mx-auto">
        <thead className="bg-gray-50 border-b-2 border-gray-200 ">
          <tr className="bg-gray">
            <th className="text-gray-400 p-3">PATIENTS</th>
            <th className="text-gray-400 p-3">DATE</th>
            <th className="text-gray-400 p-3">TIME</th>
            <th className="text-gray-400 p-3">DOCTOR</th>
            <th className="text-gray-400 p-3">INJURY</th>
            <th className="text-gray-400 p-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => {
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray" : "bg-white"}
              >
                <td className="flex justify-center pb-3">
                  <div className="flex align-center p-3">
                    <img
                      className="h-8 rounded-3xl"
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black font-bold text-left">
                      {user.patient_name}
                    </span>
                    <span className="text-gray-400 font-medium">
                      {user.mobile_number}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center font-medium text-gray-500">
                    <span className="mt-1 pr-1">
                      <SlCalender />
                    </span>
                    <span>{user.appointment_date}</span>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center font-medium text-gray-500">
                    <span className="mt-1 pr-1">
                      <BsClockHistory />
                    </span>
                    {user.appointment_time}
                  </div>
                </td>
                <td>
                  <div className="flex justify-center font-medium text-gray-500">
                    <IconContext.Provider value={{ color: "green"}}>
                      <span className="mt-1 pr-1" >
                        <FaStar />
                      </span>
                    </IconContext.Provider>
                    {user.doctor}
                  </div>
                </td>
                <td className="text-left pl-10 font-medium">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-indigo-800 bg-indigo-200 rounded-lg">
                    {user.injury}
                  </span>
                </td>
                <td className="flex justify-center mt-4">
                  <CiMenuKebab />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
