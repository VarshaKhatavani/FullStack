import React from "react";
import VideoPlayer from "./VideoPlayer";
import "./reset.css";
import "./styles.css";

function VideoPlayerApp() {
  return (
    <main>
      <VideoPlayer
        src="https://sandpack-bundler.vercel.app/videos/snowstorm.mp4"
        caption="Snow falls by a pine tree and house"
      />
      <dl>
        <dt>Filmed by</dt>
        <dd>Karolina Grabowska</dd>
        <dt>Licensed under</dt>
        <dd>Creative Commons Zero (CC0)</dd>
      </dl>
    </main>
  );
}

export default VideoPlayerApp;
