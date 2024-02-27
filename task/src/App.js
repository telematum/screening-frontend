import "./App.css";
import Data from "./Data/Data";
import ClockSvg from "./SVGimage/ClockSvg";
import StarSvg from "./SVGimage/StarSvg";
import ActionSvg from "./SVGimage/ActionSvg";
import DateSvg from "./SVGimage/DateSvg";
import UserProfileSvg from "./SVGimage/UserProfileSvg";

function App() {
  const header = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTION"];

  const Svgs = {
    clock: <ClockSvg />,
    star: <StarSvg />,
    action: <ActionSvg />,
    date: <DateSvg />,
    profile: <UserProfileSvg />,
  };

  return (
    <div className="p-5 h-screen bg-white-100">
      <div>
        <h1 className="text-2xl font-bold mb-8 text-gray-500 ">
          Today's Appointments List
        </h1>
      </div>

      <div className="overflow-auto	">
        <Data header={header} Svgs={Svgs} />
      </div>
    </div>
  );
}

export default App;
