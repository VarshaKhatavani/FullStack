import React from "react";

import Slider from "./Slider";

import "./reset.css";
import "./styles.css";

function SliderApp() {
  const [volume, setVolume] = React.useState(50);

  return (
    <main>
      <Slider
        label="Volume"
        min={0}
        max={100}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
        }}
      />
    </main>
  );
}

export default SliderApp;
