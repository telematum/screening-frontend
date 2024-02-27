import './App.css';
import { ListTemplate } from './Component/ListTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []); 
  return (
    <>
    {isLoading? <div className='flex items-center justify-center h-screen'><FontAwesomeIcon icon={faSpinner} className='w-32 h-32 text-indigo-500 animate-spin'/></div> :
    <div className='rounded-3xl shadow-lg self-center p-8 w-full'>
      <ListTemplate/>
    </div>
  }</>
  );
}

export default App;
