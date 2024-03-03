// App.js
import React from 'react';
import Table from './Components/Table';

function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full sm:w-[90%] p-5 border-2 border-gray-300 rounded-3xl mx-auto my-5">
        <h2 className="font-bold mb-4 text-blue-gray-300 px-4">Today's Appointment List</h2>
        <div className="px-4">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;