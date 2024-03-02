import React from "react";

function DateConverter(props) {
  const [year, month, day] = props.dateString.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <>
      <span className="font-medium text-sm text-[#7c84a3]">{`${day} ${
        months[parseInt(month) - 1]
      } ${year}`}</span>
    </>
  );
}

const TableBody = (props) => {
  const patientData = props.tableData;
  return (
    <>
      <tbody>
        {patientData &&
          patientData.map((data) => (
            <React.Fragment key={data.mobile_number}>
              <tr className="shadow-sm bottom-[1px] py-2">
                {data.patient_name && (
                  <td className="text-left flex justify-self-start">
                    <div className="flex items-center pl-2">
                      <span className="h-8 w-8 bg-blue-500 rounded-full pr-4 "></span>
                      <div className=" flex flex-col ml-4 ">
                        <div className="font-bold text-black ">
                          {data.patient_name}
                        </div>
                        <div className="font-medium text-xs text-gray-400">{`+${data.mobile_number}`}</div>
                      </div>
                    </div>
                  </td>
                )}
                <td className="text-left font-semibold text-gray-400">
                  <div className="flex">
                    <span className="pr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#808c98"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                    </span>
                    <DateConverter dateString={data.appointment_date} />
                  </div>
                </td>
                <td className="text-left ">
                  <div className="flex flex-row font-medium text-sm text-[#7c84a3] ">
                    <span className="pr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#808c98"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    {data.appointment_time}
                  </div>
                </td>

                <td className="text-left flex flex-row font-medium text-sm text-[#7c84a3] ">
                  <span>
                    {data.injury === "Fever" || data.injury === "Cholera" ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 rounded-full bg-red-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      </>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 rounded-full bg-green-400 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    )}
                  </span>
                  {data.doctor}
                </td>
                <td className="text-left">
                  <span className="font-semibold text-[#7c84a3] p-2 bg-[#e4ecf7] rounded-lg">
                    {data.injury}
                  </span>
                </td>
                <td className=" text-center pl-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="#7c84a3"
                    >
                      <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                    </svg>
                  </span>
                </td>
              </tr>
            </React.Fragment>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
