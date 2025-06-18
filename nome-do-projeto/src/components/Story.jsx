import React from 'react';
function Story({ image, username }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={image} alt={username}/>
      </div>
      <div className="usuario">
        {username} 
      </div>
    </div>
  );
}

export default Story;