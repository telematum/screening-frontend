import AppointmentContainer from "@/containers/appointment-container";

export default function page() {
  return (
    <div className="p-8 rounded-2xl border-gray-100 border-2 m-2 ">
      <h1 className="text-gray-500  font-semibold text-lg">
        Today&apos;s Appointment List
      </h1>
      <AppointmentContainer />
    </div>
  );
}
