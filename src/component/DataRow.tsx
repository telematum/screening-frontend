import React from 'react';
import { RxCalendar } from 'react-icons/rx';
import { BsClockHistory } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdStars } from 'react-icons/md';

const DataRow = ({ data }) => (
  <tr className="border-b h-12 *:text-gray-500 *:text-sm last:border-none">
    <td className="flex flex-row pt-1 items-center">
      <div className="p-4 bg-green-500 border rounded-full font-bold text-white flex items-center justify-center font-mono w-4 h-4 mr-2">
        {data.patient_name.split('')[0]}
      </div>
      <div className="flex flex-col">
        <span className="font-black text-zinc-900">{data.patient_name}</span>
        <span className="text-xs">+{data.mobile_number}</span>
      </div>
    </td>
    <td>
      <div className="flex flex-row pt-1 items-center">
        <RxCalendar className="mr-2" />
        {data.appointment_date}
      </div>
    </td>
    <td>
      <div className="flex flex-row pt-1 items-center">
        <BsClockHistory className="mr-2" />
        {data.appointment_time}
      </div>
    </td>
    <td>
      <div className="flex flex-row pt-1 items-center">
        <MdStars
          size={20}
          color={data.injury.startsWith('S') ? '#FAB794' : '#66CB9F'}
          className="mr-2"
        />
        {data.doctor}
      </div>
    </td>
    <td>
      <div className="bg-slate-200 table-cell text-slate-500 font-bold text-[0.7rem] p-1 pl-2 pr-2 rounded-lg">
        {data.injury}
      </div>
    </td>
    <td align="center" className="text-gray-500">
      <BsThreeDotsVertical size={20} />
    </td>
  </tr>
);

export default DataRow;
