import React from "react";
import ReactDOM  from "react-dom/client";
//import App from './App';
import {App,MyComponent, MapCmp, DataFetcher, MyExample, App1} from './App'; 
// DataFetcherWithLoader, FetchData

//const element = <h1>Hello World!</h1> ;
//ReactDOM.render(element, document.getElementById('root'));
//console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React Fragment
    <>  
        <App />
        <MyComponent/>
        <MapCmp/>    
        <DataFetcher/>
        {/* <DataFetcherWithLoader/> 
         <FetchData/> */}
        <MyExample/>
        <App1/>
    </>
);