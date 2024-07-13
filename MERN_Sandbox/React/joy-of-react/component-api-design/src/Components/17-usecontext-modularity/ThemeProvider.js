import React from "react";
import { COLORS } from "./constants";
import { ThemeContext } from "./UserApp";

function ThemeProvider({ children }) {
  // TODO
  const [theme, setTheme] = React.useState(() => {
    return window.localStorage.getItem("color-theme") || "light";
  });
  React.useEffect(() => {
    window.localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  }, []);

  const colors = COLORS[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
