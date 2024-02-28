import React from "react";
import {
  CalenderIcon,
  TimeIcon,
  DotMenuIcon,
  StarIcon,
} from "../../assets/icons/index";
import { FilterFirstAlphaString, FilterDate } from "../../utils";

const List = ({ data }) => {
  return (
    <tr className="[&>td]:p-4 border-b [&>td]:max-sm:min-w-[220px] [&>td]:max-lg:min-w-[220px]">
      <td className="max-sm:min-w-[250px]">
        <div className="__patient__meta flex items-center gap-2">
          <div className="__patient__avatar rounded-full bg-[pink] min-w-[50px] min-h-[50px] grid place-content-center">
            <span className="font-bold text-[#000000bc]">
              {FilterFirstAlphaString(data?.patient_name)}
            </span>
          </div>
          <div className="__patient__info">
            <p className="text-[16px] max-sm:text-sm font-bold">
              {data?.patient_name}
            </p>
            <span className="text-[13px] font-normal text-[#848498]">
              +{data?.mobile_number}
            </span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-[10px]">
          <img
            src={CalenderIcon}
            alt="calendarIcon"
            className="w-[15px] h-[15px]"
          />
          <p className="text-[16px] text-[#848498] font-medium">
            {FilterDate(data?.appointment_date)}
          </p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-[10px]">
          <img src={TimeIcon} alt="TimeIcon" className="w-[15px] h-[15px]" />
          <p className="text-[16px] text-[#848498] font-medium">
            {data?.appointment_time}
          </p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#73c7a4] w-fit h-fit p-1 rounded-full">
            <img src={StarIcon} alt="starIcon" className="w-[15px] h-[15px]" />
          </div>
          <p className="text-[16px] text-[#848498] font-medium">
            {data?.doctor}
          </p>
        </div>
      </td>
      <td>
        <div className="px-[10px] py-[2px] rounded-[6px] bg-[#e4ecf8] w-fit">
          <span className="text-[15px] font-medium">{data?.injury}</span>
        </div>
      </td>
      <td>
        <div className="flex justify-center w-[30%] relative">
          <img src={DotMenuIcon} alt="dotMenuIcon" className="cursor-pointer" />
          {/* Action Menu List if required */}
          {/* <div className="absolute right-4 top-6 border py-1 px-[10px] flex flex-col rounded-[6px] bg-[#8484989d] text-[13px] hover:[&>span]:bg-[#fff] [&>span]:cursor-pointer [&>span]:px-[10px] [&>span]:rounded-[5px] font-medium [&>span]:py-[3px]">
            <span>Edit</span>
            <span>Delete</span>
          </div> */}
        </div>
      </td>
    </tr>
  );
};

export default List;
