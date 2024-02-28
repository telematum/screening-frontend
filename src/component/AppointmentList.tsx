import { CardLayout } from "./card/CardLayout";
import { useGetPatientList } from "./hooks/useGetPatientList";
import { TableBody } from "./table/TableBody";
import { TableHeader } from "./table/TableHeader";
import { AppointmentListProps, ColumnProps } from "./table/types";
import { formatDate, stringAvatar } from "./utils";

export const AppointmentList = () => {
  const { data: listData, loading } = useGetPatientList();

  const tableColumn: ColumnProps[] = [
    {
      id: 1,
      name: "patient_name",
      label: "Patients",
      headerStyle: "px-6 py-3 text-[14px]  text-left truncate font-bold",
      renderCell: (params?: AppointmentListProps) => {
        return (
          <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
            <div className="flex items-center justify-center text-white font-semibold bg-blue-500 h-12 w-12 rounded-full">
              {stringAvatar(String(params?.patient_name))}
            </div>
            <div className="ps-3">
              <div className="text-base font-bold text-[15px] lg:text-[16px] flex gap-2">
                {params?.patient_name}{" "}
                <div className=" lg:hidden bg-blue-100 px-6 py-1 text-[14px] lg:text-[15px] text-gray-600 w-fit whitespace-nowrap rounded-md font-bold">
                  {params?.injury}
                </div>
              </div>
              <div className="font-semibold text-[14px] lg:text-[15px] text-gray-400">
                +{params?.mobile_number}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      id: 2,
      name: "appointment_date",
      label: "Date",
      dataStyle: "hidden md:table-cell",
      headerStyle:
        "px-6 py-3 text-[14px] hidden md:table-cell text-left truncate  ",
      renderCell: (params) => {
        return (
          <div className="flex px-6 py-4 items-center text-left ">
            <img
              className="w-5 h-5 mr-2 opacity-40 text-gray-50"
              src="../../public/date-range-svgrepo-com.svg"
              alt="Jese image"
            />
            <div className="flex gap-2 text-[14px]  text-gray-500 font-semibold whitespace-nowrap">
              {formatDate(String(params?.appointment_date))}
              <div className="lg:hidden text-gray-500 font-semibold whitespace-nowrap">
                {params?.appointment_time}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      id: 3,
      name: "appointment_time",
      label: "Time",
      dataStyle: "hidden lg:table-cell",
      headerStyle:
        "px-6 py-3 text-[14px] text-left truncate hidden lg:table-cell",
      renderCell: (params) => {
        return (
          <div className="flex px-6 py-4 text-[14px]  items-center text-left ">
            <img
              className="w-5 h-5 mr-2 text-gray-50 opacity-40"
              src="../../public/time-svgrepo-com.svg"
              alt="Jese image"
            />
            <div className="text-gray-500 font-semibold whitespace-nowrap">
              {params?.appointment_time}
            </div>
          </div>
        );
      },
    },
    {
      id: 4,
      name: "doctor",
      label: "Doctor",
      headerStyle: "px-6 py-3 text-[14px] text-left truncate ",
      renderCell: (params) => {
        return (
          <>
            <div className="flex text-[14px] px-6 py-2 lg:py-4 items-center text-left ">
              {params?.patient_name === "John Doe" ||
              params?.patient_name === "Jane Smith" ? (
                <img
                  className="w-6 h-6 mr-2  text-gray-50"
                  src="../../public/star2.svg"
                  alt="Jese image"
                />
              ) : (
                <img
                  className="w-6 h-6 mr-2 text-gray-50"
                  src="../../public/star-circle-fill-svgrepo-com.svg"
                  alt="Jese image"
                />
              )}
              <div className="text-gray-500 font-bold whitespace-nowrap">
                {params?.doctor}
              </div>
            </div>
            <div className="flex px-6 text-[14px] md:hidden items-center text-left ">
              <img
                className="w-5 h-5 mr-2 opacity-40 text-gray-50"
                src="../../public/date-range-svgrepo-com.svg"
                alt="Jese image"
              />
              <div className="flex gap-2 text-gray-500 font-semibold whitespace-nowrap">
                {formatDate(String(params?.appointment_date))}
                <div className="lg:hidden text-gray-500 font-semibold whitespace-nowrap">
                  {params?.appointment_time}
                </div>
              </div>
            </div>
          </>
        );
      },
    },
    {
      id: 5,
      name: "injury",
      label: "Injury",
      dataStyle: "hidden lg:table-cell",
      headerStyle:
        "px-6 py-3 text-[14px] text-left truncate hidden lg:table-cell",
      renderCell: (params) => {
        return (
          <div className="px-6 py-2">
            <div className="bg-blue-100 px-6 py-2 text-sm text-gray-600 w-fit whitespace-nowrap rounded-md font-bold">
              {params?.injury}
            </div>
          </div>
        );
      },
    },
    {
      id: 6,
      name: "action",
      label: "Action",
      headerStyle: "px-6 py-3 text-[14px] truncate font-bold text-center ",
      renderCell: () => {
        return (
          <div className="flex opacity-25 justify-center items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              className="w-7 h-7 hover:cursor-pointer"
              src="../../public/menu.svg"
              alt="Jese image"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="mx-auto max-w-[1302px] flex font-sans h-screen flex-col py-2 ">
      <div className="flex-col  mt-10 bg-white px-10 py-8 rounded-lg items-center">
        <div className=" pb-4 font-bold text-gray-600 text-[18px]">
          Today's Appointment List
        </div>
        <div className="relative hidden sm:block  overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full dark:text-gray-400">
            <TableHeader tableColumn={tableColumn} />
            <TableBody tableColumn={tableColumn} listData={listData} isLoading={loading}/>
          </table>
        </div>
        <div className="block sm:hidden space-y-1">
          {listData.map((list, index) => {
            return <CardLayout key={index} list={list} />;
          })}
        </div>
      </div>
    </div>
  );
};
