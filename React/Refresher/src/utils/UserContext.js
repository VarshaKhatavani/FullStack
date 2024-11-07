import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  setLoggedInUser: () => {}, // Default setter function
});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!Array.isArray(storedUser)) {
      storedUser = storedUser ? [storedUser] : []; // If users exists, make it an array; otherwise, an empty array
    }
    // Find the user that matches the email and password
    let loggedInUser = localStorage.getItem("loggedInUser");
    const user = storedUser?.find((user) => user.userId === loggedInUser);
    console.log("UserContext......");
    console.log(user);
    if (user) {
      setLoggedInUser(user.username);
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
