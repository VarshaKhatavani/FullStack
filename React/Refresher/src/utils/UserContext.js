import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  setLoggedInUser: () => {}, // Default setter function
});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.data) {
      setLoggedInUser(storedUser.data.username);
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
