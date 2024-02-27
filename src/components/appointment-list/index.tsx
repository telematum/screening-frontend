import { useEffect } from "react";
import useCallAppointmentList from "../../utils/api-handler";
import CustomTable from "../table";
import { ImSpinner } from "react-icons/im";

const AppointmentList = () => {
  // call custom hook to call api hanlder which accept url extension and return >> data , loading , fetchData
  const { data, loading, fetchData } = useCallAppointmentList({
    url: "/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json",
  });

  /** Use effect to get Data from  fetchData function */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="max-h-[800px] h-max w-screen overflow-auto border border-gray-200 rounded-xl py-4 px-6 flex flex-col gap-5">
      <h3 className="font-semibold text-gray-400 text-xl">
        {" "}
        Today's Appointment List
      </h3>
      {loading ? (
        <div className="w-full flex justify-center items-center min-h-96">
          <ImSpinner className="animate-spin h-20 w-20 text-green-300" />
        </div>
      ) : (
        <CustomTable listData={data} />
      )}
    </section>
  );
};

export default AppointmentList;
