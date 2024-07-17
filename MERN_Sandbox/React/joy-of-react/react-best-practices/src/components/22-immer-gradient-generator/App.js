import React from 'react';
import { produce } from 'immer';

const INITIAL_STATE = {
  colors: [
    '#FFD500',
    '#FF0040',
    '#FF0040',
    '#FF0040',
    '#FF0040',
  ],
  numOfVisibleColors: 2,
};

function reducer(state, action) {
  switch (action.type) {
    case 'add-color': {
      return {
        ...state,
        numOfVisibleColors:
          state.numOfVisibleColors + 1,
      };
    }

    case 'remove-color': {
      return {
        ...state,
        numOfVisibleColors:
          state.numOfVisibleColors - 1,
      };
    }

    case 'change-color': {
      const nextColors = [...state.colors];
      nextColors[action.index] = action.value;

      return {
        ...state,
        colors: nextColors,
      };
    }
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    INITIAL_STATE
  );
  const { colors, numOfVisibleColors } = state;

  const visibleColors = colors.slice(
    0,
    numOfVisibleColors
  );

  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (numOfVisibleColors >= 5) {
      window.alert(
        'There is a maximum of 5 colors'
      );
      return;
    }

    dispatch({ type: 'add-color' });
  }

  function removeColor() {
    if (numOfVisibleColors <= 2) {
      window.alert(
        'There is a minimum of 2 colors'
      );
      return;
    }

    dispatch({ type: 'remove-color' });
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>
          Remove color
        </button>
        <button onClick={addColor}>
          Add color
        </button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div
              key={colorId}
              className="color-wrapper"
            >
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    dispatch({
                      type: 'change-color',
                      value: event.target.value,
                      index,
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;