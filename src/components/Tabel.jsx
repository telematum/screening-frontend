import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UilClock, UilSchedule, UilEllipsisV } from '@iconscout/react-unicons'; 
import icon from "../assets/icon-4.jpg";

const Tabel = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json');
                setData(response.data.appointments);
            } catch (error) {
                console.error("Error in fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const filteredData = data.filter(appointment =>
        appointment.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="p-6 flex justify-center">
            <div className="w-full lg:w-2/3 overflow-x-auto">
                <h2 className="text-2xl mb-4 flex justify-start">Today's Appointments List</h2>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
                    placeholder="Search by Patient Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse border border-black">
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className="border border-gray px-4 py-2 text-gray-600">PATIENTS</th>
                                <th className="border border-gray px-4 py-2 text-gray-600">APPOINTMENT DATE</th>
                                <th className="border border-gray px-4 py-2 text-gray-600">APPOINTMENT TIME</th>
                                <th className="border border-gray px-4 py-2 text-gray-600" >DOCTOR</th>
                                <th className="border border-gray px-4 py-2 text-gray-600">INJURY</th>
                                <th className="border border-gray px-4 py-2 text-gray-600">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((appointment, index) => (
                                <tr key={index}>
                                    <td className="border border-gray px-2 py-4 relative text-sm whitespace-nowrap" style={{ paddingRight: '20px' }}>
                                        <div className="absolute  rounded-full w-10 h-10 flex items-center justify-center text-white" style={{ backgroundColor: getRandomColor() }}>
                                            {appointment.patient_name[0]}
                                        </div>
                                        <div className="ml-12">
                                            <div>{appointment.patient_name}</div>
                                            <div>{appointment.mobile_number}</div>
                                        </div>
                                    </td>

                                    <td className="border border-gray px-4 py-2 whitespace-nowrap text-sm text-center">
                                        <div className="flex items-center">
                                            <UilSchedule className="mr-2" /> {appointment.appointment_date}
                                        </div>
                                    </td>

                                    <td className="border border-gray px-4 py-2 whitespace-nowrap text-sm" >
                                        <div className='flex items-center ' >
                                            <UilClock className='mr-2' /> {appointment.appointment_time}
                                        </div>
                                    </td>
                                    <td className="border border-gray px-4 py-2 text-sm whitespace-nowrap" style={{ paddingRight: '20px' }}>
                                        <div className='flex items-center'>
                                            <img className='w-6 h-6 mr-2' src={icon} alt="Doctor Icon" /> {appointment.doctor}
                                        </div>
                                    </td>
                                    <td className="border border-gray px-4 py-2 text-sm whitespace-nowrap">
                                        <span style={{ backgroundColor: '#E0E0E0', padding: '4px', borderRadius: '4px' }}>{appointment.injury}</span>
                                    </td>
                                    <td className="border border-gray px-4 py-2" style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block', margin: 'auto' }}>
                                            <UilEllipsisV />
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Tabel;
