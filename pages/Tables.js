import React, { useEffect, useState, useRef } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CiTimer } from "react-icons/ci";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FaStar, FaCircle } from "react-icons/fa";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { Poppins } from 'next/font/google';
import { LuCalendar } from "react-icons/lu";
const poppins = Poppins({ weight: "500", subsets: ['latin'] })
config.autoAddCss = false;
const Tables = () => {
    const ref = useRef(null)
    const showAlert = () => {
        ref.current.style.display = "flex"
        setTimeout(() => {
            ref.current.style.display = "none"
        }, 2000);
    }
    const [dat, setdat] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json").then((data) => { return data.json() }).then((response) => {
            setloading(false);
            setdat(response.appointments)
        })
    }, [])
    const docArr = ["Dr. Patel", "Dr. Garcia"]
    return (
        <>
            <div ref={ref} className='bg-yellow-300 md:left-44 xl:left-[40rem] rounded-xl p-2 absolute top-5 hidden justify-center  text-xl text-center'><p>To make this functionality working please allow me for interview🙂😊 Thanks...</p></div>
            <div className={`${poppins.className} flex-col  flex text-slate-500 items-center py-14 md:py-40 h-screen text-left font-sans `}>
                <div className='w-full md:text-2xl p-5'>
                    <p className=''>Today's Appointment List</p>
                </div>
                {loading ? <p className='text-3xl'>Fetching Data...</p> : ""}
                <div className='flex shadow-2xl rounded-3xl overflow-x-scroll xl:overflow-x-hidden overflow-y-scroll w-full p-10'>
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn className="pr-10 text-slate-400 text-sm p-2 font-normal">PATIENTS</TableColumn>
                            <TableColumn className="pr-10 text-slate-400 text-sm p-2 font-normal">DATE</TableColumn>
                            <TableColumn className="pr-10 text-slate-400 text-sm p-2 font-normal">TIME</TableColumn>
                            <TableColumn className="pr-10 text-slate-400 text-sm p-2 font-normal">DOCTOR</TableColumn>
                            <TableColumn className="pr-10 text-slate-400 text-sm p-2 font-normal">INJURY</TableColumn>
                            <TableColumn className="pr-10 text-slate-400 text-sm p-2 font-normal">ACTION</TableColumn>
                        </TableHeader>
                        <TableBody >
                            {
                                !loading && dat && dat.map((item, index) => {
                                    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                                    const isDoc = docArr.includes(item.doctor);
                                    return (
                                        <TableRow className=" border-2 border-transparent border-t-slate-100 border-b-slate-100" key={index}>
                                            <TableCell className="p-2 min-w-52 max-w-72 "><span className='flex flex-col'><span className='font-bold text-black flex items-center gap-2'><FaCircle style={{ color: `#${randomColor}`, fontSize:"1.3rem" }} /> {item.patient_name}</span>
                                                <span className='px-1 text-sm text-slate-400'>{item.mobile_number}</span></span></TableCell>
                                            <TableCell className="p-2 min-w-52 max-w-72 text-xl "><span className='flex items-center gap-2'><LuCalendar />{item.appointment_date}</span></TableCell>
                                            <TableCell className="p-2 min-w-52 max-w-72 text-xl "><span className='flex items-center gap-2'><CiTimer className='text-2xl ' />{item.appointment_time.slice(0, 5)}</span></TableCell>
                                            <TableCell className="p-2 min-w-52 max-w-72 text-xl "><span className='flex items-center gap-2' ><FaStar className='text-xl' style={{ color: "white", padding: "4px", background: isDoc ? "orange" : "#32CD32", borderRadius: "10px" }} /> {item.doctor}</span></TableCell>
                                            <TableCell className="p-2 min-w-52 max-w-72 "><span className='bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-bold'>{item.injury}</span></TableCell>
                                            <TableCell className="p-2 min-w-52 max-w-72  px-7"><HiOutlineDotsVertical className='cursor-pointer' onClick={showAlert} /></TableCell>
                                        </TableRow>
                                        // 
                                    )
                                })
                            }
                        </TableBody>
                    </Table>

                </div>
            </div>
        </>
    )
}

export default Tables