import { useEffect, useState } from "react";
import "./input.css";
import axios from "axios";
import calender from "./assets/calander.svg";
import clock from "./assets/clock.svg";
import yellow from "./assets/yellow.svg";
import starGreen from "./assets/starGreen.svg";
import hamburgerMenu from "./assets/hamburgerMenu.svg";
import { data } from "./interface/DataInterface";
import { Profile } from "./components/Profile";
import { ImageText } from "./components/ImageText";


function App() {
	const [data, setData] = useState<data>();

	useEffect(() => {
		async function response() {
			try {
				const fetching = await axios.get(
					"https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
				);
				console.log("this is the fetched data", fetching.data);
				setData(fetching.data);
				return;
			} catch (error: any) {
				console.log(error.message);
			}
		}
		response();
	}, []);

	return (
		<div className="w-[90%] p-5 border border-gray-300 rounded-2xl mx-auto my-2">
			<h1 className="mr-auto text-gray-500 mb-5">
				Today's appointment List
			</h1>
			<div className="rounded-xl table-enclosing">
				<table className="w-full">
					<thead className="border-b border-b-gray-500">
						<tr className="text-left  text-gray-500 font-medium text-sm pb-4">
							<th>Patient</th>
							<th>Date</th>
							<th>Time</th>
							<th>Doctor</th>
							<th>Injury</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody className=" ">
						{data?.appointments?.map(
							(
								{
									patient_name,
									mobile_number,
									appointment_date,
									appointment_time,
									doctor,
									injury,
								},
								index
							) => {
								return (
									<tr
										key={index}
										className="h-14 border-t text-gray-500 border-b-gray-500 text-sm"
									>
										<Profile
											text={
												patient_name
											}
											mobNo={
												mobile_number
											}
										/>
										<ImageText
											text={
												appointment_date
											}
											image={
												calender
											}
										/>
										<ImageText
											text={
												appointment_time
											}
											image={clock}
										/>
										<ImageText
											text={doctor}
											image={
												index %
												2
													? yellow
													: starGreen
											}
										/>

										<td>
											<span className="px-[12px] bg-slate-50 border rounded-[14px] border-gray-400">
												{injury}
											</span>
										</td>
										<td>
											<button className="">
												<img
													className="w-[18px]"
													src={
														hamburgerMenu
													}
												/>
											</button>
										</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
