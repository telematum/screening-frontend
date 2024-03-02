import Navbar from './Components/Navbar';
import Appointments from './Components/Appointments';
function App() {
  return (
    <section className='container-fluid'>
      <div className=' m-3 p-4 border' style={{ borderRadius: '30px' }}>
        <div className='px-2'>
          <Navbar />
          <div className='table-responsive '>
            <Appointments />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
