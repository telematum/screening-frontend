import React from 'react'

const AppointmentTableHeader = () => {
    return (
        <thead className='text-[var(--theme-text-color)] bg-[#f6f6f6] uppercase text-xs font-semibold'>
            <tr>
                <th className='text-sm py-6 px-4'>Patients</th>
                <th className='text-sm py-6 px-4'>Date</th>
                <th className='text-sm py-6 px-4  max-[685px]:hidden table-cell'>Time</th>
                <th className='text-sm py-6 px-4 min-[845px]:table-cell hidden'>Doctor</th>
                <th className='text-sm py-6 px-4 lg:table-cell hidden'>Injury</th>
                <th className='text-sm py-6 px-4 text-center'>Action</th>

            </tr>
        </thead>
    )
}

export default AppointmentTableHeader