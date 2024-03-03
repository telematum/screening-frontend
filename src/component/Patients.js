import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from 'axios';

export const PatientList = () => {
  const [data , setData] = useState('')

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        // setError(error);
        console.log(error)
      }
    };

    fetchData();
  }, []);

  const Avtar = [
    {
      avatar:
        "https://cdn.pixabay.com/photo/2023/04/02/11/20/ai-generated-7894418_1280.jpg",
    },

    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6l-J8PqR-hPEsyazSdxuDLgUGy2mPzELNT9dfBUeZvtlrGzSY0iNFsrOntDObPg99K4&usqp=CAU",
    },
    {
      avatar:
        "https://img.freepik.com/free-psd/portrait-young-man-white-hoodie-dark-background_1142-53881.jpg?size=626&ext=jpg",
    },

    {
      avatar:
        "https://img.freepik.com/free-photo/young-adult-beauty-portrait-caucasian-woman-generative-ai_188544-7680.jpg",
    },
    {
      avatar:
        "https://img.freepik.com/free-photo/confident-young-man-stylishly-dressed-exploring-city-with-smile-generated-by-artificial-intelligence_25030-64730.jpg?size=626&ext=jpg",
    },
    {
      avatar:
        "https://img.freepik.com/premium-photo/man-stands-dark-street-with-green-jacket-green-jacket_542670-12167.jpg?size=626&ext=jpg&ga=GA1.1.597572283.1709452330&semt=ais",
    }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border rounded-3xl pb-10">
        <h1 className="text-2xl text-gray-500 text-left pl-10 pb-4 pt-10 font-semibold">
          {" "}
          Today's Appointment List
        </h1>
        <div className="flex flex-col items-center justify-center ml-10 mr-12">
          <table className=" table-auto pl-10 w-full">
            <thead>
              <tr className="flex flex-row gap-8 p-4 border-slate-100 rounded-t-lg text-slate-400 bg-slate-50">
                <th className="pr-44">PATIENTS</th>
                <th className="pr-32">DATE</th>
                <th className="pr-32">TIME</th>
                <th className="pr-24"> DOCTOR</th>
                <th className="pr-14">INJURY</th>
                <th className="pr-10">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.appointments?.map(
                (
                  {
                    patient_name,
                    mobile_number,
                    appointment_date,
                    appointment_time,
                    doctor,
                    injury,
                  },
                  index
                ) => {
                  const showOrangeStar =
                  index === 3 || index === 4;
                  return (
                    <tr
                      key={index}
                      className="flex flex-row items-center justify-start text-left border-b border-gray-200 	"
                    >
                      <td className="flex flex-row p-2 w-[200px] basis-3/12">
                        <div className="flex items-center gap-3">
                          <div className="flex">
                            <img
                              src={Avtar[index].avatar}
                              alt="Images"
                              className="h-10 w-10 object-cover rounded-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold">{patient_name}</div>
                            <div className="text-zinc-500">{mobile_number}</div>
                          </div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[100px]">
                        <div className="flex flex-row gap-1 items-center">
                          <span>
                            <CiCalendarDate className="text-zinc-500" />
                          </span>
                          <div className="text-zinc-800">
                            {appointment_date}
                          </div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[140px]">
                        <div className="flex flex-row items-center gap-2">
                          <BsClockHistory className="text-zinc-500" />

                          <div className="text-zinc-800">
                            {appointment_time}
                          </div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[100px]">
                        <div className="flex flex-row items-center gap-2">
                          <MdStars
                            style={{
                              color: showOrangeStar
                                ? "orange"
                                : "mediumSeaGreen",
                              fontSize: "30px",
                            }}
                          />
                          <div className="text-zinc-800"> {doctor}</div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[100px]">
                        <div className=" rounded-md py-1 px-3 text-slate-500 font-[600] bg-slate-200 inline-block">
                          {injury}
                        </div>
                      </td>
                      <td className="basis-0.5/6 p-2 min-w-[100px] cursor-pointer">
                        <BsThreeDotsVertical className="text-zinc-400" />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
