import React, { useState } from 'react';

function Post({ userImage, username, postImage, likedByImage, likedByUsername, likesCount }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const initialLikes = parseInt(likesCount.replace(/\./g, '').replace(',', ''), 10);
  const [currentLikesCount, setCurrentLikesCount] = useState(initialLikes);

  function toggleLike() {
    setIsLiked(!isLiked);

    if (isLiked) {
      setCurrentLikesCount(currentLikesCount - 1);
    } else {
      setCurrentLikesCount(currentLikesCount + 1);
    }
  }


  function clickImageToLike() {
    if (!isLiked) {
      setIsLiked(true);
      setCurrentLikesCount(currentLikesCount + 1);
    }
  }


  function toggleSave() {
    setIsSaved(!isSaved);
  }


  const formattedLikesCount = currentLikesCount.toLocaleString('pt-BR');

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImage} alt={username}/>
          {username}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">

        <img src={postImage} alt="conteudo-do-post" onClick={clickImageToLike} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={isLiked ? "heart" : "heart-outline"}
              style={{ color: isLiked ? "red" : "black" }}
              onClick={toggleLike}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={isSaved ? "bookmark" : "bookmark-outline"}
              onClick={toggleSave}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={likedByImage} alt={likedByUsername}/>
          <div className="texto">
            Curtido por <strong>{likedByUsername}</strong> e <strong>outras {formattedLikesCount} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;