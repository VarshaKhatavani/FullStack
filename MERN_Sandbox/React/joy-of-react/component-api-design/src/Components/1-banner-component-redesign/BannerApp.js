import React from "react";

import { LoggedInBanner } from "./Banner";

import "./reset.css";
import "./styles.css";

const EXAMPLE_USER = {
  name: "Varsha",
  registrationStatus: "verified",
};

function BannerApp() {
  return (
    <LoggedInBanner type="success" user={EXAMPLE_USER}>
      Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
    </LoggedInBanner>
  );
}

export default BannerApp;
