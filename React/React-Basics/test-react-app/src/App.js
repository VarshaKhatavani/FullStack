import './App.css';
import { useCallback, useEffect, useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const items = [1,2,3,4,5];
  const doubleItems = items.map(item => item * 2);
  const name = 'Varsha';
  const age = '29';

  const handleClick = () => {
      setCount(prevCount => prevCount+1);
  }

  useEffect(()=>{
      console.log('Component mouned')  ;
  },[])

  const handleClickWithEffect = useCallback(() => {
    console.log('Button clicked');
  },[]);

  return (
    <>
    <h1>Hello, React!</h1>
    <div>
        <p>count : {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
    <ul>{doubleItems.map(
          items => <li key={items}>{items}</li>
        )}
    </ul>
    <h1>{name}</h1><p>{age} years old</p>
    <button onClick={handleClickWithEffect}>Click me</button>

    </>
  );
}

//ReactDOM.render(<App/>, document.getElementById('root'))

export default App;
