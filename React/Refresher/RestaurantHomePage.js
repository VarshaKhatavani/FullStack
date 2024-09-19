import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Content from "./src/components/Body";
import Search from "./src/components/Search";
import Error from "./src/components/Error";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import SignIn from "./src/components/SignInPage";
import SignUp from "./src/components/SignUpPage";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ScrollToTop from "./src/components/ScrollToTop";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserProvider } from "./src/utils/UserContext";
import { Provider } from "react-redux";
import { RestaurantProvider } from "./src/utils/RestaurantContext";

//import Grocery from "./src/components/Grocery"; // removed as imported as lazy loading

// Moved resList array object to mockData.js

// Moved Header Component to Header.js

//lazy loading
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log("user from local.....", userData?.data?.username);
    const username = userData?.data?.username;
    setUserName(username);
  }, []);

  return (
    <Provider store={appStore}>
      <RestaurantProvider>
        <div className="body">
          <UserProvider>
            <ScrollToTop />
            <Header />
            <Outlet />
          </UserProvider>
        </div>
        <div>
          <Footer />
        </div>
      </RestaurantProvider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      // {
      //   path:"/contact",
      //   element:<Contact/>
      // },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin", // Define the route for SignInPage
        element: <SignIn />,
      },
      {
        path: "/signup", // Define the route for SignInPage
        element: <SignUp />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Moved Content Component to Body

// Moved RestaurantCard to RestaurantCard.js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
