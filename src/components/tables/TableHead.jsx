import React from 'react';

/**
 * The component will display the head of the table
 * @returns - A JSX element display the table headers.
 */
export default function TableHead() {
    return (
        <>
            <thead className='bg-gray-100 text-left'>
                <tr className='text-gray-400 text-sm'>
                    <th className='py-5 pl-3 border-b-0 rounded-tl-3xl' style={{ minWidth: '166px' }}>PATIENTS</th>
                    <th className='py-5' style={{ minWidth: '100px' }}>DATE</th>
                    <th className='py-5' style={{ minWidth: '100px' }}>TIME</th>
                    <th className='py-5' style={{ minWidth: '120px' }}>DOCTOR</th>
                    <th className='py-5 pl-2' style={{ minWidth: '100px' }}>INJURY</th>
                    <th className='py-5 border-b-0 rounded-tr-3xl' style={{ minWidth: '100px' }}>ACTION</th>
                </tr>
            </thead>
        </>
    )
}
