import React from 'react';

const Header = () => (
  <thead className="bg-gray-50 border-b *:p-3 *:text-slate-400 *:text-xs *:text-left first:rounded-tl-lg last:rounded-tr-lg">
    <th className="first:rounded-tl-lg">PATENTS</th>
    <th>DATE</th>
    <th>TIME</th>
    <th>DOCTOR</th>
    <th>INJURY</th>
    <th className="!text-center last:rounded-tr-lg">ACTION</th>
  </thead>
);

export default Header;
