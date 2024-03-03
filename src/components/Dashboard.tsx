import Table from "./Table/Table";
const Dashboard: React.FC = () => {
  return (
    <div className="w-full bg-white p-8 border border-solid rounded-3xl h-full ">
      <p className="text-indigo-900 text-xl">Today's Appointment List</p>
      <Table />
    </div>
  );
};

export default Dashboard;
