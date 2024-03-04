/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AvatarGenerator } from 'random-avatar-generator'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const Details = ({ info }) => {

  let count = 0;
  const generator = new AvatarGenerator();
  generator.generateRandomAvatar();

  const imgUrl = `${generator.generateRandomAvatar(count)}`

  return (
    <tr>
      <td className='flex items-center gap-x-2 border-b px-4 py-2'>
        <img src={imgUrl} alt="Avatar" className='w-8' />
        <span className='flex flex-col'>
          <h1 className='font-bold'>{info.patient_name}</h1>
          <h3 className='text-xs text-gray-500'>+{info.mobile_number}</h3>
        </span>
      </td>
      <td className='border-b px-10 text-sm text-gray-500'>
        <span className='flex items-center gap-1'>
          <MdOutlineDateRange className='text-gray-500 text-[16px]' />
          {info.appointment_date}
        </span>
      </td>
      <td className='border-b px-10 text-sm text-gray-500'>
        <span className='flex items-center gap-1'>
          <IoTimeOutline className='text-gray-500 text-[16px]' />
          {info.appointment_time}
        </span>
      </td>
      <td className='border-b px-10 text-sm text-gray-500'>
        <span className='flex items-center gap-1'>
          <div className=''>
            <IoIosStar className='bg-green-400 p-1 rounded-full text-lg text-white' />
          </div>
          {info.doctor}
        </span>
      </td>
      <td className='border-b text-center px-10 text-sm text-gray-500'>
        <span className='bg-[#E4ECF7] px-2 py-1 rounded-lg'>
          {info.injury}
        </span>
      </td>
      <td className='border-b px-10 text-sm text-gray-500'>
        <BsThreeDotsVertical className='text-xl text-gray-300 cursor-pointer hover:text-black' />
      </td>
    </tr>
  );
};

export default Details;
