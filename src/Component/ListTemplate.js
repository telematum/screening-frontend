import { RowTemplate } from "./RowTemplate"
import React from "react"
export const ListTemplate=()=>{
    return(
        <div className="flex flex-col m-8 justify-self-center items-start max-w-full">
            <div className="text-gray-500 p-2 text-lg font-semibold">Today's Appointment List</div>
            <RowTemplate/>
        </div>    
    )
}