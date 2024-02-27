import React, { useEffect, useState } from 'react'

const Table = () => {
    const headers=[
        'Patients',
        'Date',
        'Time',
        'Doctor',
        'Injury',
        'Action'
    ];

    const [data,setData]=useState([])



    const getData=async()=>{
        const data=await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
        const res=await data.json();
        setData(res.appointments)
        //setData(res)
    }

    console.log(data)
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='w-full ring-1 ring-gray-200/80 rounded-3xl p-8 flex-col flex space-y-8'>
        <div>
            <h2 className='text-xl text-gray-500/75 font-semibold'>
                Today's Appointment List
            </h2>
        </div>
        <div className=''>
            <table className='w-full text-left'>
                <thead className='text-sm text-gray-400/80 uppercase'>
                    <tr>
                    {
                        headers.map((e,i)=>{
                            return(
                                <th key={i} className='px-6 py-3'>{e}</th>
                            )
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    
                      {  data.map((e,i)=>{
                            return(
                                <tr className='border-t border-gray-200 border-spacing-3'>
                                    
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table