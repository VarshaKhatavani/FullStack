import React from "react";
import format from "date-fns/format";

function Clock() {
  const time = useTime();
  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
}

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      // cleanup logic
      window.clearInterval(intervalId);
    };
  }, []);

  // You should see this log *twice* per second
  // in Strict Mode, instead of only once.
  console.log("Clock re-render!");
  return time;
}

export default Clock;
