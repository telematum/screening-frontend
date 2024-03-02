import Appointments from "./components/Appointments"
import Header from "./components/Header"
function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="rounded-3xl border border-gray-100 p-6 bg-white w-[80%]">
        <Header />
        <Appointments />
    </div>
    </div>
  );
}

export default App;