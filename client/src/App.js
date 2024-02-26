import React from 'react';
import Table from './components/Table';
import data from './components/data.json';

function App() {
  return (
    <div className="flex items-center justify-center h-screen ">
    <div className=" border border-gray-300 rounded-3xl container p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-500">Today's Appointment List</h1>
      <Table appointments={data.appointments} />
    </div>
    </div>
  );
}

export default App;
