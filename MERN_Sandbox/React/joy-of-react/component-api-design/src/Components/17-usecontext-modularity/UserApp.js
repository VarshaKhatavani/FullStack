import React from "react";

import { COLORS } from "./constants";
import Homepage from "./Homepage";
import UserProvider from "./UserProvider";
import ThemeProvider from "./ThemeProvider";
import PlaybackRateProvider from "./PlaybackRateProvider";

export const ThemeContext = React.createContext();
export const PlaybackRateContext = React.createContext();

function UserApp() {
  const [theme, setTheme] = React.useState(() => {
    return window.localStorage.getItem("color-theme") || "light";
  });

  const [playbackRate, setPlaybackRate] = React.useState(1);

  React.useEffect(() => {
    window.localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  }, []);

  const colors = COLORS[theme];

  const resetPlaybackRate = React.useCallback(() => {
    setPlaybackRate(1);
  }, []);

  return (
    <UserProvider>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          colors,
        }}
      >
        <PlaybackRateContext.Provider
          value={{
            playbackRate,
            setPlaybackRate,
            resetPlaybackRate,
          }}
        >
          <Homepage />
        </PlaybackRateContext.Provider>
      </ThemeContext.Provider>
    </UserProvider>
  );
}

export default UserApp;
