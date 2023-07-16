import './App.css';
import { useState } from "react";

function App(){
    return(
        <h1 className='greeting'>Hello, World</h1>
    );
}

const MyComponent = () =>{

    const[isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () =>{
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible && <p> This parangraph is visible.</p>}
            <button onClick={toggleVisibility}>Toggle Visibility</button> 
        </div>    
    );
};

const mapComponent = () => {

    const newArr= [] ;

    const[items, setItems] = useState(newArr);

    const addItem = () => {
        setItems(arr => [...items, 'New Item']);
    }

    return(
        <div>
            <ul>
                {
                    items.map((item,index)=>(
                        <li key={index}>item</li>
                    ))
                }
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>    
    );
};

// export default App;

export {App, MyComponent, mapComponent};