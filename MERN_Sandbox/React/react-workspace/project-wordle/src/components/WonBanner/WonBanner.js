import React from "react";
import Banner from "../Banner/Banner";

const WonBanner = ({ noOfGuesses }) => {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!🎉</strong> Got it in{" "}
        <strong>
          {noOfGuesses === 1 ? "1 guess" : `${noOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
};

export default WonBanner;
