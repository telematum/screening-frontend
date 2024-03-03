import img2 from "../../assets/pic2.jpg"
import { CiCalendarDate } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";



export default function TableComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
            .then((res) => res.json())
            .then((data) => setData(data.appointments))
        }
        fetchData();
    },[])
  return (
    <div className="relative overflow-x-auto sm:rounded-lg mt-5">
        <table className="w-full text-left rtl:text-right">
            <thead className=" text-sm uppercase font-extrabold border-b" style={{color:"#909CAF", backgroundColor:"#FAFAFB", borderColor:"#EDF2F7"}}>
                <tr>
                    <th scope="col" className="px-8 py-5 font-semibold tracking-wider">
                        Patients
                    </th>
                    <th scope="col" className="px-10 py-7 font-semibold tracking-wider">
                        Date
                    </th>
                    <th scope="col" className="px-10 py-7 font-semibold tracking-wider">
                        Time
                    </th>
                    <th scope="col" className="px-10 py-7 font-semibold tracking-wider">
                        Doctor
                    </th>
                    <th scope="col" className="px-10 py-7 font-semibold tracking-wider">
                        Injury
                    </th>
                    <th scope="col" className="px-10 py-7 font-semibold tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                                   <tr key={item}>
                                   <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-b" style={{color:"#2B2B32", borderColor:"#EDF2F7"}}>
                                       <div className="flex">
                                           <div className="flex text-center justify-center items-center mr-2">
                                               <img src={img2} style={{ maxWidth: '50px', borderRadius:"50%" }} className=" object-cover" />
                                           </div>
                                           <div>
                                               <div className="font-semibold text-lg text-black">{item.patient_name}</div>
                                               <div style={{color:"#9E9EB7"}}>{item.mobile_number}</div>
                                           </div>   
                                       </div> 
                                   </th>
                                   <td className="px-6 py-4 border-b" style={{borderColor:"#EDF2F7"}}>
                                       <div className="flex text-center items-center">
                                           <div className="mr-2">
                                               <CiCalendarDate size={24} color="black"/>
                                           </div>
                                           <div className="text-base" style={{color:"#485A6C"}}>
                                               {item.appointment_date}
                                           </div>
                                       </div>
                                   </td>
                                   <td className="px-6 py-4 border-b" style={{borderColor:"#EDF2F7"}}>
                                       <div className="flex text-center items-center">
                                           <div className="mr-2">
                                               <BsClockHistory size={22} color="black"/>
                                           </div>
                                           <div className="text-base" style={{color:"#485A6C"}}>
                                               {item.appointment_time}
                                           </div>
                                       </div>
                                   </td>
                                   <td className="px-6 py-4 border-b" style={{borderColor:"#EDF2F7"}}>
                                   <div className="flex text-center items-center">
                                           <div className="mr-2">
                                                <MdStars size={22} color="rgb(74 222 128)"/>
                                           </div>
                                           <div className=" text-base font-medium" style={{color:"#485A6C"}}>
                                               {item.doctor}
                                           </div>
                                   </div>
                                   </td>
                                   <td className="px-6 py-4 border-b" style={{borderColor:"#EDF2F7"}}>
                                       <div className="font-medium text-base px-4 py-2 inline-block border-lg rounded-md" style={{backgroundColor:"#E4EDF7", color:"#505781"}}>
                                           {item.injury}
                                       </div>
                                   </td>
                                   <td className="px-6 py-4 border-b" style={{borderColor:"#EDF2F7"}}> 
                                       <BsThreeDotsVertical size={24} style={{cursor:"pointer", textAlign:"center", marginLeft:"30px", color:"#DBE3F0"}}/>
                                   </td>
                               </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
