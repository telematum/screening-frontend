// DateColumn.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

function DateColumn({ appointment }) {
  const formattedDate = formatDate(appointment.appointment_date);

  return (
    <td className="py-2 text-left">
      <FontAwesomeIcon icon={faCalendar} className="mr-1" />
      {formattedDate}
    </td>
  );
}

export default DateColumn;