import React from "react";
import MediaPlayer from "./MediaPlayer";
import "./reset.css";
import "./styles.css";

const DEMO_SONG_SRC =
  "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3";

function MediaPlayerApp() {
  return (
    <>
      <MediaPlayer src={DEMO_SONG_SRC} />
    </>
  );
}

export default MediaPlayerApp;
