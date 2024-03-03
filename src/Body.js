import React, { useEffect, useState } from 'react'



const Body = () => {

    const getData = async () => {
      const data = await fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      );
      const json = await data.json();
      setAppointments(json.appointments)
      console.log(appointments)
    };

    const [appointments , setAppointments] = useState([])
    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='app'>
      <div>
        <h2 className="title">Today's Appointments List</h2>
      </div>
      <div className='table-container'>
        <table className='table'>
          <tr >
            <th>PATIENTS</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>DOCTOR</th>
            <th>INJURY</th>
            <th>ACTION</th>
          </tr>

          {appointments.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <div style={{ width: "7px", backgroundColor: "blue" }}></div>
                  <div>
                    <div style={{"color":"black" ,"margin":"none"}}>{item.patient_name}</div>

                    {/* <br /> */}
                    {item.mobile_number}
                  </div>
                </td>
                <td>📆{item.appointment_date}</td>
                <td>🕛{item.appointment_time}</td>
                <td>🧑🏻‍⚕️{item.doctor}</td>
                <td style={{ "margin-right": "30px" }}>
                  <div className="injury">{item.injury}</div>
                </td>
                <td>🚦action</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Body