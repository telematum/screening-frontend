import { useEffect } from 'react';
import './App.css';
import Table from './components/table';
import { patientListRequest } from './store/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(patientListRequest() as any);
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-600">Today&apos;s Appointment List</h1>
      <Table />
    </div>
  );
}

export default App;
