import React from "react";
import { Play, Pause } from "react-feather";

import VisuallyHidden from "./VisuallyHidden";

function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef();

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Space") {
        // ! on click of spacebar it stopped sudden : reason => event is bubbling up
        // * another solution : line no 56
        event.preventDefault();
        // without dependency array it's working as added callback function
        setIsPlaying((currentIsPlaying) => {
          return !currentIsPlaying;
        });
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (audioRef.current) {
      console.log("Playing : ", isPlaying);
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
          setIsPlaying(false); // Ensure state is consistent with audio playback status
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

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
          // onKeyDown={(event) => {
          //   if (event.code === "Space") {
          //     event.stopPropagation();
          //   }
          // }}
          onClick={() => {
            // maintaining two states audio & isPlaying instead using useEffect
            // if (isPlaying) {
            //   audioRef.current.pause();
            // } else {
            //   audioRef.current.play();
            // }

            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          src={src}
          ref={audioRef}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
      </div>
    </div>
  );
}

export default MediaPlayer;
