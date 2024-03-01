import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div className="flex justify-center">
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">{message || "Something went wrong"}</span>
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
