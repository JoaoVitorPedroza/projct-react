import React from 'react';
function Sugestao({ image, username, reason }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={image} alt={username}/>
        <div className="texto">
          <div className="nome">{username}</div>
          <div className="razao">{reason}</div> 
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

export default Sugestao;