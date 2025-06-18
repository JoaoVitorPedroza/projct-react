import React, { useState } from 'react';
import Sugestoes from './Sugestoes';

function Sidebar() {
  const [userImage, setUserImage] = useState("/assets/img/catanacomics.svg");
  const [username, setUsername] = useState("catanacomics");

  function mudarImagem() {
    const novaImagem = prompt("Insira o link da nova imagem de perfil:");
    if (novaImagem !== null && novaImagem.trim() !== "") {
      setUserImage(novaImagem);
    }
  }

  function mudarUsuario() {
    const novoNome = prompt("Insira o novo nome de usuário:");
    if (novoNome !== null && novoNome.trim() !== "") {
      setUsername(novoNome);
    }
  }

  return (
    <div className="sidebar">
      <div className="usuario">
        <img src={userImage} alt="imagem de perfil" onClick={mudarImagem} />
        <div className="texto">
          <span>
            <strong>{username}</strong>
            <ion-icon name="pencil" onClick={mudarUsuario}></ion-icon>
          </span>
        </div>
      </div>
      <Sugestoes /> 

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}

export default Sidebar;