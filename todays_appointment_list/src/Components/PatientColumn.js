// PatientColumn.js
import React from 'react';

function PatientColumn({ appointment }) {
  return (
    <td className="py-2 pr-4 pl-2 border-t border-gray-500 text-left">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-blue-500"></div>
        <div className="ml-3">
          <div className="font-bold text-gray-900">{appointment.patient_name}</div>
          <div className="text-gray-600 text-sm">{formatPhoneNumber(appointment.mobile_number)}</div>
        </div>
      </div>
    </td>
  );
}

// Function to format phone number
function formatPhoneNumber(phoneNumber) {
  // Assuming phoneNumber is in the format '123-456-7890'
  const parts = phoneNumber.split('-');
  return `+${parts[0]} ${parts[1]} ${parts[2]}`;
}

export default PatientColumn;