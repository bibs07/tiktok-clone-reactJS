import React, { useState } from "react";
import "./styles/VideoSidebar.css";

export const VideoSidebar = ({ likes, comments, shares }) => {
  const [liked, setLiked] = useState(false);

  const onLiking = () => {
    setLiked(() => !liked);
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button" onClick={onLiking}>
        {liked ? (
          <>
            <img src="./heart.png" alt="heart-empty" />
            <p>{likes}</p>
          </>
        ) : (
          <>
            <img
              src="./heart-fill.png"
              alt="heart-filled"
              className="heartIcon"
            />
            <p>{Number(likes) + 1}</p>
          </>
        )}
      </div>
      <div className="videoSidebar_button">
        <img src="./chat.png" alt="comment" />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar_button">
        <img src="./share.png" alt="share" />
        <p>{shares}</p>
      </div>
    </div>
  );
};
