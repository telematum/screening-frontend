import React from 'react';

/**
 * the component will display the name and icon of the doctor
 * @param {String} name - The variable will display the appointment time.
 * @returns - A JSX element.
 */
export default function Doctor({ name }) {
    return (
        <div className='flex items-center space-x-1'>
            <i className="fa-solid fa-user-doctor"></i>
            <span>{name}</span>
        </div>
    );
}
