import React from "react";
import { PlaybackRateContext } from "./VideoPlayerApp";

function VideoPlayer({ src, caption }) {
  console.log(PlaybackRateContext);

  const { playbackRate, setPlaybackRate } =
    React.useContext(PlaybackRateContext);

  const playbackRateSelectId = React.useId();

  const videoRef = React.useRef();

  React.useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <div className="video-player">
      <figure>
        <video ref={videoRef} controls src={src} />
        <figcaption>{caption}</figcaption>
      </figure>

      <div className="actions">
        <label htmlFor={playbackRateSelectId}>Select playback speed:</label>
        <select
          id={playbackRateSelectId}
          value={playbackRate}
          onChange={(event) => {
            setPlaybackRate(event.target.value);
          }}
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export default VideoPlayer;
