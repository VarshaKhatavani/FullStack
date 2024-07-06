import React from "react";

import Banner from "./Banner";

import "./reset.css";
import "./styles.css";

const EXAMPLE_USER = {
  name: "Sayen",
  registrationStatus: "verified",
};

function BannerApp() {
  return (
    <Banner type="success" user={EXAMPLE_USER}>
      Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
    </Banner>
  );
}

export default BannerApp;
