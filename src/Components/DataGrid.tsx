import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import "../Components/DataGrid.css";

interface Appointment {
  patient_name: string;
  mobile_number: string;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
}

const DataGrid: React.FC = () => {
  const [data, setData] = useState<Appointment[]>([]);

  const formatAppointmentDate = (dateString: string): string => {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<{ appointments: Appointment[] }> =
        await axios.get(
          `https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json`
        );
      setData(response.data.appointments);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch data");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-grey">Today's Appointment List</h2>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th
                scope="col"
                style={{
                  width: "300px",
                  backgroundColor: "#F0F8FF",
                  color: "#9FA6B2",
                }}
              >
                PATIENTS
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#F0F8FF", color: "#9FA6B2" }}
              >
                DATE
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#F0F8FF", color: "#9FA6B2" }}
              >
                TIME
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#F0F8FF", color: "#9FA6B2" }}
              >
                DOCTOR
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#F0F8FF", color: "#9FA6B2" }}
              >
                INJURY
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#F0F8FF", color: "#9FA6B2" }}
              >
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment: Appointment) => (
              <tr key={appointment.mobile_number}>
                <td>
                  <img
                    src="https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg"
                    alt="Patient"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    {appointment.patient_name}
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "normal",
                      color: "grey",
                      marginLeft: "50px",
                      marginTop: "-5px",
                    }}
                  >
                    {appointment.mobile_number}
                  </span>
                </td>
                <td>
                  <i
                    className="bi bi-calendar mr-2"
                    style={{ marginRight: "5px" }}
                  ></i>
                  <span style={{ color: "grey" }}>
                    {formatAppointmentDate(appointment.appointment_date)}
                  </span>
                </td>
                <td>
                  <i
                    className="bi bi-clock-history"
                    style={{ marginRight: "5px" }}
                  ></i>
                  <span style={{ color: "grey" }}>
                    {appointment.appointment_time}
                  </span>
                </td>
                <td>
                  {appointment.doctor === "Dr. Patel" ||
                  appointment.doctor === "Dr. Garcia" ? (
                    <i
                      className="bi bi-star-fill text-warning"
                      style={{ marginRight: "5px" }}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-star-fill text-success"
                      style={{ marginRight: "5px" }}
                    ></i>
                  )}

                  <span style={{ fontWeight: "bold", color: "grey" }}>
                    {appointment.doctor}
                  </span>
                </td>
                <td>
                  <div className="card bg-light" style={{ maxWidth: "10rem" }}>
                    {/* <div className="card-body">{appointment.injury}</div> */}
                    <span
                      className="card-body"
                      style={{ fontWeight: "bold", color: "grey" }}
                    >
                      {appointment.injury}
                    </span>
                  </div>
                </td>
                <td style={{ verticalAlign: "middle" }}>
                  <span style={{ fontSize: "1.5rem" }}>&#8942;</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataGrid;
