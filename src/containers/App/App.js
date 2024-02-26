import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


const App = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App