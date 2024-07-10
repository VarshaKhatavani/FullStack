import React from "react";

import Homepage from "./Homepage";

import UserProvider from "./UserProvider";
import ThemeProvider from "./ThemeProvider";
import PlaybackRateProvider from "./PlaybackRateProvider";

import "./reset.css";
import "./styles.css";

export const ThemeContext = React.createContext();
export const PlaybackRateContext = React.createContext();

function UserApp() {
  return (
    <UserProvider>
      <ThemeProvider>
        <PlaybackRateProvider>
          <Homepage />
        </PlaybackRateProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default UserApp;
