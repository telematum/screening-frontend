import AppointmentTable from "../../components/Appointment/AppointmentTable";

const AppointmentPage = () => {
  return (
    <div className="py-6 px-10 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-5 text-[#7e7e8b]">
        Today's Appointment List
      </h2>
      <AppointmentTable />
    </div>
  );
};

export default AppointmentPage;
