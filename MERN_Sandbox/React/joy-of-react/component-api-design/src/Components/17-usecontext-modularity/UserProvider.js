import React from "react";
import useSWR from "swr";

export const UserContext = React.createContext();

const ENDPOINT = "https://jor-test-api.vercel.app/api/get-current-user";

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  console.log(json);

  if (!json.ok) {
    throw json;
  }

  return json.user;
}

function UserProvider({ children }) {
  const {
    data: user,
    error: userError,
    mutate: mutateUser,
  } = useSWR(ENDPOINT, fetcher);

  const logOut = React.useCallback(() => {
    mutateUser({
      user: null,
    });
  }, [mutateUser]);

  const editProfile = React.useCallback(
    (newData) => {
      mutateUser({
        user: {
          ...user,
          ...newData,
        },
      });
    },
    [user, mutateUser]
  );

  return (
    <UserContext.Provider value={{ user, logOut, editProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
