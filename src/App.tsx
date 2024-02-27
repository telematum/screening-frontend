import "./App.css";
import Table from "./Components/Table";

function App() {
  return (
    <main className="h-lvh flex justify-center items-center">
      <Table
        dataURL="https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        heading="Today's Appointment List"
        tableHeadings={['Patients', 'Date', 'Time', 'Doctor', 'Injury', 'Action']}
      />
    </main>
  );
}

export default App;
