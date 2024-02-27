import { useState, useEffect } from 'react'

function Table() {
	const [appointmentData, setAppointmentData] = useState([])
	useEffect(() => {
		fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setAppointmentData(data.appointments)
			})
	}, [])

	console.log('appointmentData', appointmentData)
	return (
		<table className='table p-2'>
			<thead >
				<tr>
					<th>PATIENTS</th>
					<th>DATE</th>
					<th>TIME</th>
					<th>DOCTOR</th>
					<th>INJURY</th>
					<th>ACTION</th>
				</tr>
			</thead>
			<tbody>
				{appointmentData.map(appointment => {
					return <tr>
						<th scope='row'>
							{appointment.patient_name}
							<p className='fw-lighter'>{appointment.mobile_number}</p>
							</th>
						<td>{appointment.appointment_date}</td>
						<td>{appointment.appointment_time}</td>
						<td>{appointment.doctor}</td>
						<td>
							<button type='button' className='btn btn-secondary'>{appointment.injury}</button>
						</td>
						<td>
							<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />
							<span className='material-symbols-outlined'>more_vert</span>
						</td>
					</tr>
				})
				}
			</tbody>
		</table>
	)
}

export default Table