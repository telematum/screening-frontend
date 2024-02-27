import { useEffect, useState } from "react";
import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import { appointmentAPIResponseType, appointmentDataTypes } from "./types";
import { BASE_URL, appointmentHeadData } from "../../utils/constant";

const AppointmentTable = () => {
  const [appointmentList, setAppointmentList] = useState<
    appointmentDataTypes[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const getTodaysAppointmentList = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/todays.json`);
      const appointmentListData: appointmentAPIResponseType =
        await response.json();
      if (
        appointmentListData?.appointments &&
        appointmentListData.appointments.length > 0
      ) {
        setAppointmentList(appointmentListData.appointments);
      } else {
        setErrorMsg("Unable to fetch data!");
      }
      setIsLoading(false);
    } catch (error) {
      setErrorMsg("There is some error while fetching data");
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getTodaysAppointmentList();
  }, []);

  if (isLoading)
    <div className="text-center text-base font-semibold">Loading...</div>;

  return (
    <div>
      {!errorMsg ? (
        <table className="w-full text-sm text-left rtl:text-right text-[#7b7e83] border-separate border-spacing-0">
          <TableHead headData={appointmentHeadData} />
          {!isLoading && (
            <tbody>
              {appointmentList &&
                appointmentList.map((appointment: appointmentDataTypes) => (
                  <TableBody
                    appointment={appointment}
                    key={appointment.mobile_number}
                  />
                ))}
            </tbody>
          )}
        </table>
      ) : (
        <div className="text-red-600 w-full text-center">{errorMsg}</div>
      )}
    </div>
  );
};

export default AppointmentTable;
