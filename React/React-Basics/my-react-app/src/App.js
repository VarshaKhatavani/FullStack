import './App.css';
import { useState, useEffect } from "react";

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

const MapCmp = () => {
    const [items, setItems] = useState([]);
    const addItem = () => {
        console.log(items);
        setItems([...items, 'New Item']);
    }
    return(
        <div>
            <ul>{
                    items.map((item,index)=>(
                        <li key={index}>item</li>
                    ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>    
    );
};

const DataFetcher = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response)=>response.json())
                .then((data) => {
                    console.log(data);
                });
    },[]);

    return <div>Data Fetcher</div>;
};

const DataFetcherWithLoader = () =>{
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://reqres.in/api/users/2')
            .then((response)=>response.json())
                .then((data)=>{
                    setData(data);
                    setLoading(false);
                });
    },[]);


    if (loading) {
        return <div>Loading...</div>;
    }
    
    return <div>Data: {data}</div>;
}

// export default App;

export {App, MyComponent, MapCmp, DataFetcher, DataFetcherWithLoader};

