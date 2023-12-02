import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Content from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
//import Grocery from "./src/components/Grocery"; // removed as imported as lazy loading

// Moved resList array object to mockData.js

// Moved Header Component to Header.js

//lazy loading
const Grocery = lazy(()=> import("./src/components/Grocery"));


const AppLayout = () =>{

    const [userName, setUserName] = useState();

    useEffect(()=>{
      const data = {
        name: "Varsha Khatavani"
      };
      setUserName(data.name);
    })

   return <div className="body">
            <UserContext.Provider value={{ loggedInUser : userName}}>
              <Header/>
              <Outlet/>     
            </UserContext.Provider>        
          </div> 
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Content/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> 
                    <Grocery/> 
                 </Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  }
]);

// Moved Content Component to Body

// Moved RestaurantCard to RestaurantCard.js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);