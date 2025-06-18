import React from 'react';
import Story from './Story';

function Stories() {
  const storiesData = [
    { id: 1, image: "/assets/img/9gag.svg", username: "9gag" },
    { id: 2, image: "/assets/img/meowed.svg", username: "meowed" },
    { id: 3, image: "/assets/img/barked.svg", username: "barked" },
    { id: 4, image: "/assets/img/nathanwpylestrangeplanet.svg", username: "nathanwpylestrangeplanet" },
    { id: 5, image: "/assets/img/wawawicomics.svg", username: "wawawicomics" },
    { id: 6, image: "/assets/img/respondeai.svg", username: "respondeai" },
    { id: 7, image: "/assets/img/filomoderna.svg", username: "filomoderna" },
    { id: 8, image: "/assets/img/memeriagourmet.svg", username: "memeriagourmet" },
  ];

  return (
    <div className="stories">
      {storiesData.map(story => (
        <Story
          key={story.id}
          image={story.image}
          username={story.username}
        />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default Stories;