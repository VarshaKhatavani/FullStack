import React from "react";

import styles from "./Toasty.module.css";

// Here's how we'd solve this problem using vanilla JS.
// Feel free to repurpose this in your solution!
// function pureJsVersion() {}

function Toasty() {
  // Your goal is to update the `isShown` state variable,
  // based on the user's scroll position, using
  // IntersectionObserver.
  const [isShown, setIsShown] = React.useState(false);

  // This CSS value will control whether the ghost is
  // visible or not.
  const translateX = isShown ? "0%" : "100%";

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    // used useRef as DOM doesn't work with React
    // const wrapperElement = document.querySelector(".toasty-wrapper");

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      console.log(entry.isIntersecting); // true | false

      if (entry.isIntersecting) {
        // Show character
        setIsShown(true);
      } else {
        // Hide character
        setIsShown(false);
      }
    });
    // Observe the wrapper element
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    //clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;
