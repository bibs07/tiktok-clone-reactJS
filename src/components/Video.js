import React, { useRef, useState } from "react";
import "./styles/Video.css";
import { VideoFooter } from "./VideoFooter";
import { VideoSidebar } from "./VideoSidebar";

export const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/61a880330c8b76cbfdc5d0691414e2b3/612414c2/video/tos/alisg/tos-alisg-pve-0037c001/1585433b2e0644e5bac2b62a77c7b061/?a=1233&br=1014&bt=507&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq8.mE3t_4ka&l=2021082315354901024506520153285189&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajxncTw6ZjhsNzMzODczNEApZDRpOzRkZmRmNzQ5Ozw0aGdsXmEtcjQwLmFgLS1kMS1zc2ExMTI2Ly8zMy0zMC0yMjQ6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter
        channel={"bibek"}
        description={"yoyoyoyoyo"}
        song={"Stay by Kid Laroi FT. Justin"}
      />
      <VideoSidebar />
    </div>
  );
};
