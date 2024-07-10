import React from "react";

import VideoPlayer from "./VideoPlayer";

import "./reset.css";
import "./styles.css";

export const PlaybackRateContext = React.createContext();

function VideoPlayerApp() {
  const [playbackRate, setPlaybackRate] = React.useState("1");

  return (
    <PlaybackRateContext.Provider value={{ playbackRate, setPlaybackRate }}>
      <main>
        <h1>Video Archives</h1>
        {DATA.map(({ id, video, createdBy, license }) => (
          <article key={id}>
            <VideoPlayer
              src={video.src}
              caption={video.caption}
              playbackRate={playbackRate}
              setPlaybackRate={setPlaybackRate}
            />
            <dl>
              <dt>Created by</dt>
              <dd>{createdBy}</dd>
              <dt>Licensed under</dt>
              <dd>{license}</dd>
            </dl>
          </article>
        ))}
      </main>
    </PlaybackRateContext.Provider>
  );
}

const DATA = [
  {
    id: "snowstorm",
    video: {
      src: "https://sandpack-bundler.vercel.app/videos/snowstorm.mp4",
      caption: "A peaceful snowstorm in a residential area",
    },
    createdBy: "Karolina Grabowska",
    license: "Creative Commons Zero (CC0)",
  },
  {
    id: "flowers",
    video: {
      src: "https://sandpack-bundler.vercel.app/videos/flowers.mp4",
      caption: "Macro video of a flower blowing in the wind",
    },
    createdBy: "Imam Hossain",
    license: "Creative Commons Zero (CC0)",
  },
  {
    id: "plane",
    video: {
      src: "https://sandpack-bundler.vercel.app/videos/plane.mp4",
      caption: "Plane flying over the clouds",
    },
    createdBy: "Ahmet Akpolat",
    license: "Creative Commons Zero (CC0)",
  },
];

export default VideoPlayerApp;
