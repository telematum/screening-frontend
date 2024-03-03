import {useGet}from '../components/useGet.jsx';

const List = () => {

    const{data,ispending,error}=useGet();

    return (
        <div className="flex flex-col border my-4 mx-8 w-6/6 rounded-md overflow-hidden justify-center bg-[#ffffff] text-[#94a3b8] ">
            <h1 className="relative mx-8 h-12 lg:text-xl items-center mt-4">Today's Appointment List</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 mb-8">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs h-24 uppercase bg-[#f9fbfc] ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Patient
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Injury
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                  {data ? data.map((patient,index) => {
                    return (
                        <tbody key={patient.name}>
                        <tr className=" border-b ">
                            <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex gap-2 items-center">
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" alt="patient_image" className="rounded-full w-12 h-12"/> 
                                    <div className="text-[#bababf]">
                                        <p className='text-[#000000]'>{patient.patient_name}</p>
                                        <p>{patient.mobile_number}</p>
                                </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>

                                    </div>
                                    <div className="">
                                        {patient.appointment_date}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </div>
                                    <div>
                                        {patient.appointment_time}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className={`text-xl inline-flex gap-2 ${index===3||index===4?'text-[#fab794]':'text-[#72cfa7]'}`}>✪<p>{patient.doctor}</p></p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="flex items-center px-1 justify-center  h-9 bg-red-200 rounded-md bg-[#e1e4e7]">{patient.injury}</p>
                            </td>

                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>

                            </td>
                        </tr>

                    </tbody>
                    )
                  }
                  ):
                  <div>
                    <h1>Loading....</h1>
                  </div>
                  }

                    
                </table>
            </div>

        </div>
    )
}

export default List;
