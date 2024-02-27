export const Appointment = ({
  data_row: { appointment_date, appointment_time },
}) => {
  return (
    <>
      <div className="w-1/6 text-center m-2 p-2">
        <div className="flex items-center place-content-center">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-calendar-2456578-2036098.png"
            className="h-5 w-5 m-2"
            alt="calendar_image"
          />

          {new Date(appointment_date).toLocaleDateString("en-uk", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
      <div className="w-1/6 text-center m-2 p-2">
        <div className="flex items-center place-content-center">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/68/89/89/1000_F_268898928_pPVMIzAL4xuueWrlD6EJjRW7ytYolNKQ.jpg"
            className="h-5 w-5 m-2 rounded-full"
            alt="calendar_image"
          />
          {appointment_time}
        </div>
      </div>
    </>
  );
};
