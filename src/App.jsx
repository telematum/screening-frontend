import Main from './Components/Main';
import Table from './Components/Table';

function App() {
  return (
    <Main>
      <h1 className="mb-3 text-lg font-semibold text-gray-400">
        Today&apos;s Appointment List
      </h1>
      <Table />
    </Main>
  );
}

export default App;
