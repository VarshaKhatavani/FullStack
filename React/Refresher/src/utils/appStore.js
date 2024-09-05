import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// 1.create a store
// 2.create a slice
const appStore = configureStore({
  // 3. add slice to store
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
