import { useEffect, useState } from 'react';
import './App.css';
import { BsClockHistory } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
function App() {
  const [data, setData] = useState([]);
  const style = { color: "white", fontSize: "1em" }
  async function logMovies() {
    const response = await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json");
    const movies = await response.json();
    setData(movies?.appointments);
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  useEffect(() => {
    logMovies();
  })
  return (
    <div className="App">

      <div>
        <div class="flex justify-start">
          <h1 class="text-zinc-500 font-bold mb-2">

            Today's Appointment List
          </h1>
        </div>
        <table class="table-auto border-collapse border border-gray-500">
          <thead>
            <tr class="bg-gray-50">
              <th class="font-semibold text-gray-500">PATIENTS</th>
              <th class="font-semibold text-gray-500">DATE</th>
              <th class="font-semibold text-gray-500">TIME</th>
              <th class="font-semibold text-gray-500">DOCTOR</th>
              <th class="font-semibold text-gray-500">INJURY</th>
              <th class="font-semibold text-gray-500">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, index) => {
              return (<tr>
                <td><div><p class="font-sans text-neutral-950 font-semibold">{el.patient_name}</p><p class="text-xs text-gray-600">{`+${el.mobile_number}`}</p></div></td>
                <td class="font-semibold text-gray-600">
                  <div class="flex justify-center items-center">
                    <CiCalendarDate />
                    <p class="ml-1">{formatDate(el.appointment_date)}</p>
                  </div>
                </td>
                <td class="font-semibold text-gray-600">
                  <div class="flex justify-center items-center">
                    <BsClockHistory />

                    <p class="ml-1">{el.appointment_time}</p>
                  </div>
                </td>
                <td class="font-semibold text-gray-600">
                  <div class="flex justify-center items-center">
                    <span class={(index === 3 || index === 4) ? "bg-red-400 rounded-full" : "bg-green-400 rounded-full"}><FaStar style={style} /></span>


                    <p class="ml-1">{el.doctor}</p>
                  </div>
                </td>
                <td><button class="bg-slate-300 rounded-md font-medium text-xs h-7 p-1 m-1">{el.injury}</button></td>
                <td> &#8942;
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
