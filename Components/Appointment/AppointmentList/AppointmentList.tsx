import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/Components/Table";
import { GoClock } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import star from '@/asset/icons/Star.png'

import moment from"moment";
import User from "./User";
import Image from "next/image";

const data = [
    {
      "patient_name": "John Doe",
      "mobile_number": "123-456-7890",
      "appointment_date": "2024-02-26",
      "appointment_time": "10:00 AM",
      "doctor": "Dr. Smith",
      "injury": "Sprained ankle"
    },
    {
      "patient_name": "Jane Smith",
      "mobile_number": "987-654-3210",
      "appointment_date": "2024-02-26",
      "appointment_time": "11:30 AM",
      "doctor": "Dr. Johnson",
      "injury": "Back pain"
    },
    {
      "patient_name": "Michael Johnson",
      "mobile_number": "456-789-0123",
      "appointment_date": "2024-02-26",
      "appointment_time": "1:00 PM",
      "doctor": "Dr. Lee",
      "injury": "Headache"
    },
    {
      "patient_name": "Emily Davis",
      "mobile_number": "789-012-3456",
      "appointment_date": "2024-02-26",
      "appointment_time": "2:30 PM",
      "doctor": "Dr. Patel",
      "injury": "Sore throat"
    },
    {
      "patient_name": "David Wilson",
      "mobile_number": "321-654-9870",
      "appointment_date": "2024-02-26",
      "appointment_time": "4:00 PM",
      "doctor": "Dr. Garcia",
      "injury": "Fever"
    },
    {
      "patient_name": "Sarah Brown",
      "mobile_number": "654-321-0987",
      "appointment_date": "2024-02-26",
      "appointment_time": "5:30 PM",
      "doctor": "Dr. Kim",
      "injury": "Cough"
    }
  ];

const keys = ['PATIENTS', 'DATE', 'TIME', 'DOCTOR', 'INJURY', 'ACTION']


export default function AppointmentList() {

  return (
    <Table>
      <TableHead>
        <TableRow>
            {keys.map((item, i)=><TableCell key={i}><label className="text-grayShade-5 text-sm font-normal">{item}</label></TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            <TableCell>
                <User name={row.patient_name} number={row.mobile_number}/>
              </TableCell>
              <TableCell>
                <label className="text-base text-grayShade-6 flex gap-2 items-center"><CiCalendarDate/>{moment(row.appointment_date).format( 'DD MMM YYYY')}</label>
              </TableCell>
              <TableCell>
                <label className="text-base text-grayShade-6 flex gap-2 items-center"><GoClock/> {row.appointment_time}</label>
              </TableCell>
              <TableCell>
                <label className="text-base text-grayShade-6 flex gap-2 items-center"><Image className="w-[16px]" src={star} alt={"star"}/> {row.doctor}</label>
              </TableCell>
              <TableCell>
                <label className="bg-blueShade-1 text-sm font-medium py-1 px-2 text-blueShade-2 rounded-lg">{row.injury}</label>
              </TableCell>
              <TableCell>
                <BsThreeDotsVertical className="text-blueShade-3 cursor-pointer ml-3"/>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
