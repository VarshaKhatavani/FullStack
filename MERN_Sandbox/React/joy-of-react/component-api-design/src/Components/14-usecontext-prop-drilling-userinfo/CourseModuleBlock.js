import React from "react";

import ModuleLessons from "./ModuleLessons";

function CourseModuleBlock({ userInfo }) {
  return (
    <>
      <ModuleLessons userInfo={userInfo} />
    </>
  );
}

export default CourseModuleBlock;
