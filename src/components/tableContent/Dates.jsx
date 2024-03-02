import React from 'react';

/**
 * The Component will display the appointment date.
 * @param {String} date - The varible will display the date. 
 * @returns - A JSX element.
 */
export default function Dates({ date }) {
    return (
        <>
            <div className='flex items-center space-x-1'>
                <i className="fa-regular fa-calendar"></i>
                <span>{date}</span>
            </div>
        </>
    )
}
