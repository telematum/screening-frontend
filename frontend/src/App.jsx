import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
      .then(res => res.json())
      .then(data => setData(data.appointments))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="w-full h-full sm:rounded-lg ">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
          <div className="mx-9 text-2xl font-bold text-gray-400 mt-4">
            Today's Appointment List
          </div>
        </div>
        <div className="mx-10 shadow-md rounded-t-xl overflow-x-hidden">
          <table className="w-full h-full text-sm text-left rounded-full rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
              <tr>
                <th scope="col" className="p-3">
                  <div className="flex items-center">
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  PATIENTS
                </th>
                <th scope="col" className="px-6 py-3">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  TIME
                </th>
                <th scope="col" className="px-6 py-3">
                  DOCTOR
                </th>
                <th scope="col" className="px-6 py-3">
                  INJURY
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="w-4 p-4">
                  </td>
                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://xsgames.co/randomusers/assets/avatars/male/42.jpg" alt="Jese image" />
                    <div className="ps-3">
                      <div className="text-base text-black font-bold">{e.patient_name}</div>
                      <div className="font-normal text-gray-500">{e.mobile_number}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 flex-shrink-0 items-center">
                    <div className="flex text-lg flex-shrink-1 items-center font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400 mr-1"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                      {e.appointment_date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-lg items-center font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400 mr-1"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                      {e.appointment_time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-gray-500 text-lg items-center font-semibold">
                      <img src="https://ps.w.org/all-in-one-favicon/assets/icon-256x256.jpg?rev=2223081" alt="" className="w-5 h-5 mr-1 rounded-full" />
                      {e.doctor}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex font-semibold">
                      <p className="border px-2 py-1 rounded-lg bg-blue-100 font-bold text-gray-600">
                        {e.injury}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex mr-8 justify-center items-center cursor-pointer ">
                      <svg className="h-5 w-5 mr-1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#373737"/></svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
