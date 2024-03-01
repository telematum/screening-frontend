import "./App.css";
import Appointment from "./components/appointment";

function App() {
  return (
    <div className="p-10">
      <div className="pb-5 text-2xl text-[#422e68b4]">
        Today's Appointment List
      </div>
      <div>
        <Appointment />
      </div>
    </div>
  );
}

export default App;
