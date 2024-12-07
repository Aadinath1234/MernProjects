import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Browse from './Browse.jsx';

const Body = () => {
  return (
    <div>
      {/* Define routes here */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
