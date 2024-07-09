import React from 'react';

export const FavouriteColorContext = React.createContext();

function FavouriteColorProvider({ children }) {
  const [
    favouriteColor,
    setFavouriteColor
  ] = React.useState('#EBDEFB');
  
  return (
    <FavouriteColorContext.Provider
      value={{ favouriteColor, setFavouriteColor }}
    >
      {children}
    </FavouriteColorContext.Provider>
  );
}

export default FavouriteColorProvider;