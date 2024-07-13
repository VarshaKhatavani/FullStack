import React from "react";

import CourseModuleBlock from "./CourseModuleBlock";

function SubRouteWrapper({ userInfo }) {
  return (
    <>
      <CourseModuleBlock userInfo={userInfo} />
    </>
  );
}

export default SubRouteWrapper;
