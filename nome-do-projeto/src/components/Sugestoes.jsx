import React from 'react';
import Sugestao from './Sugestao';

function Sugestoes() {
  const sugestoesData = [
    { id: 1, image: "/assets/img/bad.vibes.memes.svg", username: "bad.vibes.memes", reason: "Segue você" },
    { id: 2, image: "/assets/img/chibirdart.svg", username: "chibirdart", reason: "Segue você" },
    { id: 3, image: "/assets/img/razoesparaacreditar.svg", username: "razoesparaacreditar", reason: "Novo no Instagram" },
    { id: 4, image: "/assets/img/adorable_animals.svg", username: "adorable_animals", reason: "Segue você" },
    { id: 5, image: "/assets/img/smallcutecats.svg", username: "smallcutecats", reason: "Segue você" },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoesData.map(sugestao => (
        <Sugestao
          key={sugestao.id} 
          image={sugestao.image}
          username={sugestao.username}
          reason={sugestao.reason}
        />
      ))}
    </div>
  );
}

export default Sugestoes;