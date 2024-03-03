import { useState } from "react";
import {patientList} from "../../config";
import {FaClock, FaRegCalendar,FaStar,FaEllipsisV} from "react-icons/fa";

const Page=()=>{

    // const[list,setList]=useState(patientList);
    const list=patientList;

    return (
        <div class="p-5  h-screen">
        <h2 class="font-semibold text-4xl text-neutral-500 tracking-tighter"  >Today's Appointment List</h2>
        <table class="w-full mt-8 rounded-ss-3xl text-left  border-solid border-l-0 " >
            <thead class="bg-slate-300  ">
            <tr class="h-14">
                <th className="text-left p-3 rounded-ss-3xl ">PATIENTS</th>
                <th className="text-left p-3">DATE</th>
                <th className="text-left p-3">TIME</th>
                <th className="text-left p-3">DOCTOR</th>
                <th className="text-left p-3">INJURY</th>
                <th className="text-center p-3 rounded-se-2xl">ACTION</th>
            </tr>
            </thead>
            <tbody>
                {list.appointments.map((datalist,index)=>(
                   <tr class=" border-t-2 hover:bg-green-50" key={index}>
                   <div class="flex items-center pl-4"><div className=" w-12 h-12 rounded-full bg-pink-400"></div><div><td  class="p-3 text-lg font-bold text-gray-700">{datalist?.patient_name} <br /> <small className="font-semibold text-neutral-500" >+{datalist?.mobile_number}</small> </td></div></div>
                   
                   <td class=" p-3 text-lg text-gray-500"><div className="flex">< FaRegCalendar className="mt-1 mr-2"/>{datalist?.appointment_date}</div></td>
                   <td class="p-3 text-lg text-gray-500"><div className="flex"><FaClock className="mt-1 mr-2" />{datalist?.appointment_time}</div></td>
                   <td class="p-3 text-lg text-gray-500"><div className="flex"><FaStar className="mt-1 mr-2"/>{datalist?.doctor}</div></td>
                   <td class="p-3 text-gray-500 font-bold text-sm  "> <span className="p-2 tracking-tighter bg-blue-200 rounded-lg bg-opacity-40">{datalist?.injury} </span></td>
                   <td className="flex justify-center text-zinc-300"><FaEllipsisV/></td>
               </tr>
                ))}
              
            </tbody>
        </table>
        </div>
    )
}
export default Page;