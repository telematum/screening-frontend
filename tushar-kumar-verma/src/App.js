import React from 'react';
import AppointmentsTable from './components/AppointmentsTable';
import './App.css';

function App() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl pl-10 py-4 font-semibold ">Today's Appointment List</h1>
      <AppointmentsTable />
    </div>
  );
}

export default App;
