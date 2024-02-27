import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { format } from "date-fns";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
      .then((response) => {
        // Handle success
        setList(response.data.appointments);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  return (
    <div className="page">
      <h1 className="text-3xl font-bold text-gray-500">
        Today's Appointment List
      </h1>
      <br />
      <div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="uppercase py-3 px-3 text-left">Patients</th>
              <th className="uppercase py-3 px-3 text-left">Date</th>
              <th className="uppercase py-3 px-3 text-left">Time</th>
              <th className="uppercase py-3 px-3 text-left">Doctor</th>
              <th className="uppercase py-3 px-3 text-left">Injury</th>
              <th className="uppercase py-3 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((ele, i) => (
              <tr key={i}>
                <td>
                  <div className="name-block">
                    <span>
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                        alt=""
                      />
                    </span>
                    <span>
                      <h3 className="font-bold">{ele.patient_name}</h3>
                      <h3 className="text-gray-500">+{ele.mobile_number}</h3>
                    </span>
                  </div>
                </td>
                <td>
                  <i className="fas fa-calendar text-gray-500"></i>&nbsp;
                  <span>
                    {format(new Date(ele.appointment_date), "dd MMM yyyy")}
                  </span>
                </td>
                <td>
                  <i className="fas fa-clock text-gray-500"></i>&nbsp;
                  <span>{ele.appointment_time}</span>
                </td>
                <td>
                  <span
                    className={i % 2 === 0 ? "doc-star even" : "doc-star odd"}
                  >
                    <i className="fas fa-star"></i>
                  </span>
                  &nbsp;
                  <span>{ele.doctor}</span>
                </td>
                <td>
                  <span className="inline-block px-2 py-2 text-xs font-semibold leading-none text-gray-800 bg-gray-300 rounded">
                    {ele.injury}
                  </span>
                </td>
                <td className=" text-center">
                  <i className="fas fa-ellipsis-v text-gray-500"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
