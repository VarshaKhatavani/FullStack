import React from "react";

import AccountDropdown from "./AccountDropdown";
import CourseIndexLayout from "./CourseIndexLayout";

import "./reset.css";
import "./styles.css";

function PropDrillingApp() {
  const user = useUser();

  return (
    <>
      <AccountDropdown userInfo={user} />
      <CourseIndexLayout userInfo={user} />
    </>
  );
}

export default PropDrillingApp;

function useUser() {
  return {
    email: "hello@hi.com",
  };
}
