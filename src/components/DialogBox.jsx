// Importing necessary icons from react-icons library
import { CiCircleRemove } from "react-icons/ci";
import { PiEyeClosedThin } from "react-icons/pi";

// DialogBox component
const DialogBox = ({ isOpen, onClose, onDelete, appointment }) => {
  return (
    isOpen && (
      <div className="h-70 fixed inset-0 flex items-center justify-center z-50">
        <div className="backdrop-blur-sm bg-white/30 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Appointment Details</h2>
          <p>
            <strong>Patient Name:</strong> {appointment.patient_name}
          </p>
          <div className="flex">
            {/* Close button */}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-zinc-400	 text-white rounded-lg shadow-md hover:bg-zinc-600 flex items-center gap-2 hover:drop-shadow-2xl"
            >
              <PiEyeClosedThin />
              Close
            </button>
            {/* Delete button */}
            <button
              onClick={() => onDelete(appointment.patient_name)}
              className="mt-4 ml-4 px-4 py-2 bg-rose-500 text-white rounded-lg shadow-md hover:bg-rose-600 flex items-center gap-2 hover:drop-shadow-2xl"
            >
              <CiCircleRemove />
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DialogBox;
