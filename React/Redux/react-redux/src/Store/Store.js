// use the created slice

import cartReducer from "./CartSlice"
import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productSlice
    }
})

export default store;