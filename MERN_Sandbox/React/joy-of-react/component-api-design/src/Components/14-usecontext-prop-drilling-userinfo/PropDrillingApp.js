import React from "react";

import AccountDropdown from "./AccountDropdown";
import CourseIndexLayout from "./CourseIndexLayout";

function PropDrillingApp() {
  const user = useUser();

  return (
    <>
      <AccountDropdown user={user} />
      <CourseIndexLayout />
    </>
  );
}

export default PropDrillingApp;

function useUser() {
  return {
    email: "hello@hi.com",
  };
}
