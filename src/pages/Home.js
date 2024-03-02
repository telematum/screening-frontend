import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faCalendarAlt  , faStar } from '@fortawesome/free-solid-svg-icons'; // Import the clock icon
import { info } from "../data/info";

// Add the date formatting code here
const dateString = '2024-02-26';
const dateParts = dateString.split('-');
const formattedDate = `${dateParts[2]}-${getMonthName(dateParts[1])}-${dateParts[0]}`;

function getMonthName(month) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[parseInt(month, 10) - 1];
}

console.log(formattedDate); // Output: 26-Feb-2024

function Home() {
    const data = info.appointments;

    return (
        <div>
            <div>
                <h1 style={{ padding: '100px 60px 100px 20px', width: '100%', margin: 'auto' }}>Today's Appointment List</h1>
            </div>
            <table className="table table-striped" style={{  padding: '400px', width: '100%', margin: 'auto' }}>
                <thead>
                    <tr >
                        <th style={{ fontSize: '25px' }} scope="col">Patients</th>
                        <th style={{ fontSize: '25px' }} scope="col">Date</th>
                        <th style={{ fontSize: '25px' }} scope="col">Time</th>
                        <th style={{ fontSize: '25px' }} scope="col">Doctor</th>
                        <th style={{ fontSize: '25px' }} scope="col">Injury</th>
                        <th style={{ fontSize: '25px' }} scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <img src="/user.jpeg" alt="Profile" width="50" height="50" style={{ marginRight: '10px' }} />
                                    </div>
                                    <div>
                                        <div>{item.patient_name}</div>
                                        <div>{item.mobile_number}</div>
                                    </div>
                                </div>
                            </td>
                            <td ><FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }}/>{formattedDate}</td> {/* Use the formatted date here */}
                            <td><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} />{item.appointment_time}</td>
                            <td><FontAwesomeIcon icon={faStar} style={{ marginRight: '5px' }} />{item.doctor}</td>
                            <td>{item.injury}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
