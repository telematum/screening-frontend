import {useEffect, useState} from "react";
import {SlOptionsVertical} from "react-icons/sl";
import {BsClockHistory} from "react-icons/bs";
import {TbCalendarExclamation} from "react-icons/tb";
import {MdStars} from "react-icons/md";
import axios from "axios";

const Table = () => {
  const [info, setinfo] = useState([]);

  function getRandomHexColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777265).toString(16);

    return randomColor;
  }

  const formatDate = (inputDate) => {
    const options = {day: "numeric", month: "short", year: "numeric"};
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        const data = res.data;
        setinfo(data.appointments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full  px-12 py-14  border-2 rounded-lg">
        <h1 className="font-bold text-2xl md:text-4xl text-gray-500 mb-8">
          Today&apos;s Appointment List
        </h1>
        <table className=" w-full">
          <thead className="rounded-lg h-20 text-gray-400 bg-slate-100">
            <tr className="text-left text-base md:text-xl uppercase">
              <th className="px-4 py-2">Patients</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Doctor</th>
              <th className="px-4 py-2">Injury</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-slate-50 cursor-pointer  "
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      style={{backgroundColor: getRandomHexColor()}}
                      className={`w-9 h-9 rounded-full hover:scale-105`}
                    />
                    <span className=" text-lg md:text-2xl text-neutral-600 font-bold">
                      {item.patient_name}
                    </span>
                  </div>
                  <span className=" text-sm md:text-lg font-semibold text-gray-400">
                    +{item.mobile_number}
                  </span>
                </td>
                <td className="px-4 py-2 ">
                  <div className="flex items-center gap-2 text-slate-500 font-semibold text-lg md:text-2xl">
                    <span>
                      <TbCalendarExclamation size={28} />
                    </span>

                    <span>{formatDate(item.appointment_date)}</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2 text-slate-500 font-semibold text-lg md:text-2xl">
                    <span>
                      <BsClockHistory size={22} />
                    </span>

                    <span>{item.appointment_time}</span>
                  </div>{" "}
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2 text-slate-500 font-semibold text-lg md:text-2xl">
                    <span
                      className={
                        index === 3 || index === 4
                          ? "text-orange-300 rounded-full shadow-lg shadow-gray-400"
                          : "text-green-400 rounded-full shadow-lg shadow-gray-400"
                      }
                    >
                      <MdStars size={26} />
                    </span>

                    <span>{item.doctor}</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  {" "}
                  <span className="bg-slate-200 hover:bg-slate-300 rounded-lg px-3 py-2 font-bold text-base text-slate-500 text-center">
                    {item.injury}{" "}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className=" cursor-pointer">
                    <SlOptionsVertical className="text-gray-400 hover:scale-150 transition " />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
