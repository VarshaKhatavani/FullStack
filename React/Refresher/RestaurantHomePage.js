import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Content from "./src/components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";

// Moved resList array object to mockData.js

// Moved Header Component to Header.js

const AppLayout = () =>{
   return <div className="body">
            <Header/> 
            <Content/>
          </div> 
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },{
    path:"/about",
    element:<About/>
  },{
    path:"/contact",
    element:<Contact/>
  }
]);

// Moved Content Component to Body

// Moved RestaurantCard to RestaurantCard.js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);