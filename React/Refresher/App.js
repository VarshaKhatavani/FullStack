
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// <div id="parent">
//     <div id="child">
//         <h1>Hey, I'm h1 tag</h1>
//         <h2>Hi, I'm h2 tag</h2>
//     </div>
//      <div id="child2">
//         <h1>Hey, I'm h1 tag</h1>
//         <h2>Hi, I'm h2 tag</h2>
//     </div>
// </div>

// const parent = React.createElement("div", {id:"parent"}, 
//     [React.createElement("div", {id:"child"}, [
//         React.createElement("h1",{},"Hey, I'm h1 tag"), 
//         React.createElement("h2",{},"Hi, I'm h2 tag")
//     ]),
//      React.createElement("div", {id:"child2"}, [
//         React.createElement("h1",{},"Hey, I'm h1 tag"), 
//         React.createElement("h2",{},"Hi, I'm h2 tag")]
//     )]
// );

import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object =>  HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"Hey, I'm h1 tag")

// Use of JSX
const jsxHeading = <h1>Hey, I'm h1 tag.</h1>

// Use of functional component - type 1 - without using return 
const HeadingComponent = () => (
        <div id="container">
            {/* <Title/>  */}
            {Title()}  {/* Component itself is a javaScipt function so it can be called as well like function calling */}
            <span>Total = </span> {100 + 100}
            <Comp/> 
            <h1>Hi, I'm from heading component</h1>
        </div>
)

const elem = <span>Hello, I'm span tag using JSX & JS to inject element</span>

// Use of functional component - type 2 - with using return 
const Title = () =>{    
    return  <h1 className="title"> Hi, I'm title component </h1>
}

const Comp = function(){
    return <div>
        <h1>Hi, I'm normal function</h1>  
        {elem}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);   