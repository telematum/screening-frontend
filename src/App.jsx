import { useState, useEffect } from "react";
import { getTableData } from "./apiServices/apis";
import ClockSvg from "./SvgElements/clockSvg";
import DateSvg from "./SvgElements/DateSvg";
import StarSvg from "./SvgElements/StarSvg";
import MoreIconSvg from "./SvgElements/MoreIconSvg";
import Loader from "./Components/Loader/Loader";
import DataTable from "./Components/DataTable/DataTable";

function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableHeader = [
    "Patients",
    "Date",
    "Time",
    "Doctor",
    "Injury",
    "Action",
  ];

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    const result = await getTableData();
    console.log("res", result);
    if (result.status === 200) {
      setTableData(result.data.appointments);
      setLoading(false);
    }
    setLoading(false);
  };

  const SvgsObj = {
    clockSvg: <ClockSvg />,
    dateSvg: <DateSvg />,
    starSvg: <StarSvg />,
    moreIconSvg: <MoreIconSvg />,
  };

  return (
    <>
      <div className="p-5 h-screen bg-white-100">
        <div>
          <h4 className="text-xl text-slate-500 font-bold mb-8">
            Today's Appointment List
          </h4>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-auto">
            <DataTable
              tableHeader={tableHeader}
              tableData={tableData}
              svgs={SvgsObj}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
