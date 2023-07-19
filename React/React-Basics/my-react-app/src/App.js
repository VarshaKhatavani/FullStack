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

// const DataFetcherWithLoader = () =>{
//     const [data,setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         fetch('https://reqres.in/api/users/2/data')
//             .then((response)=>response.json())
//                 .then((data)=>{
//                     console.log(data);
//                     setData(data);
//                     setLoading(false);
//                 });
//     },[]);


//     if (loading) {
//         return <div>Loading...</div>;
//     }
    
//     return <div>Data: {data}</div>;
// };

// const FetchData = async () =>{        
//     const response = await fetch('https://reqres.in/api/users/2');
//     const data = await response.json();
//     return data;
// }

// const result = FetchData();
// console.log(result);

const MyExample = () => {

    const [apiData, setData] = useState([]);

    useEffect(()=>{
        fetchDataNew().then((result) => 
            setData(result));
    },[]);

    const fetchDataNew = async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    };

    return ( 
        <main>
            <ul>
                {apiData && apiData.length > 0 && apiData.map((userObj, index) => (
                    <li key={userObj.id}>{userObj.title}</li>
                ))}
            </ul>
        </main>
    ) 

};

const MyComponent2 = ({items}) => {
    return (
        <ul>
            {
                items.map((item)=> (<li key={item.id}>{item.name}</li>))
            }
        </ul>
    );
};

const App1 =() => {
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },    
    ];

    return <MyComponent2 items={products}/>
}


// export default App;

export {App, MyComponent, MapCmp, DataFetcher, MyExample, App1}; //DataFetcherWithLoader , FetchData

