import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table';
import { patientListRequest } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import BlockLoader from './components/loader';

interface Patient {
  patient_name: string;
  mobile_number: string;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  injury: string;
}

function App() {
  const dispatch = useDispatch();
  const [appointmentList, setAppointmentList] = useState<Patient[]>([]);
  const [isLoading, setLoading] = useState(false);
  const nextProps = useSelector((state: RootState) => ({
    appointmentData: state.Patient.patientList,
    loading: state.Patient.loading
  }));

  useEffect(() => {
    dispatch(patientListRequest() as any);
  }, []);

  useEffect(() => {
    if (nextProps.appointmentData && nextProps.appointmentData.appointments) {
      setAppointmentList(nextProps.appointmentData.appointments);
    }
    if (nextProps) {
      setLoading(nextProps.loading);
    }
  }, [nextProps.appointmentData]);

  return (
    <div className="App">
      <div className="rounded-2xl m-2 border border-gray-200 shadow-sm p-4">
        <h2 className="text-xl font-bold text-gray-400 mb-4">Today&apos;s Appointment List</h2>
        {isLoading ? (
          <BlockLoader />
        ) : (
          <>
            <Table data={appointmentList} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
