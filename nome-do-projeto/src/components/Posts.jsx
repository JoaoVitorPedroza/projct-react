import React from 'react';
import Post from './Post';

function Posts() {
  return (
    <div className="posts">
      <Post
        userImage="/assets/img/meowed.svg"
        username="meowed"
        postImage="/assets/img/gato-telefone.svg"
        likedByImage="/assets/img/respondeai.svg"
        likedByUsername="respondeai"
        likesCount="101.523"
      />
      <Post
        userImage="/assets/img/barked.svg"
        username="barked"
        postImage="/assets/img/dog.svg"
        likedByImage="/assets/img/adorable_animals.svg"
        likedByUsername="adorable_animals"
        likesCount="99.159"
      />
    </div>
  );
}

export default Posts;