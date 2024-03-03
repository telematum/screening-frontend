// import TableComponent from "./components/TableComponent/TableComponent";

import TableComponent from "./components/TableComponent/TableComponent";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen m-10">
      <div className="border border-gray-100 rounded-lg w-full flex flex-col min-h-0 p-5">
          <div className="font-semibold text-xl" style={{color:"#8787A7"}}>{`Today's Appointment List`}</div>
          <TableComponent/>
      </div>
      {/* <TableComponent/> */}
    </div>
  )
}
