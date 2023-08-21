import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from './counterSlice';

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
  
    const handleIncrement = () => {
      dispatch(increment());
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  }
  
  export default Counter;
