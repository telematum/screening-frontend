import React from 'react';
import { AppointmentsType } from '../App';
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";


interface Props {
    patientData: AppointmentsType[];
    loading: boolean;
}

const PatientTable: React.FC<Props> = ({ patientData, loading }) => {
    console.log(patientData);

    return (
        <React.Fragment>
            <div className="overflow-x-auto p-8">
            <p className='text-4xl text-slate-500 mb-4'>Today's Appointments</p>
                <table className="w-full whitespace-nowrap rounded-3xl overflow-hidden">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border border-gray-200 p-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PATIENTS</th>
                            <th className="border border-gray-200 p-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                            <th className="border border-gray-200 p-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TIME</th>
                            <th className="border border-gray-200 p-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOCTOR</th>
                            <th className="border border-gray-200 p-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">INJURY</th>
                            <th className="border border-gray-200 p-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4">Loading...</td>
                            </tr>
                        ) : (
                            patientData.map((appointment, index) => (
                                <tr key={index}>
                                    <td className="flex items-center border border-gray-200 px-6 py-4 whitespace-no-wrap">
                                        <img className='w-8 h-8 rounded-3xl me-4' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="" />
                                        <div>
                                            {appointment.patient_name}
                                            <span className="block text-xs text-gray-500">+{appointment.mobile_number}</span>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 px-6 py-4 whitespace-no-wrap">
                                        <MdDateRange size={26} className="inline-block mr-2" />
                                        {appointment.appointment_date}
                                    </td>
                                    <td className="border border-gray-200 px-6 py-4 whitespace-no-wrap">
                                        <IoMdTime size={26} className="inline-block mr-2" />
                                        {appointment.appointment_time}
                                    </td>
                                    <td className="border border-gray-200 px-6 py-4 whitespace-no-wrap">
                                        <CiStar size={26} className="inline-block mr-2" />
                                        {appointment.doctor}
                                    </td>
                                    <td className="border px-6 py-4 whitespace-no-wrap">
                                        <span className='bg-gray-300 p-2 rounded'>{appointment.injury}</span>
                                    </td>
                                    <td className="border border-gray-200 px-6 py-4 whitespace-no-wrap text-center"><button className='btn bold cursor-pointer'>:</button></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default PatientTable;
