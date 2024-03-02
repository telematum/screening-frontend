import './App.css';
import appointment_list from '../src/appointment_list.json';


function App() {
  // console.log(appointment_list);
  return (
    <>
    <div className="container mx-auto px-4">
    <div className="bg-white-600 p-4 m-5 sm:cols-12 md:cols-12 lg:cols-12 rounded-[5px] shadow-xl">
         <h1 className='text-gray-500 text-bold font-sans text-2xl font-semibold'>Today's Appointment List</h1>
       
           </div>
           
      <table className='w-full p-4'>
      <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
               <th className='p-25 text-sm font-semifold tracking-wide text-left font-sans text-gray-500 '>PATIENTS</th>
                <th className='w-25 p-3 text-sm font-semifold tracking-wide text-left font-sans text-gray-500 '>DATE</th>
                <th className='w-25 p-3 text-sm font-semifold tracking-wide text-left font-sans text-gray-500 '>TIME</th>
                <th className='w-25 p-3 text-sm font-semifold tracking-wide text-left font-sans text-gray-500 '>DOCTOR</th>
               <th className='w-25 p-3 text-sm font-semifold tracking-wide text-left font-sans text-gray-500 '>INJURY</th>
                <th className='w-5 p-3
                 text-sm font-semifold tracking-wide text-left font-sans text-gray-500  '>ACTION</th>
              </tr>
            </thead>
      <tbody>
        {appointment_list.appointments.map(data => (
          <tr className=' text-gray-500 font-semibold  '>
                   <td className='flex mt-3 '><img className='w-12 h-12 flex rounded-[50px]'
                      src='https://images.unsplash.com/photo-1525457136159-8878648a7ad0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt='' />
                     <td> <span className='pl-3 md:h-[30px] lg:h-[30px] sm:h-[45px] flex text-black '>{data.patient_name}</span>
                        <span className='ml-3  font-semibold text-sm tracking-tight sm:text-sm h-[10px] '>{data.mobile_number}</span>
                      </td></td>
                    <td ><td className='flex mt-4 '><svg className="fill-gray-500 pr-1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" >
                      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                      {data.appointment_date}
                    </td></td>
                    <td><td className='flex mt-4'>
                     <svg className="fill-gray-500 pr-1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                     {data.appointment_time}</td></td>
                   <td><td className='flex mt-4'>
                     <svg className='fill-green-600 rounded-full pr-1' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                       <path d="M345.619-278 479.81-380.128 614-278l-51-166 133-93H532.723L480-710l-52.723 173H264l133.19 92.923L345.619-278Zm134.683 146q-72.209 0-135.432-27.523-63.223-27.523-110.62-74.848-47.398-47.325-74.824-110.262Q132-407.57 132-479.698q0-72.209 27.523-135.932 27.523-63.723 74.848-110.87 47.325-47.148 110.262-74.324Q407.57-828 479.698-828q72.209 0 135.937 27.391 63.729 27.392 110.871 74.348 47.142 46.957 74.318 110.394Q828-552.43 828-480.302q0 72.209-27.273 135.432-27.273 63.223-74.348 110.62-47.075 47.398-110.512 74.824Q552.43-132" /></svg>
                       {data.doctor}</td></td>
                    <td>
                      <span className='p-1.5 text-sm font-sans font-medium text-blue-500 bg-blue-200 rounded-lg tracking-wider'>{data.injury}</span>
                    </td>
                    <td className='pl-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
                        <circle cx="50" cy="30" r="5" fill="gray" />
                        <circle cx="50" cy="50" r="5" fill="gray" />
                        <circle cx="50" cy="70" r="5" fill="gray" />
                      </svg>
                    </td>
                  </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default App;
