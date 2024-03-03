// DoctorColumn.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

function DoctorColumn({ appointment }) {
  return (
    <td className="py-2 text-left">
      <FontAwesomeIcon icon={faUserDoctor} className='mr-1' />
      {appointment.doctor}
    </td>
  );
}

export default DoctorColumn;