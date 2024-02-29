import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import moment from "moment"
import { AccessTime, CalendarMonth } from '@mui/icons-material'
import StarsIcon from '@mui/icons-material/Stars';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios"

const Home = () => {
    const columns = [
        {
            field: 'patient_name', headerName: 'Patients', flex: 1, renderCell: ({ row: { patient_name, mobile_number } }) => {
                return (
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 rounded-full bg-gray-400 text-white font-medium flex items-center justify-center'>{patient_name[0]}</div>
                        <div className='flex flex-col'>
                            <h1 className='font-semibold'>{patient_name}</h1>
                            <p className='text-gray-500 text-xs'>{mobile_number}</p>
                        </div>
                    </div>
                )
            }
        },
        {
            field: 'appointment_date', headerName: 'Date', flex: 1, renderCell: ({ row: { appointment_date } }) => {
                return (
                    <div className='flex gap-2 items-center text-gray-500 font-medium'>
                        <CalendarMonth />
                        <p>{moment(appointment_date).format('ll')}</p>
                    </div>
                )
            }
        },
        {
            field: 'appointment_time', headerName: 'Time', flex: 1, renderCell: ({ row: { appointment_time } }) => {
                return (
                    <div className='flex gap-2 items-center text-gray-500'>
                        <AccessTime />
                        <p>{appointment_time}</p>
                    </div>
                )
            }
        },
        {
            field: 'doctor', headerName: 'Doctor', flex: 1, renderCell: ({ row: { doctor } }) => {
                return (
                    <div className='flex gap-2 items-center text-green-500'>
                        <StarsIcon />
                        <p className='text-gray-500'>{doctor}</p>
                    </div>
                )

            }
        },
        { field: 'injury', headerName: 'Injury', flex: 1, renderCell: ({ row: { injury } }) => <p className='bg-slate-300 w-max p-2 rounded-md font-semibold text-sm'>{injury}</p> },
        {
            field: 'action', headerName: 'Action', flex: 1, renderCell: ({ row }) => {
                return (
                    <MoreVertIcon sx={{color:"gray",cursor:"pointer"}} />
                )
            }
        }
    ]
    const [rows, setRows] = useState()

    useEffect(()=>{
        const fetchAppointments = async () => {
            const { data } = await axios.get('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
            setRows(data.appointments)
        }
        fetchAppointments()
    },[])
    return (
        <div className='flex flex-col w-full items-center justify-center h-screen gap-2'>
            <h1 className='font-bold text-gray-500 w-[80%]'>Today's Appointment List</h1>
            {rows ? <div className='w-[80%]'>
                <DataGrid getRowId={(row) => row.mobile_number} disableRowSelectionOnClick rows={rows} sx={{
                    '& .MuiDataGrid-cell:focus': {
                        outline: 'none'
                    }, '& .MuiDataGrid-cell:focus-within': {
                        outline: "none"
                    }, '& .MuiDataGrid-columnHeader:focus-within': {
                        outline: "none"
                    }
                }} columns={columns} isRowSelectable={(data) => data.row !== undefined} />
            </div>:"Loading..."}
        </div>
    )
}

export default Home