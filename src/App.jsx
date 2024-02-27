import AppointmentTable from './components/AppointmentTable';

function App() {
  return (
    <div className="flex justify-center items-center mx-10">
      <div className="border border-slate-100 p-8 rounded-xl mt-10 min-w-[300px]">
        <h2 className="text-slate-500 font-semibold text-xl mb-5">
          Today's Appointment List
        </h2>
        <AppointmentTable />
      </div>
    </div>
  );
}

export default App;
