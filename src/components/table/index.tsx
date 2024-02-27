import { LuCalendarRange } from "react-icons/lu";
import { MdStars } from "react-icons/md";
import {
  PiClockCountdown,
  PiDotsThreeOutlineVerticalFill,
} from "react-icons/pi";
import { TableListProps } from "../../types/table";
import { tableAvatars, tableHeadings } from "../../utils/common";

/**
 * @interface for table props.
 */
interface props {
  listData: TableListProps[];
}

const CustomTable = ({ listData }: props) => {
  return (
    <div className="h-max border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full h-full divide-y divide-gray-200 rounded-2xl">
        <thead className="bg-slate-100">
          <tr>
            {tableHeadings?.map((item: string, index: number) => {
              return (
                <th
                  key={index + item}
                  className={`${
                    index === tableHeadings?.length - 1
                      ? "text-right"
                      : "text-left"
                  }   p-6 uppercase font-medium text-sm text-gray-400 border-b`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {listData &&
            listData?.map((list: TableListProps, index: number) => {
              return (
                <tr
                  className="border-b text-base font-semibold text-gray-500"
                  key={list?.patient_name + index}
                >
                  <td className="flex justify-start  items-center gap-3 text-left p-6">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={tableAvatars[index % tableAvatars.length]}
                      alt={list?.patient_name + "avatar"}
                    />
                    <div className="flex flex-col text-black font-bold">
                      {list?.patient_name}
                      <span className="text-xs font-semibold text-gray-400">
                        +{list?.mobile_number}
                      </span>
                    </div>
                  </td>
                  <td className="text-left p-6 ">
                    <div className="flex justify-start items-center gap-2 ">
                      <LuCalendarRange />
                      {list?.appointment_date}
                    </div>
                  </td>
                  <td className="text-left p-6 ">
                    <div className="flex justify-start items-center gap-2 ">
                      <PiClockCountdown />
                      {list?.appointment_time}
                    </div>
                  </td>
                  <td className="text-left p-6 ">
                    <div className="flex justify-start items-center gap-2 ">
                      <MdStars
                        className={
                          index === 2 || index === 4
                            ? "text-orange-400"
                            : "text-green-600"
                        }
                      />
                      {list?.doctor}
                    </div>
                  </td>
                  <td className="text-left p-6 ">
                    <div className="p-2 bg-green-200 w-max rounded-lg text-sm text-center text-gray-600">
                      {list?.injury}
                    </div>
                  </td>
                  <td className="p-6 px-10">
                    <div className="flex justify-end">
                      <PiDotsThreeOutlineVerticalFill className="text-gray-400" />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
