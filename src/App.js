import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './components/organism/DataTable';
import Typography from './components/atoms/Typography';
import { headers } from './constants'

export default function App() {
  const [appointmentsData, setAppointmentsData] = useState(null);

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.get(apiUrl);
      setAppointmentsData(response?.data?.appointments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='dt-container rounded-2xl flex-col p-2'>
      <Typography variant="h4" style={{ color: '#7a7a9d' }}>Today's Appointment List</Typography>

      <div className='dt-wrapper pt-2'>
        {
          appointmentsData != null ?
            <DataTable headers={headers} appointments={appointmentsData} />
            :
            <div className='flex items-center justify-center'>
              <Typography variant='h4'>Loading...</Typography>
            </div>
        }
      </div>
    </div>
  );
}