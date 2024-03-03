// TimeColumn.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function TimeColumn({ appointment }) {
  return (
    <td className="py-2 text-left">
      <FontAwesomeIcon icon={faClock} className='mr-1' />
      {appointment.appointment_time}
    </td>
  );
}

export default TimeColumn;