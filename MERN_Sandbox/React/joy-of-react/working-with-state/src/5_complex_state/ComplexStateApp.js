import React from "react";
import "./styles.css";

function ComplexStateApp() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  return (
    <>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <form>
        {colors.map((color, index) => {
          const colorId = `color-${index}`;

          return (
            <div key={colorId} className="color-row">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <input
                id={colorId}
                type="color"
                value={color}
                onChange={(event) => {
                  // array, objects can be updated using new array only
                  const nextColor = [...colors];
                  nextColor[index] = event.target.value;
                  setColors(nextColor);
                }}
              />
            </div>
          );
        })}
      </form>
    </>
  );
}

export default ComplexStateApp;
