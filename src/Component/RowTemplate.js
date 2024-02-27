import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRemove, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const RowTemplate = ()=>{
    const [data, setData] = useState(null);
    const [action, setAction] = useState(-1);
    console.log(`${process.env.REACT_APP_RESOURCE_URL}`)
    useEffect(()=>{
        // Retrieve the data from local storage
        const storedData = localStorage.getItem('apiData');
        const parsedData = JSON.parse(storedData);
        setData(JSON.parse(parsedData));
        console.log("parsed", parsedData);
        if(parsedData){

        }else{
            fetch(process.env.REACT_APP_RESOURCE_URL).then().then((dataArray)=>{
                dataArray.text().then((appointments)=>{
                setData(JSON.parse(appointments));
                const jsonData = JSON.stringify(appointments);
                // Save the data to local storage
                localStorage.setItem('apiData', jsonData);
                console.log(appointments);});
            }); 
        }
    },[]);
    function handleAction(index){
        if(action==index){
            setAction(-1);
        }else{
        setAction(index);
        }
    }
    return(
        <div className="grid w-full p-2">
            <div className="grid grid-cols-6 justify-items-stretch bg-gray-100 text-gray-400 text-md  items-start gap-8 p-6 text-left">
                <div className="font-semibold self-start text-left">Patients</div>
                <div className="font-semibold self-start text-left">Date</div>
                <div className="font-semibold self-start text-left">Time</div>
                <div className="font-semibold self-start text-left">Doctor</div>
                <div className="font-semibold self-start text-left">Injury</div>
                <div className="font-semibold self-start text-left">Action</div>
            </div>
            <div className="grid gap-1">
                    {
                        data?.appointments?.map((el, index)=>{
                            return(
                                <div className="grid grid-cols-6 justify-items-stretch items-start gap-8 border-b-2 p-3 text-left">
                                <div className="flex gap-3 flex-wrap">
                                    <div  className="h-12 w-12 rounded-full bg-gray-300 hidden lg:block"></div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold text-ellipsis overflow-hidden ...">{el?.patient_name}</div>
                                        <div className="text-sm text-gray-500 text-ellipsis overflow-hidden ...">+{el?.mobile_number}</div>
                                    </div>   
                                </div >
                                <div className="flex self-center text-left">
                                    <div><FontAwesomeIcon icon={faCalendar} className="mt-1 text-gray-500 hidden lg:block " /></div>
                                    <div className="px-3 text-ellipsis overflow-hidden ...">{el?.appointment_date}</div>
                                    </div >
                                <div className="flex self-center text-left" >
                                    <div><FontAwesomeIcon icon={faClock} className="mt-1 text-gray-500 hidden lg:block" /></div>
                                    <div className="px-3 text-ellipsis overflow-hidden ...">{el?.appointment_time}</div>
                                </div >
                                <div className="flex self-center text-left">
                                    <div className={index%3==0?"bg-red-500 h-5 w-5 rounded-full mt-1 items-center hidden lg:block": "bg-green-500 h-5 w-5 rounded-full mt-1 items-center hidden lg:block"}><FontAwesomeIcon icon={faStar} className={"text-white mb-1.5 ml-1 text-[10px]"}/></div>
                                    <div className="px-3 text-ellipsis overflow-hidden ...">{el.doctor}</div></div >
                                <div className="flex self-center text-xs text-center bg-gray-300 rounded-lg max-w-max">
                                    <div className="items-center justify-center p-2 font-semibold text-ellipsis overflow-hidden ...">{el.injury}</div></div >
                                <div className="self-center text-left cursor-pointer" onClick={()=>{
                                    handleAction(index);
                                }}>
                                    
                                    {
                                        (action!=-1 && action===index)?<div className="absolute self-start overflow-visible w-36 h-16 bg-white z-10 shadow-md border-b-1">
                                            <div className="flex px-2 pt-1 justify-between text-indigo-500"><div className="font-semibold">edit</div><FontAwesomeIcon icon={faEdit}/></div>
                                            <div className="flex px-2 pt-1 justify-between text-red-500"><div className="font-semibold">remove</div><FontAwesomeIcon icon={faRemove} /></div>
                                        </div>:<div className="grid gap-1 ml-5"><div className="self-start w-1 h-1 rounded-full bg-gray-300"></div>
                                    <div className="self-start w-1 h-1 rounded-full bg-gray-300"></div>
                                    <div className="self-start w-1 h-1 rounded-full bg-gray-300"></div></div>
                                    }
                                </div >
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}
