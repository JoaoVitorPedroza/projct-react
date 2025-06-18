// src/components/Corpo.jsx
import React from 'react';
import Esquerda from './Esquerda';
import Sidebar from './Sidebar';

function Corpo() {
  return (
    <div className="corpo">
      <Esquerda />
      <Sidebar /> 
    </div>
  );
}

export default Corpo;