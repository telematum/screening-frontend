import PropTypes from "prop-types";
import { lightColors } from "../constants/constants.js";

function ProfileImage({ first, last, index }) {
  return (
    <div
      className={`rounded-full h-10 w-10 ${
        index > lightColors.length - 1
          ? lightColors[index % lightColors.length]
          : lightColors[index]
      } flex items-center justify-center`}
    >
      <span className="text-white text-sm">
        {first}
        {last}
      </span>
    </div>
  );
}
export default ProfileImage;

ProfileImage.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  index: PropTypes.number,
};
