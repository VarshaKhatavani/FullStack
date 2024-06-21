import React from "react";
import { Play, Pause } from "react-feather";

import VisuallyHidden from "./VisuallyHidden";

function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef();
  console.log(audioRef);

  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
          onClick={() => {
            // const isPlaying = !audioRef.current.pause;
            console.log(isPlaying);

            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }

            setIsPlaying(!isPlaying);
          }}
        >
          {/* it didn't work as it needs to render the comp to updtae UI */}
          {/* {!audioRef.current.pause ? <Pause /> : <Play />} */}
          {isPlaying ? <Pause /> : <Play />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio src={src} ref={audioRef} />
      </div>
    </div>
  );
}

export default MediaPlayer;
