
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

import React from "react";
import ReactDOM from "react-dom/client";

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

// Use of JSX
const heading = <h1>Hey, I'm h1 tag.</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);   