import React from "react";

import Home from "./Home";

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
