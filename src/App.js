import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Replace 'your_json_link' with the actual JSON link
    fetch(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    )
      .then((response) => response.json())
      .then((data) => setTableData(data.appointments))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getInitials = (name) => {
    const words = name.split(" ");
    const initials = words.map((word) => word[0]).join("");
    return initials;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // Add alpha channel for 50% opacity
    const opacity = "80"; // Hex value for 50% opacity
    return `${color}${opacity}`;
  };

  return (
    <div className="whole-container">
      <div className="table-container">
        <h2 className="heading">Today's Appointment List</h2>
        <div className="table-holder">
          <table>
            <thead>
              <tr className="head-row">
                <th>Patients</th>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Injury</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="data-row">
                  {/* name and mobile column */}
                  <td>
                    <div className="column-align">
                      <div
                        className="initials-circle"
                        style={{ background: getRandomColor() }}
                      >
                        <p>{getInitials(row.patient_name)}</p>
                      </div>

                      <div>
                        <p className="name">{row.patient_name}</p>
                        <p className="mobile">{row.mobile_number}</p>
                      </div>
                    </div>
                  </td>

                  {/* date column */}
                  <td className="date">
                    <div className="column-align">
                      <div
                        className="initials-circle"
                        style={{ background: getRandomColor() }}
                      ></div>

                      <div>
                        <p className="name">{row.appointment_date}</p>
                      </div>
                    </div>
                  </td>

                  {/* time column */}
                  {/* <td className="time" >{row.appointment_time}</td> */}
                  <td className="time">
                    <div className="column-align">
                      <div
                        className="initials-circle"
                        style={{ background: getRandomColor() }}
                      ></div>

                      <div>
                        <p className="name">{row.appointment_time}</p>
                      </div>
                    </div>
                  </td>

                  {/* doctor column */}
                  <td className="doctor">
                    <div className="column-align">
                      <div
                        className="initials-circle"
                        style={{ background: getRandomColor() }}
                      ></div>

                      <div>
                        <p className="name">{row.doctor}</p>
                      </div>
                    </div>
                  </td>

                  {/* injury column */}
                  <td className="injury">
                    <div className="injury-data">
                      <p>{row.injury}</p>
                    </div>
                  </td>

                  {/* action column */}
                  <td>
                    <div className="action-icon">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
