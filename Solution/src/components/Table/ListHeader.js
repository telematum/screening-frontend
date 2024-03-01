import React from 'react'

const AppointmentTableHeader = () => {
    return (
        <thead className='text-[var(--theme-text-color)] bg-[#f6f6f6] uppercase text-xs font-semibold'>
            <tr>
                <th className='py-6 px-4'>Patients</th>
                <th className='py-6 px-4'>Date</th>
                <th className='py-6 px-4  max-[680px]:hidden table-cell'>Time</th>
                <th className='py-6 px-4 min-[830px]:table-cell hidden'>Doctor</th>
                <th className='py-6 px-4 lg:table-cell hidden'>Injury</th>
                <th className='py-6 px-4 text-center'>Action</th>

            </tr>
        </thead>
    )
}

export default AppointmentTableHeader