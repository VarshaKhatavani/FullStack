import React from "react";

import Home from "./Home";

import "./reset.css";
import "./styles.css";

export const FavouriteColorContext = React.createContext();

function ColorContextApp() {
  const [favouriteColor, setFavouriteColor] = React.useState("#EBDEFB");

  return (
    <FavouriteColorContext.Provider value={favouriteColor}>
      <Home />
    </FavouriteColorContext.Provider>
  );
}

export default ColorContextApp;
