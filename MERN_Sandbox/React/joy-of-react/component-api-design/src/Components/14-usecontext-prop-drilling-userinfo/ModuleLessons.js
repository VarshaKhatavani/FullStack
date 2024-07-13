import React from "react";

function ModuleLessons({ userInfo }) {
  return <>User email: {userInfo?.email || "Not provided"}</>;
}

export default ModuleLessons;
