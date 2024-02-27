import AppointmentTable from "./components/AppointmentTable";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border rounded-2xl p-8 w-full max-w-7xl mx-auto bg-white shadow-sm">
        <h1 className="text-xl mb-6 text-header-text-color font-bold">
          Today&apos;s Appointment List
        </h1>
        <AppointmentTable />
      </div>
    </div>
  );
}

export default App;
