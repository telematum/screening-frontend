import React, { useEffect, useState } from "react";
import { getAppointmentList } from "../../api/api";
import { get24FormattedDateTime } from "./utils";
export default function AppointmentList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchAppointmentData = async () => {
    try {
      let data = await getAppointmentList();
      data = await data.json();
      data = data?.appointments || [];
      for (let item of data) {
        const { appointment_date, appointment_time } = item;
        if (appointment_date) {
          let date = new Date(appointment_date);
          if (appointment_date && appointment_time) {
            const { formattedTime, formattedDate } = get24FormattedDateTime(
              appointment_date,
              appointment_time
            );
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            item.formattedDateAppontmentDate = formattedDate;
            item.formattedDateAppontmentTime = formattedTime;
          }
        }
      }
      setData(data || []);
    } catch (e) {
      console.log(e);

      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAppointmentData();
  }, []);
  return (
    <div className="w-[90%] p-4 bg-white m-[auto] shadow-lg shadow-grey-500 rounded-[15px] mt-4">
      <h3 className="text-[#7a7a9d] text-[24px] mb-4 font-bold">
        Today's Appointment List
      </h3>

      <div>
        {loading ? (
          <h3>Please Wait</h3>
        ) : error ? (
          <h3>Something went wrong please try agian.</h3>
        ) : (
          <table className="w-full">
            <thead className="uppercase text-[#acb6c3] text-[14px]">
              <tr>
                <td className="text-left p-2 bg-tableHeaders rounded-tl-lg">
                  Patients
                </td>
                <td className="text-left p-2 bg-tableHeaders">Date</td>
                <td className="text-left p-2 bg-tableHeaders">Time</td>
                <td className="text-left p-2 bg-tableHeaders">Doctors</td>
                <td className="text-left p-2 bg-tableHeaders">Injury</td>
                <td className="text-left p-2 bg-tableHeaders  rounded-tr-lg">
                  Action
                </td>
              </tr>
            </thead>
            <tbody className="text-[#a7afb8]">
              {data?.map((item, index) => (
                <tr key={index}>
                  <td className="text-left p-2 ">
                    <div className="flex gap-2 items-center">
                      <img
                        src={"/images/user.png"}
                        alt="avatar"
                        className="max-w-8 block aspect-square object-cover h-fit"
                      />
                      <div>
                        <h4 className="text-[#34343b] font-bold">
                          {item?.patient_name}
                        </h4>
                        <p>+{item?.mobile_number}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-left p-2">
                    <div className="flex gap-2 items-center">
                      <img
                        src={"/images/calendar.png"}
                        alt="avatar"
                        className="max-w-6 block aspect-square object-cover h-fit"
                      />
                      {item?.formattedDateAppontmentDate ||
                        item?.appointment_date}
                    </div>
                  </td>
                  <td className="text-left p-2">
                    <div className="flex gap-2 items-center">
                      <img
                        src={"/images/clock.png"}
                        alt="avatar"
                        className="max-w-6 block aspect-square object-cover h-fit"
                      />
                      {item?.formattedDateAppontmentTime ||
                        item?.appointment_time}
                    </div>
                  </td>
                  <td className="text-left p-2">
                    <div className="flex gap-2 items-center">
                      <img
                        src={"/images/rating.png"}
                        alt="avatar"
                        className="max-w-6 block aspect-square object-cover h-fit"
                      />
                      {item?.doctor}
                    </div>
                  </td>
                  <td className="text-left p-2">
                    {" "}
                    <div className="bg-[#e4ecf7] px-2 py-1 w-fit rounded-md text-[#888fad]">
                      {item?.injury}
                    </div>
                  </td>
                  <td className="text-left p-2">
                    {" "}
                    <img
                      src={"/images/action.png"}
                      alt="avatar"
                      className="max-w-6 block aspect-square object-cover h-fit"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
