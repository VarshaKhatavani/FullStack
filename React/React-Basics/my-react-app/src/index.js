import React from "react";
import ReactDOM  from "react-dom/client";
//import App from './App';
import {App,MyComponent, mapComponent} from './App'; 

//const element = <h1>Hello World!</h1> ;
//ReactDOM.render(element, document.getElementById('root'));
//console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React Fragment
    <>  
        <App />
        <MyComponent/>
        <mapComponent/>    
    </>
);