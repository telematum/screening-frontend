import Patient from "./Patient"
import { BsClockHistory } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import RowDataWrapper from "./RowDataWrapper";
import Badge from "./Badge";
import { CiMenuKebab } from "react-icons/ci";

const Appointment = ({...data}) => {
    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDay = date.getDate();
        const formattedMonth = date.toLocaleString('default', { month: 'short' });
        const formattedYear = date.getFullYear();
        return `${formattedDay} ${formattedMonth} ${formattedYear}`;
    };

    return <tr className=" text-gray-500 font-medium">
        <Patient name={data.patient_name} phoneNumber={data.mobile_number}/>
        <RowDataWrapper>
                <IoCalendarOutline size={15} color={"gray"}/>
                {formatDate(data.appointment_date)}
        </RowDataWrapper>
        <RowDataWrapper>
                <BsClockHistory size={15} color={"gray"}/>
                {data.appointment_time}
        </RowDataWrapper>
        <RowDataWrapper>
                <img src="https://img.icons8.com/ios-filled/50/40C057/rating-circled.png" alt="star" className=" w-4 h-4"/>
                {data.doctor}
        </RowDataWrapper>
        <RowDataWrapper>
            <Badge label={data.injury}/>
        </RowDataWrapper>
        <td className="px-6 py-3">
            <div className="flex justify-center items-center gap-2">
                <button >
                    <CiMenuKebab size={15} fill="gray"/>
                </button>
            </div>
        </td>    
    </tr>
}

export default Appointment