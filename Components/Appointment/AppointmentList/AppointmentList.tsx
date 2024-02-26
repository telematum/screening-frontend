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
import { Appointment } from "../Appointment";


const keys = ['PATIENTS', 'DATE', 'TIME', 'DOCTOR', 'INJURY', 'ACTION']

export default function AppointmentList({ list }: {list: Appointment[]}) {

  return (
    <Table>
      <TableHead>
        <TableRow>
            {keys.map((item, i)=><TableCell key={i}><label className="text-grayShade-5 text-sm font-normal">{item}</label></TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((row, i) => (
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
