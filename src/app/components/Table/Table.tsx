import React from "react";
import TableRow from "./TableRow";
import appointment_data from '@/app/_dummy_content/appointment_list.json'

export default function Table() {

    const columns = [
        'PATIENTS',
        "DATE",
        'TIME',
        'DOCTOR',
        'INJURY',
        'ACTION',
    ]

    return (
        <div className="flex justify-center items-center min-h-screen m-2 p-1 lg:p-5 ">
            <div className="container border border-slate-200 rounded-3xl mx-auto shadow-xl">
                <h3 className="text-xl font-semibold text-slate-500 p-7  pl-8">
                    Today's Appointment List
                </h3>
                <div className="overflow-x-auto p-8 pt-0">
                    <table className="min-w-full rounded-2xl  overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                {columns?.map((col, idx) => <th key={idx} className="px-6 py-6 text-gray-400 text-sm text-left">
                                    {col}
                                </th>)}
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {appointment_data?.appointments?.map((appointment, idx: number) => <TableRow key={idx} appointment={appointment} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
