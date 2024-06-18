import React from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = React.useState(new Date());

  return (
    <p className="clock">
      {format(time, 'hh:mm:ss a')}
    </p>
  );
}

export default Clock;