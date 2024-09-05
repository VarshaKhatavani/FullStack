import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 1, // maintain quantity
    totalItems: 0, // used to maintain cart counter
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item &&
          item?.card &&
          item?.card?.info &&
          item?.card?.info?.id === newItem?.card?.info?.id
      );
      if (existingItem) {
        //  const actualExistingItem = existingItem instanceof Proxy ? existingItem.valueOf() : existingItem;
        state.count += 1;
        existingItem.card.info.quantity = state.count;
        state.items.length++;
      } else {
        // If item doesn't exist, add it to the cart
        state.count = 1;
        state.items.push(newItem);
        newItem.card.info.quantity = state.count;
      }
      state.totalItems += 1;
      // state.items.push(newItem);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item &&
          item.card &&
          item.card.info &&
          item.card.info.id === itemIdToRemove
      );

      if (existingItem) {
        // Decrease the quantity if there's more than one
        if (existingItem?.card?.info?.quantity > 1) {
          existingItem.card.info.quantity -= 1;
          state.totalItems -= 1;
        } else {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter(
            (item) => item?.card?.info?.id !== itemIdToRemove
          );
          state.totalItems -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalItems = 0;
      //return { items : []  } ;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
