export const Patients = ({ data_row: { patient_name, mobile_number } }) => {
  return (
    <div className="w-1/6 text-center m-2 p-2 justify-items-center flex">
      <div>
        <img
          className="h-12 w-12 rounded-full"
          src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(
            Math.random() * 20 + 50
          )}.jpg`}
          alt="profile_image"
        />
      </div>
      <div className="px-2">
        <div className="font-bold">{patient_name}</div>
        <div>+{mobile_number}</div>
      </div>
    </div>
  );
};
