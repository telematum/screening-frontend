import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import DataRow from './DataRow';

const MainBody = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: 'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json',
      method: 'get',
    })
      .then((res) => {
        setData(res.data.appointments);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="m-4 ">
      <div className=" w-full border border-gray-200 rounded-lg p-4">
        <div className=" text-gray-500 font-medium ">
          Today&apos;s Appointment List
        </div>
        <div className="mt-4 mb-4">
          <table className="w-full border-spacing-0 border-tools-table-outline rounded-lg border-black border-1">
            <Header />
            <tbody>
              {data.map((d: any) => (
                <DataRow data={d} key={d.patient_name} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
