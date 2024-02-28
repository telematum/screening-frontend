import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constant/URL";
import List from "./components/RowList/List";

function App() {
  const [patientInfo, setPatientInfo] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const getPatientAppointmentList = async () => {
    setIsLoading(true);
    const res = await axios.get(BASE_URL);
    if (res?.data) {
      setPatientInfo(res.data?.appointments);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPatientAppointmentList();
  }, []);

  return (
    <div className="__appointment__list__section__main px-[6%] py-[5%]">
      <div className="border px-[2%] py-[2%] border-b-[0px] rounded-[20px] overflow-x-auto">
        <div className="__header__section max-sm:p-2">
          <h4 className="text-xl max-sm:text-lg font-medium text-[#848498]">
            Today's Appointment List
          </h4>
        </div>

        <div className="__list__container pt-[20px]">
          <div className="__list__table__main">
            <table className="w-full">
              <thead>
                <tr className="[&>th]:text-start [&>th]:p-4 [&>th]:text-[#a2adbd] bg-[#fafafa] border-b">
                  <th className="rounded-tl-[15px]">Patients</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Doctor</th>
                  <th>Injury</th>
                  <th className="rounded-tr-[15px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {isloading
                  ? "Loading..."
                  : patientInfo?.map((item, index) => {
                      return <List key={index} data={item} />;
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
