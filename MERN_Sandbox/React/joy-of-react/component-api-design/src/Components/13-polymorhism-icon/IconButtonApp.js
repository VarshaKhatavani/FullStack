import React from "react";
import { Award, Camera, Frown, Slash, XCircle } from "react-feather";

import IconButton from "./IconButton";

function IconButtonApp() {
  // TODO: Render an “IconButton”.
  return (
    <>
      {/* using component as prop */}
      {/* <IconButton icon={<Award />}>Collect Award</IconButton> */}
      {/* <Frown strokeWidth={1.5} /> */}

      {/* passing component through props  */}
      <IconButton icon={Award}>Collect Award</IconButton>
      <IconButton icon={Frown}>Rate our product</IconButton>
      <IconButton icon={Camera}>Picture please</IconButton>
      <IconButton icon={Slash}>Stop</IconButton>
      <IconButton icon={XCircle}>Dismiss</IconButton>
    </>
  );
}

export default IconButtonApp;
