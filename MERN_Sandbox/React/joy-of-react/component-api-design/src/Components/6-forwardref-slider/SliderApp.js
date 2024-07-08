import React from "react";

import Slider from "./Slider";

import "./reset.css";
import "./styles.css";

function SliderApp() {
  const [volume, setVolume] = React.useState(50);

  // Create a React ref:
  const sliderRef = React.useRef();

  React.useEffect(() => {
    // Focus the slider on mount:
    sliderRef.current.focus();
  }, []);

  return (
    <main>
      <Slider
        // Capture a reference to the slider:
        ref={sliderRef}
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
