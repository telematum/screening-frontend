import { useEffect, useState } from "react";
import {format} from "date-fns"

function Table() {

    const [tabelData, setTabelData] = useState([])

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTabelData(data["appointments"])
            console.log("data", data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handelKebabMenu =() =>{
        console.log("Need to done , based on requirement")
    }

    useEffect(() => {
        fetchData("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
    }, [])


    return (
        <>
            <div class="p-10 ">
                <div class="flex justify-start mb-6 text-xl font-bold text-gray-400 dark:text-gray-400">{"Today's Appointment List"}</div>
                <div class="overflow-auto  shadow-md sm:rounded-lg">
                    <table class="w-full  text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
                        <thead class="text-xs text-gray-400 uppercase bg-slate-100 dark:bg-slate-100 dark:text-gray-400 table w-full table-fixed">
                            <tr>
                                <th scope="col" class="px-6 py-6">
                                    {"PATIENTS"}
                                </th>
                                <th scope="col" class="px-12 py-6">
                                    {"DATE"}
                                </th>
                                <th scope="col" class="px-12 py-6">
                                    {"TIME"}
                                </th>
                                <th scope="col" class="px-12 py-6">
                                    {"DOCTOR"}
                                </th>
                                <th scope="col" class="px-12 py-6">
                                    {"INJURY"}
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    {"ACTION"}
                                </th>
                            </tr>
                        </thead>
                        <tbody class = "min-h-[40vh] max-h-[70vh] block ">
                            {tabelData.length > 0 ? tabelData.map((data) => {
                                const time = data.appointment_time.split(" ");
                                var date = format(new Date(data.appointment_date), "dd MMM yyyy");
                                return (
                                    <tr class="bg-white dark:bg-white border-gray-200 text-gray-400 font-bold dark:text-gray-400  dark:border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-200  w-full table table-fixed">
                                        <th scope="row" class="flex items-center pl-4 py-4 text-gray-900 whitespace-nowrap dark:text-gray-950">
                                            <div class="w-10 h-10 rounded-full bg-blue-400" > </div>
                                            <div class="ps-3 truncate hover:text-clip w-30">
                                                <div class="text-base font-semibold ">{data.patient_name}</div>
                                                <div class="font-normal text-gray-500">{"+" + data.mobile_number}</div>
                                            </div>
                                        </th>
                                        <td class="px-12 py-4">
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 p-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                                </svg>
                                                {date}
                                            </div>
                                        </td>
                                        <td class="px-12 py-4">
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 p-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                {time[0]}
                                            </div>

                                        </td>
                                        <td class="px-12 py-4">
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="doctor"  className=  {`w-6 h-6 p-1  ${true ? 'text-green-600':'text-blue-600'}`}>
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                </svg>
                                                {data.doctor}
                                            </div>
                                        </td>
                                        <td class="px-12 py-4 text-blue-950">
                                            <div class="inline-block p-2 rounded-md bg-blue-50">
                                                {data.injury}
                                            </div>
                                        </td>
                                        <td class="px-12 py-4">
                                            <button  class="font-medium text-gray-400 dark:text-gray-400" onClick={handelKebabMenu}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }) : ""}

                        </tbody>
                    </table>
                </div>
            </div>
        </>)
}
export default Table;
