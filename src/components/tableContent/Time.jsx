import React from 'react';

/**
 * The component will dispaly the appointment time.
 * @param {String} date - The varible will display the date. 
 * @returns - A JSX element.
 */
export default function Time({ time }) {
	return (
		<>
			<div className='flex items-center space-x-1'>
				<i className="fa-regular fa-clock"></i>
				<span>{time}</span>
			</div>
		</>
	)
}
