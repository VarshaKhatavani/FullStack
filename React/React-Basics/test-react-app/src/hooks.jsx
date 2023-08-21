import { useTransition,useState } from 'react';

function ComponentD() {
    const [show, setShow] = useState(false);
    const transition = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
  
    return (
      <>
        {
            transition(
                (style, item) => ( item ? <div style={style}>Hello</div> : null)
            )
        }
        <button onClick={() => setShow(!show)}>Toggle</button>
      </>
    );
  }
  export default ComponentD;