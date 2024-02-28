// Import the DisplayData and TableHeader components from the Display directory
import DisplayData from "./Display/DisplayData.jsx";
import TableHeader from "./Display/TableHeader.jsx";

// Define the Dashboard component
function Dashboard() {
 // The Dashboard component returns a JSX element that represents the structure of your dashboard
 return (
    // A div element is used as a container for the dashboard content
    <div className="w-[1216px] bg-[#FAFAFA]">
      {/* Another div element is used to structure the dashboard content with flexbox */}
      <div className="w-[1216px] flex flex-col gap-8 px-8 py-8">
        {/* A flex container is used to layout the TableHeader and DisplayData components vertically */}
        <div className="flex flex-col gap-5">
          {/* The TableHeader component is rendered first */}
          <TableHeader />
          {/* A div element is used to contain the DisplayData component, providing padding and styling */}
          <div className="flex flex-col pt-3 pl-3 pb-6 pr-3 rounded-[8px] bg-[#FFF] shadow-sm">
            {/* The DisplayData component is rendered inside this div */}
            <DisplayData />
          </div>
        </div>
      </div>
    </div>
 );
}

// Export the Dashboard component
export default Dashboard;
