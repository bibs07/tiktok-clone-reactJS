import React, { useState } from "react";
import "./styles/VideoSidebar.css";

export const VideoSidebar = () => {
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
            <p>200</p>
          </>
        ) : (
          <>
            <img
              src="./heart-fill.png"
              alt="heart-filled"
              className="heartIcon"
            />
            <p>{200 + 1}</p>
          </>
        )}
      </div>
      <div className="videoSidebar_button">
        <img src="./chat.png" alt="heart-empty" />
        <p>150</p>
      </div>
      <div className="videoSidebar_button">
        <img src="./share.png" alt="heart-empty" />
        <p>50</p>
      </div>
    </div>
  );
};
