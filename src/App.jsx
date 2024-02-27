import AppointmentTable from "./components/AppointmentTable";

function App() {
  return (
    <div className="min-w-screen min-h-screen flex justify-center xxp items-center">
      <div className="border rounded-2xl p-8 xxxx mx-auto bg-white shadow">
        <h1 className="text-xl mb-6 text-header-text-color font-bold">
          Today&apos;s Appointment List
        </h1>
        <AppointmentTable />
      </div>
    </div>
  );
}

export default App;
