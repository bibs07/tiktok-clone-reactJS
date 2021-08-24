import "./App.css";
import React, { useState, useEffect } from "react";
import { Video } from "./components/Video";
import db from "./components/firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos([snapshot.docs.map((doc) => doc.data())]);
    });
  }, []);

  return (
    <div className="app">
      <div className="videos">
        {videos[0]?.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              key={Math.random()}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
