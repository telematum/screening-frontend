import "./App.css";
import AppointmentTable from "./components/Table";

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="max-w-6xl mx-auto py-5 px-7 border rounded-2xl lg:w-full w-screen">
        <h2 className="text-xl font-medium mb-4 text-gray-700">
          Today's Appointment List
        </h2>

        <AppointmentTable />
      </div>
    </div>
  );
};

export default App;
