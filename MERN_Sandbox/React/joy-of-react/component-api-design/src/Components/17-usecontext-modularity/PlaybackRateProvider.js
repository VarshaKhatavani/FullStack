import React from "react";
import { PlaybackRateContext } from "./UserApp";

function PlaybackRateProvider({ children }) {
  // TODO
  const [playbackRate, setPlaybackRate] = React.useState(1);

  const resetPlaybackRate = React.useCallback(() => {
    setPlaybackRate(1);
  }, []);

  return (
    <PlaybackRateContext.Provider
      value={{
        playbackRate,
        setPlaybackRate,
        resetPlaybackRate,
      }}
    >
      {children}
    </PlaybackRateContext.Provider>
  );
}

export default PlaybackRateProvider;
