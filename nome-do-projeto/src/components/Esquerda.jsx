
import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

function Esquerda() {
  return (
    <div className="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}

export default Esquerda;