import React from "react";

/*
Here's the “pure JS” version once again:

  function pureJsVersion() {
    const wrapperElement =
      document.querySelector('.some-class');
  
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
  
      // `entry.isIntersecting` will be true if the
      // element is in the viewport, false if not.
    });
  
    observer.observe(wrapperElement);
  }

To unsubscribe, you can call:

  observer.disconnect();
*/

function useIsOnscreen() {
  // TODO
  const elementRef = React.useRef();
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return [isOnScreen, elementRef];
}

export default useIsOnscreen;
