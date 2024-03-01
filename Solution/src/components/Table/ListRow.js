import React from 'react'

const ListRow = (props) => {
    const convertDate = (dateFromApi) => {
        // console.log(date);
        const newDate = new Date(dateFromApi);
        const date = newDate.toGMTString();
        const removeDay = date.split(",")[1];
        const reqDate = removeDay.split("00")[0];
        return reqDate;
    }
    return (
        <tr className='border-t-[1px]'>
            <td className='p-4'>
                <div className='flex items-center gap-4'>
                    <div className='rounded-full bg-red-300 w-10 h-10' />
                    <div className='flex flex-col'>
                        <span className='font-bold text-slate-800 text-sm'>{props.data.patient_name}</span>
                        <span className='text-xs text-[var(--theme-text-color)]'>+{props.data.mobile_number}</span>
                    </div>
                </div>
            </td>
            <td className='p-4 text-[var(--theme-text-color)] max-[680px]:text-sm'>
                <div className='flex items-center gap-1'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                    </span>
                    <span>
                        {convertDate(props.data.appointment_date)}
                    </span>
                </div>
            </td>
            <td className='p-4 text-[var(--theme-text-color)] max-[680px]:hidden table-cell'>
                <div className='flex items-center gap-1'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </span>
                    <span>
                        {props.data.appointment_time}
                    </span>
                </div>
            </td>
            <td className='p-4 text-[var(--theme-text-color)] min-[830px]:table-cell hidden'>
                <div className='flex items-center gap-1'>
                    <span className={`rounded-full ${props.orange ? 'bg-orange-400' : 'bg-green-500'} p-[2px] pb-[3px] flex items-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 fill-white p-0 m-0">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span>
                        {props.data.doctor}
                    </span>

                </div>
            </td>
            <td className='p-4 lg:table-cell hidden'>
                <span className='bg-[#e3ecf7] text-xs text-[#263b7ee6] p-3 font-bold rounded-lg'>{props.data.injury}</span>
            </td>
            <td className='p-4 text-center'>
                <span className='rotate-90 text-center text-[var(--theme-text-color)] inline-flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#bcbcbc" className="w-8 h-8 opacity-60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </span>
            </td>
        </tr>
    )
}

export default ListRow
// #263b7ee6