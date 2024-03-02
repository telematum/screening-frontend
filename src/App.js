import { useEffect, useState } from "react";

function App() {

const [tableData, setTableData]  = useState();

const fetchData = () => { 
						fetch(`https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json`)
      					.then((response) => response.json())
      					.then((appointments) => {
        				console.log(appointments);
        				setTableData(appointments);
						})
						.catch((err) => {
							console.log(err.message);
						});
};

useEffect(()=>{
	fetchData();
},[])


  return (
    <div className="table_wrapper border rounded-3xl p-5 w-11/12 m-auto">
		<h5 className="mb-5 font-medium text-gray-400">Today's Appointment List</h5>
        <table class="w-full table-auto border-collapse">
			<thead className="bg-gray-100">
				<tr>
					<th className="py-3 border-b pl-3 rounded-tl-lg uppercase text-gray-500 text-xs font-medium text-left">Patients</th>
					<th className="py-3 border-b uppercase text-gray-500 text-xs font-medium text-left">Date</th>
					<th className="py-3 border-b uppercase text-gray-500 text-xs font-medium text-left">Time</th>
					<th className="py-3 border-b uppercase text-gray-500 text-xs font-medium text-left">Doctor</th>
					<th className="py-3 border-b uppercase text-gray-500 text-xs font-medium text-left">Injury</th>
					<th className="py-3 border-b rounded-tr-lg uppercase text-gray-500 text-xs font-medium text-left">Action</th>
				</tr>
			</thead>
			<tbody>
				{
					tableData?.appointments?.map((d,i)=>(
						<tr>
							<td className="py-3 pl-3 border-b">
								<div className="img_wrapper w-1/2 flex items-center">
									<figure className="">
										<img src="https://media.creativemornings.com/uploads/user/avatar/120448/profile-circle.png" alt="" className="img_round w-9 h-9 rounded-full"/>
									</figure>
									<div className="img_content ml-2">
										<h6 className="text-xs font-bold mb-0.5">{d.patient_name}</h6>
										<p className="sm:text-xs mb-0 text-gray-400 font-normal">{d.mobile_number}</p>
									</div>
								</div>
							</td>
							<td className="py-3 border-b text-sm text-gray-600"><i class="far fa-calendar text-gray-400 text-xs"></i>&ensp;{d.appointment_date}</td>
							<td className="py-3 border-b text-sm text-gray-600"><i class="fas fa-history text-gray-400 text-xs"></i>&ensp;{d.appointment_time}</td>
							<td className="py-3 border-b text-sm text-gray-600"><span className="inline-block w-5 h-5 leading-4 text-center rounded-full bg-green-500"><i class="fas fa-star text-white text-xs"></i></span> {d.doctor}</td>
							<td className="py-3 border-b text-gray-600"><span className="inline-block px-2.5 py-1 font-semibold tracking-wider text-skyblue-700 text-xs bg-blue-200 rounded-md">{d.injury}</span></td>
							<td className="py-3 border-b text-gray-300"><i class="fas fa-ellipsis-v cursor-pointer"></i></td>
						</tr>
					))
				}
				{/* <tr>
					<td className="py-3 pl-3 border-b">
						<div className="img_wrapper w-1/2 flex items-center">
							<figure className="">
								<img src="https://leadershipcircle.com/wp-content/uploads/2022/07/Tyson-Andrus.png" alt="" className="img_round w-9 h-9 rounded-full"/>
							</figure>
							<div className="img_content ml-2">
								<h6 className="text-xs font-bold mb-0.5">Cara Stevens</h6>
								<p className="sm:text-xs mb-0 text-gray-400 font-normal">+152 2564 894</p>
							</div>
						</div>
					</td>
					<td className="py-3 border-b text-sm text-gray-600"><i class="far fa-calendar text-gray-400 text-xs"></i>&ensp;20 Jan 2024</td>
					<td className="py-3 border-b text-sm text-gray-600"><i class="fas fa-history text-gray-400 text-xs"></i>&ensp;10:18</td>
					<td className="py-3 border-b text-sm text-gray-600"><span className="inline-block w-5 h-5 leading-4 text-center rounded-full bg-green-500"><i class="fas fa-star text-white text-xs"></i></span> Dr.Sarah Smith</td>
					<td className="py-3 border-b text-gray-600"><span className="inline-block px-2.5 py-1 font-semibold tracking-wider text-skyblue-700 text-xs bg-blue-200 rounded-md">Malaria</span></td>
					<td className="py-3 border-b text-gray-300"><i class="fas fa-ellipsis-v cursor-pointer"></i></td>
				</tr>
				<tr>
					<td className="py-3 pl-3 border-b">
						<div className="img_wrapper w-1/2 flex items-center">
							<figure className="">
								<img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" alt="" className="img_round w-9 h-9 rounded-full"/>
							</figure>
							<div className="img_content ml-2">
								<h6 className="text-xs font-bold mb-0.5">Megha Trivedi</h6>
								<p className="sm:text-xs mb-0 text-gray-400 font-normal">+152 2564 894</p>
							</div>
						</div>
					</td>
					<td className="py-3 border-b text-sm text-gray-600"><i class="far fa-calendar text-gray-400 text-xs"></i>&ensp;20 Jan 2024</td>
					<td className="py-3 border-b text-sm text-gray-600"><i class="fas fa-history text-gray-400 text-xs"></i>&ensp;10:18</td>
					<td className="py-3 border-b text-sm text-gray-600"><span className="inline-block w-5 h-5 leading-4 text-center rounded-full bg-red-400"><i class="fas fa-star text-white text-xs"></i></span> Dr.Sarah Smith</td>
					<td className="py-3 border-b text-gray-600"><span className="inline-block px-2.5 py-1 font-semibold tracking-wider text-skyblue-700 text-xs bg-blue-200 rounded-md">Cholera</span></td>
					<td className="py-3 border-b text-gray-300"><i class="fas fa-ellipsis-v cursor-pointer"></i></td>
				</tr>
				<tr>
					<td className="py-3 pl-3 border-b">
						<div className="img_wrapper w-1/2 flex items-center">
							<figure className="">
								<img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" alt="" className="img_round w-9 h-9 rounded-full"/>
							</figure>
							<div className="img_content ml-2">
								<h6 className="text-xs font-bold mb-0.5">Megha Trivedi</h6>
								<p className="sm:text-xs mb-0 text-gray-400 font-normal">+152 2564 894</p>
							</div>
						</div>
					</td>
					<td className="py-3 border-b text-sm text-gray-600"><i class="far fa-calendar text-gray-400 text-xs"></i>&ensp;20 Jan 2024</td>
					<td className="py-3 border-b text-sm text-gray-600"><i class="fas fa-history text-gray-400 text-xs"></i>&ensp;10:18</td>
					<td className="py-3 border-b text-sm text-gray-600"><span className="inline-block w-5 h-5 leading-4 text-center rounded-full bg-red-400"><i class="fas fa-star text-white text-xs"></i></span> Dr.Sarah Smith</td>
					<td className="py-3 border-b text-gray-600"><span className="inline-block px-2.5 py-1 font-semibold tracking-wider text-skyblue-700 text-xs bg-blue-200 rounded-md">Fever</span></td>
					<td className="py-3 border-b text-gray-300"><i class="fas fa-ellipsis-v cursor-pointer"></i></td>
				</tr>
				<tr>
					<td className="py-3 pl-3">
						<div className="img_wrapper w-1/2 flex items-center">
							<figure className="">
								<img src="https://leadershipcircle.com/wp-content/uploads/2022/07/Tyson-Andrus.png" alt="" className="img_round w-9 h-9 rounded-full"/>
							</figure>
							<div className="img_content ml-2">
								<h6 className="text-xs font-bold mb-0.5">Cara Stevens</h6>
								<p className="sm:text-xs mb-0 text-gray-400 font-normal">+152 2564 894</p>
							</div>
						</div>
					</td>
					<td className="py-3 text-sm text-gray-600"><i class="far fa-calendar text-gray-400 text-xs"></i>&ensp;20 Jan 2024</td>
					<td className="py-3 text-sm text-gray-600"><i class="fas fa-history text-gray-400 text-xs"></i>&ensp;10:18</td>
					<td className="py-3 text-sm text-gray-600"><span className="inline-block w-5 h-5 leading-4 text-center rounded-full bg-green-500"><i class="fas fa-star text-white text-xs"></i></span> Dr.Sarah Smith</td>
					<td className="py-3 text-gray-600"><span className="inline-block px-2.5 py-1 font-semibold tracking-wider text-skyblue-700 text-xs bg-blue-200 rounded-md">Malaria</span></td>
					<td className="py-3 text-gray-300"><i class="fas fa-ellipsis-v cursor-pointer"></i></td>
				</tr> */}
			</tbody>
		</table>
    </div>
  );
}

export default App;
