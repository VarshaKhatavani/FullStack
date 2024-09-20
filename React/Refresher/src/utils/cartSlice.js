import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 1, // maintain quantity
    currentRestaurantId: null,
    totalItems: 0, // used to maintain cart counter
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log("newItem.....", newItem);
      const restaurantId = newItem?.resId;

      if (
        state.currentRestaurantId &&
        state.currentRestaurantId !== restaurantId
      ) {
        state.items = {};
        state.totalItems = 0;
      }

      // Set the current restaurant ID
      state.currentRestaurantId = restaurantId;

      // Initialize if the restaurant does not exist in state.items
      if (!state.items[restaurantId]) {
        state.items[restaurantId] = {
          items: [],
          totalItems: 0,
        };
      }

      // Check if item already exists in the restaurant's cart
      const existingItem = state.items[restaurantId].items.find(
        (item) => item?.card?.info?.id === newItem?.card?.info?.id
      );

      console.log("existingItem...", existingItem);

      if (existingItem) {
        //  const actualExistingItem = existingItem instanceof Proxy ? existingItem.valueOf() : existingItem;
        state.count += 1;
        existingItem.card.info.quantity = state.count;
        state.items.length++;
      } else {
        // If item doesn't exist, add it to the cart
        state.count = 1;
        state.items[restaurantId].items.push(newItem);
        newItem.card.info.quantity = state.count;
      }

      // Update total items for the specific restaurant and overall cart
      state.items[restaurantId].totalItems += 1;
      state.totalItems += 1;

      // Save updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(state.items[restaurantId]));
    },

    setCart: (state, action) => {
      const storedCart = action.payload;
      console.log("storedCart..... from cartSlice");
      console.log(storedCart);
      state.items = storedCart.items || {};
      state.currentRestaurantId = storedCart?.items[0]?.resId;
      state.totalItems = storedCart.totalItems || 0;
    },

    removeItem: (state, action) => {
      const { itemId, restaurantId } = action.payload; // expecting itemId and restaurantId in the payload
      console.log(itemId);
      console.log(restaurantId);
      // Check if both itemId and restaurantId are defined
      if (!itemId || !restaurantId || !state.items[restaurantId]) {
        console.warn(
          "itemId or restaurantId is missing or invalid:",
          action.payload
        );
        return;
      }

      const existingItem = state.items[restaurantId].items.find(
        (item) => item?.card?.info?.id === itemId
      );

      if (existingItem) {
        if (existingItem.card.info.quantity > 1) {
          existingItem.card.info.quantity -= 1;
          state.items[restaurantId].totalItems -= 1;
        } else {
          // Remove item if quantity is 1
          state.items[restaurantId].items = state.items[
            restaurantId
          ].items.filter((item) => item?.card?.info?.id !== itemId);
          state.items[restaurantId].totalItems -= 1;
        }

        // Update overall cart count
        state.totalItems -= 1;

        // Update local storage
        localStorage.setItem(
          `cart-${restaurantId}`,
          JSON.stringify(state.items[restaurantId])
        );

        // Remove the restaurant's entry if no items are left
        if (state.items[restaurantId].items.length === 0) {
          delete state.items[restaurantId];
          localStorage.removeItem(`cart-${restaurantId}`);
        }
      }
    },

    clearCart: (state, action) => {
      const restaurantId = action.payload; // restaurantId to clear the specific restaurant's cart

      if (state.items[restaurantId]) {
        state.totalItems -= state.items[restaurantId].totalItems;
        delete state.items[restaurantId];
        localStorage.removeItem(`cart-${restaurantId}`);
      }
    },
  },
});

export const { addItem, removeItem, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
