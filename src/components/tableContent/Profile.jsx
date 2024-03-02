import React from 'react';

/**
 * The component will display the user profile and include { profileImage, fullName, mobileNumber }
 * @param {Number} imgValue - The variable will fetch and display the image.
 * @param {String} fullName - The variable will display the full name of the patient.
 * @param {String} mobileNumber - The variable will display the mobile number of the patient.
 * @returns - A JSX element.
 */
export default function Profile({ imgValue, fullName, mobileNumber }) {

    const img = require(`../../assets/images/${imgValue}.png`);
    return (
        <>
            <div className='flex'>
                <img src={img} style={{ width: '45px', height: '45px'}} alt="profile" className='rounded-full' />
                <span className='ml-2'>
                    <p className='font-bold'>{fullName}</p>
                    <p className='text-gray-400'>{mobileNumber}</p>
                </span>
            </div>
        </>
    )
}
