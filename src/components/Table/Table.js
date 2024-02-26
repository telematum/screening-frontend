import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons/faCalendarDay';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import profilePic from '../../images/profile.jpg';
import { format } from 'date-fns/format';

const Table = ({ headerData, bodyData }) => {

  return (
    <div>
      <div className="shadow-md sm:rounded-lg">
        <table className="w-full text-lg text-left">
          <thead className="text-sm uppercase bg-gray-100">
            <tr>
              {headerData.map((heading, index) =>
                <th scope="col" className="px-6 py-6 text-gray-400" key={index}>{heading}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {bodyData?.map((item, index) => {
              const currentStatusclassName = (index > 2 && index < 5) ? 'bg-red-500' : 'bg-green-500';

              return <tr key={index} className='bg-white border-b'>
                <td className="flex items-center px-6 py-4 whitespace-nowrap">
                  <img className="w-10 h-10 rounded-full" src={profilePic} alt={`Patient${index + 1}`} />
                  <div className="ps-3">
                    <div className="font-bold text-gray-600">{item?.patient_name}</div>
                    <div className="font-normal text-gray-400">{'+'}{item?.mobile_number}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {<FontAwesomeIcon icon={faCalendarDay} />}{' '}
                  {format(item?.appointment_date, 'dd MMM yyyy')}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {<FontAwesomeIcon icon={faClockRotateLeft} />}{' '}
                  {item?.appointment_time}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full ${currentStatusclassName} me-2`}>
                    </div>
                    {item?.doctor}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  <span className="rounded-lg bg-cyan-50 py-1.5 px-3">
                    {item?.injury}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {<FontAwesomeIcon className='ps-5' icon={faEllipsisVertical} />}
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table;