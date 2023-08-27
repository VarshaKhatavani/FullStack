import './App.css';
import {  useEffect, useState, useReducer, useTransition } from 'react';
//useCallback,

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const App = () => {
  /*
  const [count, setCount] = useState(0);
  const items = [1,2,3,4,5];
  const doubleItems = items.map(item => item * 2);
  const name = 'Varsha';
  const age = '30';

  const handleClick = () => {
      setCount(prevCount => prevCount+1);
  }

  useEffect(()=>{
      console.log('Component mouned')  ;
  },[])

  const handleClickWithEffect = useCallback(() => {
    console.log('Button clicked');
  },[]); */

  // 18th Aug 2023
  const [count, setCount] = useState(0);
  const [countTransition, setCountTransition] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // use of useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // use of useTransition
  const [isPending,startTransition] = useTransition();

  const increment = () => {
    startTransition(() => {
      setCountTransition(countTransition + 1);
    });
  };

  return (
    <>
    <h1>Hello, React!</h1>

     {/* example of useEffect */}
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>

    {/* example of useReducer */}
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

    <p>Count: {countTransition}</p>
    <button onClick={increment}>Increment</button>
    {isPending && <p>Loading...</p>}

    {/* <div>
        <p>count : {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
    <ul>{doubleItems.map(
          items => <li key={items}>{items}</li>
        )}
    </ul>
    <h1>{name}</h1><p>{age} years old</p>
    <button onClick={handleClickWithEffect}>Click me</button> */}

    </>
  );
}

//ReactDOM.render(<App/>, document.getElementById('root'))

export default App;
