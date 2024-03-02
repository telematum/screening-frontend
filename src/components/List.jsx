import { useState, useEffect } from 'react'
import Appointment from './Appointment'
import { ClipLoader } from 'react-spinners'

const List = () => {
    const [appointmentList, setAppointmentList] = useState([])
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(true) 

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json`)
                if(!res.ok) {
                    throw new Error("Something went wrong, please try again after sometime.")
                }
                const data = await res.json()
                setAppointmentList(data.appointments)
            } catch(err) {
                setError(err)
            } finally {
                setLoader(false)
            }     
        }
        setTimeout(fetchData, 1000)
    }, [])

    if(loader) {
        return (
            <main className='w-full flex h-screen 
            items-center justify-center px-4'>
                <ClipLoader color="#36D7B7" loading={true} size={50} />
            </main>
        ) 
        
    }

    if(error) {
       return (
        <main className='w-full flex h-screen 
        items-center justify-center text-center select-none 
        font-sans font-bold text-red-500 px-4'>
            {error.message}
        </main>
       ) 
    }


    return (
        <main className='w-full flex flex-col 
        items-center select-none font-sans py-16 px-2 sm:px-auto'>
            <div className='w-full max-w-screen-xl mx-auto shadow-md px-2 sm:px-8 py-4 
            rounded-3xl overflow-hidden'>

                <h1 className='text-gray-400 text-xl font-bold 
                tracking-tight my-4'>
                    Today's Appointment List
                </h1>

                <div className='rounded-xl overflow-hidden'>
                    <div className="hidden lg:grid lg:grid-cols-7 gap-5 
                    justify-between items-center uppercase text-gray-400 
                    text-sm font-medium tracking-wide bg-gray-100 px-4 py-4">
                        <div className="col-span-2">
                            patients
                        </div>
                        <div className="">
                            date
                        </div>
                        <div className="">
                            time
                        </div>
                        <div className="">
                            doctor
                        </div>
                        <div className="">
                            injury
                        </div>
                        <div className="text-center">
                            action
                        </div>
                    </div>
        
                    {
                        appointmentList.map( (appointment, index) => (
                            <Appointment 
                                key={index}
                                appointment={appointment} 
                            />   
                        ))
                    }
                    
                </div>
            </div>
        </main>
    )
}

export default List