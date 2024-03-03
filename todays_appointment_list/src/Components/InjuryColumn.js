// InjuryColumn.js
import React from 'react';

function InjuryColumn({ appointment }) {
  return (
    <td className="py-2 text-left">
      <div className="bg-slate-200 px-2 py-1 inline-block rounded-lg font-bold">{appointment.injury}</div>
    </td>
  );
}

export default InjuryColumn;
