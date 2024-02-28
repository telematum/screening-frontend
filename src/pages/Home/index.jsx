import React, { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const apiCall = await fetch(
                "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
            );

            const res = await apiCall.json();
            setData(res?.appointments);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [data]);

    const getInitials = (fullName) => {
        const initials = fullName
            .split(" ")
            .reduce((acc, subname) => acc + subname[0], "");
        return initials;
    };
    return (
        <div className="relative overflow-x-auto grid place-items-center h-screen  sm:grid-cols-1 ">
            <table className="w-5/6  cursor-pointer text-sm text-left shadow-lg sm:rounded-lg rtl:text-right  bg-gray-100 ">
                <caption className="text-xl font-semibold text-left rtl:text-right text-gray-400 mb-5">
                    Today's Appointment List
                </caption>
                <thead className="text-xs text-gray-700 uppercase  border-b">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 uppercase text-gray-400 font-medium tracking-wide"
                        >
                            Patients
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-400 font-medium tracking-wide"
                        >
                            Date
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-400 font-medium tracking-wide"
                        >
                            Time
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-400 font-medium tracking-wide"
                        >
                            Doctor
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-400 font-medium tracking-wide"
                        >
                            Injury
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-gray-400 font-medium tracking-wide"
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((details) => {
                        return (
                            <tr className="bg-white border-b " key={details?.patient_name}>
                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <div className="inline-flex items-center justify-center w-10 h-10 text-xl text-white bg-violet-400 rounded-full">
                                        {getInitials(details?.patient_name)}
                                    </div>
                                    <div className="ps-3">
                                        <div className="text-sm text-gray-900 font-semibold text-nowrap">
                                            {details?.patient_name}
                                        </div>
                                        <div className="font-normal text-gray-500 text-nowrap">
                                            {details?.mobile_number}
                                        </div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">
                                    <div className="flex items-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                            color="gray"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                            />
                                        </svg>
                                        <p className="mx-1  text-gray-500 font-medium text-nowrap">
                                            {details?.appointment_date}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                            color="gray"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                        <p className="mx-1 text-gray-500 font-medium  text-nowrap">
                                            {details?.appointment_time}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={
                                                details?.injury === "Fever" ||
                                                    details?.injury === "Sore throat"
                                                    ? "w-4 h-4 bg-yellow-500 rounded-full"
                                                    : "w-4 h-4 bg-green-500 rounded-full"
                                            }
                                            color="white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p className="mx-1  text-gray-500 font-medium text-nowrap">
                                            {details?.doctor}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-5 py-2">
                                    <span className="bg-blue-100 p-1 text-gray-700 text-sm text-nowrap font-medium text-center me-2 rounded">
                                        {details?.injury}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <svg
                                        className="w-4 h-4 mx-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 4 15"
                                    >
                                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
