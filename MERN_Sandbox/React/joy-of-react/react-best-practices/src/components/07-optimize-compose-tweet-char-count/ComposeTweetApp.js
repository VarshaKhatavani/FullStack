import React from "react";

import ComposeTweet from "./ComposeTweet";

import "../../utils/reset.css";
import "./styles.css";

function ComposeTweetApp() {
  return (
    <>
      <ComposeTweet
        handleSubmit={(message) => {
          alert("You submitted: " + message);
        }}
        maxChars={100}
      />
    </>
  );
}

export default ComposeTweetApp;
