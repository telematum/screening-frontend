import React from 'react';

const Header = ({ headingText = "" }) => {
  return (
    <h1 className="text-4xl mb-3 font-normal text-gray-500">{headingText}</h1>
  )
}

export default Header