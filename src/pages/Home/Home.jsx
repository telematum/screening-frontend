import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import ResponsiveTable from "../../components/ResponsiveTable/ResponsiveTable";
import TableRow from "../../components/TableRow/TableRow";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const url = import.meta.env.VITE_REACT_API_URL;
  const { data, isLoading, error } = useFetch(url);

  const columns = ["Patients", "Date", "Time", "Doctor", "Injury", "Action"];

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div className="rounded-3xl p-8 shadow">
      <div className="text-2xl text-left my-4 font-bold text-gray-500">{`Today's Appointment List`}</div>
      <ResponsiveTable columns={columns}>
        {data?.appointments?.map((appointment, index) => (
          <TableRow
            key={appointment.mobile_number}
            appointment={appointment}
            index={index}
          />
        ))}
      </ResponsiveTable>
    </div>
  );
};

export default Home;
