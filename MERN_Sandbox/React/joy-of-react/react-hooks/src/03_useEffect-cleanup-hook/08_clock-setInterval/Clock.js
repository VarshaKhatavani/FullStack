import React from "react";
import format from "date-fns/format";

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      console.log("tick"); // to check the intervals after component hide
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
}

export default Clock;
