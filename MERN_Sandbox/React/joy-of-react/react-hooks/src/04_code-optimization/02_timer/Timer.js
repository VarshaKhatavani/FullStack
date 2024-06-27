import React from 'react';

function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="timer">
      <h1>Seconds since load:</h1>
      <p>{count}</p>
    </div>
  );
}

export default Timer;