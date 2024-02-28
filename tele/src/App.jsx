// Import the Dashboard component from the components directory
import Dashboard from "./components/Dashboard";

// Define the main App component
export default function App() {
 // The App component returns a JSX element that represents the structure of your application
 return (
    // A div element is used as a container for the Dashboard component
    <div className="flex h-[128px] w-[1200px] ml-auto mr-auto">
       {/* The Dashboard component is rendered inside this div */}
      <Dashboard />
    </div>
 );
}
