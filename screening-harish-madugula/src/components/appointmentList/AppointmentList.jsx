import { useState, useEffect } from "react";
import { FaRegCalendar, FaEllipsisVertical, FaRegClock } from "react-icons/fa6";
import { MdStars } from "react-icons/md";

export default function AppointmentList() {

    // state for storing the patients data
    const [appointmentsList, setAppointmentsList] = useState([])

    const tableHeader = [
        "Patients",
        "Date",
        "Time",
        "Doctor",
        "Injury",
        "Action"
    ]

    useEffect(() => {
        // get patients details
        fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('patients data', data);
                setAppointmentsList(data.appointments ? data.appointments : [])
            });
    }, [])

    return (
        <section className="container p-8">
            <div className="w-full h-full p-6 border border-slate-200 rounded-2xl">
                <p className="text-xl font-bold text-slate-500 text-left">
                    Today's Appointment List
                </p>
                <div className="w-80% h-full py-4 pb-0 mt-4 border border-slate-200 rounded-xl bg-slate-200">
                    <table className="table-auto w-full bg-white">
                        <thead className="bg-slate-200">
                            <tr>
                                {tableHeader.map((item) => (
                                    <td key={item} className={`px-6 py-2 pb-6 align-middle text-start text-sm font-bold text-gray-400 uppercase ${item === 'Patients' && 'w-64'}`}>{item}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {appointmentsList.map((item) => (
                                <tr className="border-b border-slate-200" key={item.mobile_number}>
                                    <td className="px-6 py-3 w-64 text-start text-md font-medium text-gray-500">
                                        {PatientDetails(item.patient_name, item.mobile_number)}
                                    </td>
                                    <td className="px-6 py-3 text-start text-md font-medium text-gray-500 flex mt-3 ">
                                        <FaRegCalendar className="text-md mt-1 mr-2" />
                                        {new Date(item.appointment_date).toDateString().slice(4)}
                                    </td>
                                    <td className="px-6 py-3 text-start text-md font-medium text-gray-500">
                                        <div className="flex">
                                            <FaRegClock className="text-md mt-1 mr-2" />
                                            {item.appointment_time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-start text-md font-medium text-gray-500 flex">
                                        <MdStars className="text-lg mt-1 mr-1 text-green-500" />
                                        {item.doctor}
                                    </td>
                                    <td className="px-6 py-3 text-start text-md font-medium text-gray-500 ">
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-gray-500 ring-1 ring-inset ring-blue-500/10">
                                            {item.injury}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-center text-md font-medium text-gray-300 "><FaEllipsisVertical /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

const PatientDetails = (patientName, patientNumber) => {
    return (
        <div>
            <div className="p-1 max-w-sm mx-auto rounded-xl  flex items-center space-x-4">
                <div className="shrink-0">
                    <div className="flex items-center justify-center  
                        h-10 w-10 rounded-full bg-gray-500">
                        <span className="text-white font-bold text-lg">
                            {getInitials(patientName)}
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text-md text-left font-medium text-black">{patientName}</div>
                    <p className="text-sm text-slate-500 text-left">{patientNumber}</p>
                </div>
            </div>
        </div>
    )
}


const getInitials = (patientName) => {
    var initials = "";
    var names = patientName.split(' ');
    for (let n = 0; n < names.length; n++) {
        initials += names[n].substring(0, 1).toUpperCase();
    }
    return initials;
}