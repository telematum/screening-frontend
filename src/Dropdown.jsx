import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <button
        className="focus:outline-none px-1 py-1 bg-transparent text-gray-600 flex flex-col items-center"
        onClick={handleToggle}
      >
        <span className="h-1 w-1 bg-gray-600 rounded-full mb-1"></span>
        <span className="h-1 w-1 bg-gray-600 rounded-full mb-1"></span>
        <span className="h-1 w-1 bg-gray-600 rounded-full"></span>
      </button>
      {isOpen && (
        <ul className="absolute top-0 right-0 bg-white shadow-md rounded-md w-20 z-50">
          <li className="hover:bg-gray-200 px-2 py-1 text-gray-600 cursor-pointer" onClick={() => handleSelect('checked')}>
            Checked
          </li>
          <li className="hover:bg-gray-200 px-2 py-1 text-gray-600 cursor-pointer" onClick={() => handleSelect('notChecked')}>
            Not Checked
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
