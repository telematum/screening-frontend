import {
  useEffect,
  useState,
} from 'react';

import Table from '../Table';
import {
  COLORS,
  getColumns,
} from '../utils';

const AppointmentTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAnyMoreActionOpen, setIsAnyMoreActionOpen] = useState(false);
  
    const handleDelete = (id) => {
      const newData = data.filter((d) => d.mobile_number !== id);
      setData(newData);
    };
  
    useEffect(() => {
      fetch(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
        .then((response) => response.json())
        .then((d) =>
          setData(
            d.appointments.map((appointment, index) => ({
              ...appointment,
              color: COLORS[Math.trunc(Math.random() * index)],
            }))
          )
        )
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <div className="overflow-auto">
        <Table
          data={data}
          loading={loading}
          columns={getColumns({
            dataLength: data.length,
            isAnyMoreActionOpen,
            setIsAnyMoreActionOpen,
            handleDelete,
          })}
        />
      </div>
    );
  };
  
  export default AppointmentTable;
  