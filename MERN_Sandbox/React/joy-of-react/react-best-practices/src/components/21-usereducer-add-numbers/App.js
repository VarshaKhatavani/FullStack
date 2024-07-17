import React from 'react';
import { produce } from 'immer';

function App() {
  const [numbers, setNumbers] = React.useState([0, 1, 2]);
  
  function handleClick() {
    const nextState = produce(numbers, (draftState) => {
      const nextNumber = numbers.length;
      draftState.push(nextNumber);
    });
    
    setNumbers(nextState);
  }
  
  return (
    <>
      <h2>Data contents:</h2>
      <div className="items">
        {JSON.stringify(numbers)}
      </div>
      
      <div className="actions">
        <button onClick={handleClick}>
          Add next number
        </button>
      </div>
    </>
  );
}

export default App;