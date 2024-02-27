import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="container mx-auto rounded-3xl h-auto border-2 mt-6 p-12 ">
      <p className="text-2xl font-bold text-gray-400">Today's Appointment</p>
      <Table />
    </div>
  );
}

export default App;
