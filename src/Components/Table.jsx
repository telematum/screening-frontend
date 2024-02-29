import { useEffect, useState } from 'react';

import TableHeader from './TableHeader';
import Loading from './Loading';
import Row from './Row';

function Table() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const respond = await fetch(
          'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json',
        );
        const data = await respond.json();
        setAppointments(data.appointments);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <TableHeader />
        </thead>

        {!isLoading && !error && (
          <tbody>
            {appointments.map((appointment) => (
              <Row appointment={appointment} key={appointment.mobile_number} />
            ))}
          </tbody>
        )}
      </table>
      {isLoading && <Loading />}
      {error && (
        <p className="mt-4 text-center">
          Somthing went wrong with fetching data...
        </p>
      )}
    </>
  );
}

export default Table;
