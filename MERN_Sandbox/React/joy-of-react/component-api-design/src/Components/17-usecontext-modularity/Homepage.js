import React from 'react';

import {
  ThemeContext,
  PlaybackRateContext,
} from './App';
import { UserContext } from './UserProvider';

function Homepage() {
  const { user } = React.useContext(UserContext);
  const { theme } = React.useContext(ThemeContext);
  const { playbackRate } = React.useContext(PlaybackRateContext);
  
  return (
    <>
      <p>User: {user ? user.email : 'None'}</p>
      <p>Theme: {theme}</p>
      <p>Playback Rate: {playbackRate}x</p>
    </>
  );
}

export default Homepage;