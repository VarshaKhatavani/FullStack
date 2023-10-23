import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Content from "./src/components/Body";

// Moved resList array object to mockData.js

// Moved Header Component to Header.js

const AppLayout = () =>{
   return <div className="body">
            <Header/> 
            <Content/>
          </div> 
}

// Moved Content Component to Body

// Moved RestaurantCard to RestaurantCard.js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)