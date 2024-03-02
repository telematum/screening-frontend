import React, { useEffect, useState } from 'react';
import { fetchPatientData } from '../../services';
import { formatDate } from '../../utils';
import LoadingPatientData from './Loader';
import TableBody from './TableBody';
import TableHead from './TableHead';

/**
 * The component is responsible to fetch the data, display the loader and table 
 * @returns - A JSX element shows Table.
 */
export default function Table() {

    // state variable to manage the data 
    const [patientData, setPatientData] = useState([]);
    const [loading, setLoading] = useState(true);

    // fethcing patient data
    const fetchData = async () => {
        let result = await fetchPatientData();
        setLoading(false);
        setPatientData(result);
    }

    // fetch teh patient data after page mounting
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {/* table description */}
            <h2 className='text-gray-500 font-bold'>Today's Appointment List</h2>

            <div className='rounded-xl table-enclosing overflow-x-auto'>

                {/* creating table */}
                <table className='my-5 w-full table-auto text-sm rtl:text-right text-gray-500 rounded-2xl'>

                    {/* header of the table */}
                    <TableHead />

                    {/* body and the content of the table */}
                    {patientData.length > 0 && patientData.map((data, idx) => {
                        return <TableBody
                            key={idx}
                            patientName={data?.patient_name || "No Name"}
                            mobileNumber={data?.mobile_number || "No contact"}
                            date={formatDate(data?.appointment_date) || "No Appointment"}
                            time={data?.appointment_time || "No Data"}
                            doctorName={data?.doctor || "No Data"}
                            injury={data?.injury || "No Data"}
                            imgValue={idx}
                        />
                    })}

                    {loading && Array(6).fill(0).map(() => 
                        <LoadingPatientData />
                    )}
                </table>
            </div>
        </>

    )
}