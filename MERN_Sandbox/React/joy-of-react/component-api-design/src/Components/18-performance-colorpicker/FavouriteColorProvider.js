import React from "react";

export const FavouriteColorContext = React.createContext();

function FavouriteColorProvider({ children }) {
  const [favouriteColor, setFavouriteColor] = React.useState("#EBDEFB");

  // Note :  Whenever passing object as a value in context provider,
  // always memoize the object so that no performance issue will arise in near future
  const colorValue = React.useMemo(() => {
    return { favouriteColor, setFavouriteColor };
  }, [favouriteColor]);

  return (
    <FavouriteColorContext.Provider
      value={colorValue} // { favouriteColor, setFavouriteColor }
    >
      {children}
    </FavouriteColorContext.Provider>
  );
}

export default FavouriteColorProvider;

// Note : We can not memoize the component which receives react elements as props
