import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { TableHeaderList } from '../../utils/constant';

const Table = ({userList}) => {
  const tableHeaderList = TableHeaderList;

  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            {
              tableHeaderList.map((data) => {
                return (<th key={data.id} className="border-b text-left text-sm font-semibold text-gray-400 p-4">{data.name}</th>);
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            userList.map((user,id) => {
              return (
                <tr key={id}>
                  <td className="border-b px-4 py-2">
                      <div className='flex items-center gap-2'>
                          <div className="h-12 w-12 bg-blue-100 rounded-full mr-3"></div>
                          <div>
                            <p className="font-semibold text-lg">
                              {user.patient_name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {user.mobile_number}
                            </p>
                          </div>
                      </div>
                  </td>
                  <td className="border-b px-4 py-2">
                      <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} className="text-gray-400 bg-white rounded-full border border-gray-100 w-5 h-5" />
                          <span className='text-gray-500 font-normal'>{user.appointment_date}</span>
                      </div>
                  </td>
                  <td className="border-b px-4 py-2">
                      <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faClock} className="text-gray-400 bg-white rounded-full border border-gray-100 w-5 h-5" />
                          <span className='text-gray-500 font-normal'>{user.appointment_time}</span>
                      </div>
                  </td>
                  <td className="border-b px-4 py-2">
                      <div className='flex items-center gap-2'>
                          <FontAwesomeIcon icon={faStar} className="text-white bg-green-500 rounded-full p-1 w-4 h-4" />
                          <span className='text-gray-500 font-normal'>{user.doctor}</span>
                      </div>
                  </td>
                  <td className="border-b px-4 py-2">
                      <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-bold text-gray-500">
                        {user.injury}
                      </span>
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                      <FontAwesomeIcon icon={faEllipsisV} className="text-gray-400" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
