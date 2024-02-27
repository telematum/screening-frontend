export const Doctor = ({ data_row: { doctor } }) => {
  return (
    <div className="w-1/6 text-left m-2 px-6 flex items-center">
      <div className="">
        <img
          src={
            [
              "https://www.shutterstock.com/image-vector/star-favorite-sign-review-icon-260nw-1771064666.jpg",
              "https://t.ly/VAyJQ",
            ][Math.floor(Math.random() * 1.7)]
          }
          className="h-5 w-5 m-2 rounded-full"
          alt="doctor_image"
        />
      </div>
      <div className="text-left">{doctor}</div>
    </div>
  );
};
