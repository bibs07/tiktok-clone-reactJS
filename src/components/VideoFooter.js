import React from "react";
import "./styles/VideoFooter.css";
import Ticker from "react-ticker";

export const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <img
          className="videoFooter_icon"
          src="./musical-note.png"
          alt="musical note"
        />
        <div className="videoFooter_ticker">
          <Ticker mode="smooth">{() => <p>{song}</p>}</Ticker>
        </div>
      </div>
      <img
        className="videoFooter_disc"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};
