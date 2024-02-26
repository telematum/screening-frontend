import React from 'react'
import { BsCalendar4Week, BsClockHistory } from 'react-icons/bs'
import { MdStars } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'

interface AppointmentDataInterface {
    patient_name: string,
    mobile_number: string,
    appointment_date: string,
    appointment_time: string,
    doctor: string,
    injury: string
}
interface TableRowProps {
    appointment: AppointmentDataInterface
}

export default function TableRow(props: TableRowProps) {
    const { appointment } = props
    return (
        <tr className=" border-t border-gray-200 hover:bg-stone-50">
            <td className="px-6 py-4 flex items-center">
                <div className="min-h-12 min-w-12 bg-blue-400 text-white rounded-full flex justify-center items-center text-2xl font-medium mr-3">{appointment?.patient_name?.charAt(0)}</div>
                <div className="text-left">
                    <p className="font-semibold ">{appointment?.patient_name}</p>
                    <p className="text-gray-500 text-sm">{appointment?.mobile_number}</p>
                </div>
            </td>
            <td className="px-6 py-4 text-left">
                <div className="flex items-center gap-x-2">
                    <BsCalendar4Week size={18} />
                    {appointment?.appointment_date}
                </div>
            </td>
            <td className="px-6 py-4 text-left">
                <div className="flex items-center gap-x-2">

                    <BsClockHistory size={18} />
                    {appointment?.appointment_time}
                </div>
            </td>
            <td className="px-6 py-4 text-left">
                {" "}
                <div className="flex items-center gap-x-2">
                    <MdStars size={20} color={'#22C55E'} />
                    {appointment?.doctor}
                </div>
            </td>
            <td className="px-6 py-4 text-left">
                <div className="inline-block bg-slate-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                    {appointment?.injury}
                </div>
            </td>
            <td className="px-6 py-4 cursor-pointer text-left opacity-40 ">

                <SlOptionsVertical size={18} />

            </td>
        </tr>
    )
}
