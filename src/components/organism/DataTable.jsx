import { useState } from 'react';
import Chip from '../atoms/Chip';
import Typography from '../atoms/Typography';
import UserInfo from '../molecules/UserInfo';
import Dropdown from '../molecules/Dropdown';


const renderCell = (header, appointment) => {
    switch (header) {
        case 'patients':
            return <UserInfo data={appointment} />;
        case 'date':
            return <Chip label={appointment?.appointment_date} type='date' />;
        case 'time':
            return <Chip label={appointment?.appointment_time} type='time' />;
        case 'injury':
            return <Chip label={appointment?.injury} type='disease' />;
        case 'doctor':
            return <Chip label={appointment?.doctor} type='doc' />;
        default:
            return appointment[header]?.toString();
    }
};

export default function DataTable({ headers, appointments }) {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    return (
        <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" style={{ backgroundColor: '#8e9aad' }}>
                    <tr>
                        {headers?.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                <Typography variant="body1">{header}</Typography>
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">
                            <Typography variant="body1">Action</Typography>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments?.map((appointment, rowIndex) => (
                        <tr key={rowIndex} className={'bg-white border-b dark:bg-white-800 dark:border-white-700 bg-white dark:bg-white-800'}>
                            {headers.map((header, cellIndex) => (
                                <td key={cellIndex} className="px-6 py-4">
                                    {renderCell(header, appointment)}
                                </td>
                            ))}
                            <td className="px-6 py-4">
                                <Dropdown
                                    isOpen={openDropdownIndex === rowIndex}
                                    onToggle={() => handleDropdownToggle(rowIndex)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}