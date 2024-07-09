import React from "react";

import Hero from "./Hero";
import SubRouteWrapper from "./SubRouteWrapper";

function CoursePage({ userInfo }) {
  console.log(userInfo);
  return (
    <>
      <Hero />
      <SubRouteWrapper userInfo={userInfo} />
    </>
  );
}

export default CoursePage;
