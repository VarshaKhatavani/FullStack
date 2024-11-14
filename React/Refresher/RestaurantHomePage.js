import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./src/components/common/Header.js";
import Content from "./src/components/Body.js";
import Search from "./src/components/restaurant/Search.js";
import Error from "./src/components/common/Error.js";
import Footer from "./src/components/common/Footer.js";
import ScrollToTop from "./src/components/common/ScrollToTop.js";

import SignIn from "./src/components/authentication/SignInPage.js";
import SignUp from "./src/components/authentication/SignUpPage.js";
import Cart from "./src/components/cart/Cart.js";
import RestaurantMenu from "./src/components/restaurant/RestaurantMenu.js";

import { UserProvider } from "./src/utils/context/UserContext";
import { RestaurantProvider } from "./src/utils/context/RestaurantContext";

import { Provider, useDispatch } from "react-redux";
import appStore from "./src/utils/store/appStore.js";
import { setCart } from "./src/utils/store/cartSlice.js";

//import Grocery from "./src/components/Grocery"; // removed as imported as lazy loading

// Moved resList array object to mockData.js

// Moved Header Component to Header.js

//lazy loading
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  console.log("Restaurant Home Page called....");
  const dispatch = useDispatch();
  const loggedInUser = localStorage.getItem("loggedInUser");
  let userData = JSON.parse(localStorage.getItem("user"));
  // console.log(typeof userData);
  if (!Array.isArray(userData)) {
    userData = userData ? [userData] : []; // If users exists, make it an array; otherwise, an empty array
  }

  useEffect(() => {
    if (loggedInUser) {
      const user = userData?.find((user) => user?.userId === loggedInUser);
      // console.log("user from local.....", user?.username);
      const username = user?.username;
      //***** Note: remove logged out time user id *****
      setUserName(username);
    }
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    console.log("storedCart.....");
    if (storedCart) {
      const loginUser = userData?.find((user) => user?.userId === loggedInUser);
      if (loginUser) {
        console.log(loginUser?.cartId);
        const userCart = storedCart[loginUser?.cartId];
        const userItems = { ...userCart };
        if (userCart) {
          console.log(userItems);
          dispatch(setCart(userItems));
        }
      }
    }
  }, [dispatch]);

  return (
    <div className="body">
      <UserProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
      </UserProvider>
      <Footer />
    </div>
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

root.render(
  <Provider store={appStore}>
    <RestaurantProvider>
      <RouterProvider router={AppRouter}></RouterProvider>
    </RestaurantProvider>
  </Provider>
);
