import { FaRegCalendar } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"

const Appointment = ({ appointment }) => {
  return (
    <div className='grid lg:grid-cols-7 lg:grid-rows-1 md:grid-cols-8 sm:grid-cols-8  grid-cols-8 
    py-4 px-4 lg:py-2 gap-4 lg:gap-5 border-t-2 border-gray-200 w-full'>
        <div className='flex items-center gap-2 lg:col-span-2 md:col-span-4 col-span-6'>
            <div className='lg:self-center md:self-center sm:self-start self-start'>
              <div className='w-12 h-12 bg-orange-400 rounded-full'>
              </div>
            </div>
            <div className=''>
                <div className='font-bold text-gray-600 text-lg'>
                  {appointment.patient_name}
                </div>
                <div className='text-xs text-gray-500 tracking-tight'>
                  +{appointment.mobile_number.replace(new RegExp('-', 'g'), ' ')}
                </div>
            </div>
        </div>

        <div className='flex items-center gap-1 text-gray-500 font-medium 
        lg:col-span-1 md:col-span-4 col-span-4'>
            <FaRegCalendar />
            {new Date(appointment.appointment_date).toLocaleString("en-GB", { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' })
            }     
        </div>

        <div className='flex items-center gap-1 text-gray-500 font-medium 
        lg:col-span-1 md:col-span-4 col-span-4'>
          <FaRegClock />
          {appointment.appointment_time.split(' ')[0]}  
        </div>

        <div className='flex items-center gap-1 col-span-4 md:col-span-4 lg:col-span-1'>
          <svg className="svg-icon fill-current w-5 text-green-500"  
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M692.48 768L512 659.2 331.52 768l47.786667-205.226667-159.146667-137.813333 
            209.92-17.92L512 213.333333l81.92 193.28 209.92 17.92-159.146667 137.813334L692.48 
            768M512 85.333333C276.053333 85.333333 85.333333 277.333333 85.333333 512a426.666667 
            426.666667 0 0 0 426.666667 426.666667 426.666667 426.666667 0 0 0 
            426.666667-426.666667A426.666667 426.666667 0 0 0 512 85.333333z" fill="" />
          </svg>
          <span className='text-gray-500 font-medium'>
            {appointment.doctor}
          </span>
        </div>

        <div className='font-medium self-center col-span-4 
        lg:col-span-1 md:col-span-4 sm:col-span-4'>
          <div className='bg-blue-100 text-gray-500 w-max px-3 py-2 
          rounded-lg text-xs font-bold tracking-tight'>
            {appointment.injury}
          </div>  
        </div>
        
        <button className='cursor-pointer text-gray-200 hover:text-gray-300 self-center lg:justify-self-center
        lg:col-start-7 lg:col-span-1 md:col-span-4 md:row-start-1 md:col-start-5 md:justify-self-end
        sm:col-start-7 sm:row-start-1 col-start-7 col-span-2 row-start-1 justify-self-end sm:justify-self-end'>
          <svg className='h-7 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 
            112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
          </svg>
        </button>
    </div>
  )
}

export default Appointment