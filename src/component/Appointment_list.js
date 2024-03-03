
import axios from "axios";
import { useEffect, useState } from "react";
import calender from "../component/calendar.png"
import clock from "../component/clock.png"
import dot from "../component/download.png"


const Appointment = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
                );
                console.log(data);
                setData(data.appointments)
            } catch (err) {
                console.log(err)
            }
        })();
    }, []);
    return (
        <div className="table-fixed  ">
            <div className="font-bold text-gray-400 ">
                <p>Todays appointment list</p>
            </div>
            <table  >
                <div className="border-b-2 border-opacity-40 rounded-t">
                
                <tr className="border-b-2 border-opacity-40 rounded-t">
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 leading-none text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >Patients</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 leading-none text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 leading-none text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Time</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 leading-none text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Doctor</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 leading-none text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Injury</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 leading-none text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Action</th>
                </tr>
                
                <tbody>
                    {
                        data.map((row, index) => {
                            return (
                                <tr className="border-gray-200 border-b border-opacity-80" key={index} >
                                    <div className="flex ">
                                        <div className="rounded-full bg bg-red-400 w-9 h-9 my-4">
                                            <p className="m-3 my-2 text-lg  font-extrabold text-red-500">P</p>

                                        </div>
                                        <img src=""></img>
                                        <td className="text-gray-800 p-4 align-middle font-bold text-sm whitespace-no-wrap">{row.patient_name}
                                            <p className="text-xs  text-gray-600 font-medium">{row.mobile_number}</p>  </td>
                                    </div>
                                    <td className="text-gray-400  leading-none p-4 font-bold
                                     text-xs text-base  whitespace-no-wrap"> <div className="flex "><img className="w-3 h-3 mx-2 " src={calender} />{row.appointment_date}</div></td>
                                    <td className="text-gray-400 p-4 leading-none text-xs text-base font-bold whitespace-no-wrap"> <div className="flex"><img className="w-3 h-3 mx-2" src={clock} />{row.appointment_time}</div></td>
                                    <td className="text-gray-400 p-4 leading-none text-xs text-base font-bold whitespace-no-wrap">{row.doctor}</td>
                                    <td className="text-gray-600 p-4 leading-none text-xs text-base  font-bold whitespace-no-wrap"><div className="box-border h-9 w-18 bg-gray-200 opacity-90 rounded "><p className=" py-2 px-1 ">{row.injury}</p></div></td>
                                    <td><button className="bg-transparent"><img className="w-6 h-6 mx-6" src={dot}/></button></td>
                                </tr>)
                        })
                    }
                </tbody>
                </div>
            </table>


        </div>)
};
export default Appointment;