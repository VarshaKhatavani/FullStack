import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    items: [],
    count: 1, // maintain quantity
    currentRestaurantId: null,
    currentUserId: null,
    totalItems: 0, // used to maintain cart counter
  },
  reducers: {
    generateCartId: (state) => {
      if (!state.cartId) {
        state.cartId = crypto.randomUUID();
      }
    },

    addItem: (state, action) => {
      console.log("Current state:", state);
      const newItem = action.payload;
      console.log("newItem.....", newItem);
      const restaurantId = newItem?.resId;
      const loggedInUserId = newItem?.usrId;
      //****  clear the items array if rest match */
      // If the restaurant IDs don't match, clear the cart (reset items as an array)
      if (
        state.currentRestaurantId &&
        state.currentRestaurantId !== restaurantId
      ) {
        console.log("Resetting cart for new restaurant");
        state.items = []; // Reset items to an empty array
        state.totalItems = 0;
        state.count = 0;
      }

      // Set the current restaurant ID
      state.currentRestaurantId = restaurantId;
      state.currentUserId = loggedInUserId;
      // Check if item already exists in the cart
      const existingItem = state.items.find(
        (item) => item?.card?.info?.id === newItem?.card?.info?.id
      );

      if (existingItem) {
        // Update quantity if item already exists
        state.count += 1;
        existingItem.card.info.quantity = state.count;
      } else {
        state.count = 1;
        // If item doesn't exist, set quantity to 1 and add it to the cart
        newItem.card.info.quantity = 1;
        state.items.push(newItem);
      }

      // Update total items in the cart
      state.totalItems += 1;

      // Save updated cart to local storage
      if (state.currentUserId) {
        let users = JSON.parse(localStorage.getItem("user"));
        console.log(users);
        if (!Array.isArray(users)) {
          users = users ? [users] : []; // If users exists, make it an array; otherwise, an empty array
        }
        // find logged in user to update the cart
        const userIndex = users?.findIndex(
          (user) => user?.userId === state.currentUserId
        );
        console.log(userIndex);
        if (userIndex !== -1) {
          console.log("if block....");
          users[userIndex].cartId = state.cartId;
        }
        console.log(users);
        // find user & update specific data
        localStorage.setItem("user", JSON.stringify(users));

        // storing to cart
        let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(cartArray);
        // Check if the cart with the current cartId exists in the cart array
        const existingCartIndex = cartArray.findIndex(
          (cart) => cart.cartId === state.cartId
        );
        console.log(existingCartIndex);
        if (existingCartIndex !== -1) {
          // Update the existing cart in the array
          cartArray[existingCartIndex] = {
            cartId: state.cartId,
            items: state.items,
            restaurantId: state.currentRestaurantId,
            totalItems: state.totalItems,
          };
        } else {
          // If cart doesn't exist, add a new cart to the array
          cartArray.push({
            cartId: state.cartId,
            items: state.items,
            restaurantId: state.currentRestaurantId,
            totalItems: state.totalItems,
          });
        }

        // Save the updated cart array back to local storage
        localStorage.setItem("cart", JSON.stringify(cartArray));
      }

      // localStorage.setItem(
      //   "cart_" + `${state.currentUserId}`,
      //   JSON.stringify(state.items)
      // );
    },

    setCart: (state, action) => {
      const storedCart = action.payload;
      console.log("storedCart..... from cartSlice");
      // console.log(typeof storedCart); // object
      // Check if storedCart.items is an array and is not empty
      if (Array.isArray(storedCart) && storedCart.length > 0) {
        // Assign storedCart items to the state
        state.items = storedCart;

        // Set the restaurant ID from the first item in the array
        state.currentRestaurantId = storedCart[0].resId;

        // Set totalItems from storedCart or fallback to length of the items array
        state.totalItems = storedCart.length;
      } else {
        // Log or handle the case when storedCart is not valid
        console.warn("Invalid storedCart structure", storedCart);

        // Initialize state with default values
        state.items = [];
        state.currentRestaurantId = null;
        state.totalItems = 0;
      }
    },

    removeItem: (state, action) => {
      const { itemId } = action.payload; // expecting only itemId in the payload
      console.log(itemId);

      // Check if itemId is defined
      if (!itemId) {
        console.warn("itemId is missing or invalid:", action.payload);
        return;
      }

      // Check if the item exists in the cart
      const existingItem = state.items.find(
        (item) => item?.card?.info?.id === itemId
      );

      if (existingItem) {
        // Decrease quantity
        if (existingItem.card.info.quantity > 1) {
          existingItem.card.info.quantity -= 1;
        } else {
          // Remove item if quantity is 1
          state.items = state.items.filter(
            (item) => item?.card?.info?.id !== itemId
          );
        }

        // Update total items in the cart
        state.totalItems -= 1;

        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        console.warn("Item not found in cart:", itemId);
      }
    },

    clearCart: (state) => {
      try {
        // Log the current state before clearing
        console.log("Clearing entire cart:", state.items);

        // Reset the totalItems count to zero
        state.totalItems = 0;

        // Clear all items from the cart state
        state.items = {};

        // Clear all restaurant-specific cart items from localStorage
        // Object.keys(localStorage).forEach((key) => {
        //   if (key.startsWith("cart")) {
        //     localStorage.removeItem(key);
        //   }
        // });

        console.log("Cart cleared successfully.");
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    },
  },
});

export const { addItem, removeItem, clearCart, setCart, generateCartId } =
  cartSlice.actions;
export default cartSlice.reducer;
