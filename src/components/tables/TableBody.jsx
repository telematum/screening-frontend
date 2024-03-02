import React from 'react';
import Action from '../tableContent/Action';
import Dates from '../tableContent/Dates';
import Doctor from '../tableContent/Doctor';
import Profile from '../tableContent/Profile';
import Time from '../tableContent/Time';


/**
 * the component will dispaly the table content
 * @param {String} patientName - The variable is used to set the name of the patient.
 * @param {Number} imgValue - The variable is used to set the profile image of the patient.
 * @param {String} mobileNumber - The variable is used to set the mobile number of the patient.
 * @param {String} date - The variable is used to set the appointment date of the patient.
 * @param {String} time - The variable is used to set the appointment time of the patient.
 * @param {String} doctorName - The variable is used to set the doctor's name assosiated to the patient.
 * @param {String} injury - The variable is used to set the injury of the patient.
 * @returns - A JSX element display the table content.
 */
export default function TableBody({ patientName, imgValue, mobileNumber, date, time, doctorName, injury }) {
    return (
        <>
            <tbody className='text-left'>
                <tr className="border-b">
                    <td className="p-2" style={{ minWidth: '166px' }}>
                        <Profile imgValue={imgValue} fullName={patientName} mobileNumber={mobileNumber} />
                    </td>
                    <td style={{ minWidth: '120px' }}>
                        <Dates date={date} />
                    </td>
                    <td style={{ minWidth: '100px' }}>
                        <Time time={time} />
                    </td>
                    <td style={{ minWidth: '120px' }}>
                        <Doctor name={doctorName} />
                    </td>
                    <td style={{ minWidth: '150px' }}>
                        <span className='bg-slate-200 px-2 py-2 font-bold rounded-lg'>{injury}</span>
                    </td>
                    <td className="pl-7" style={{ minWidth: '100px' }}>
                        <Action />
                    </td>
                </tr>
            </tbody>
        </>
    )
}
