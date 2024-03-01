import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="px-2 py-1 sm:px-4 md:py-5 dark:bg-slate-900">
      <div className="border-2 dark:border-slate-700 rounded-xl">
        <Header />
        <Appointment />
      </div>
      <Footer />
    </div>
  );
}

export default App;
