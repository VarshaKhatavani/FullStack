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
      console.log("cart called....");
      if (!state.cartId) {
        state.cartId = `${crypto.randomUUID()}-${Date.now()}`;
      }
      console.log(state.cartId);
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

      // Update total items in the cart
      state.totalItems += 1;
      console.log(state.currentUserId);

      // Check if item already exists in the cart
      const existingItem =
        state.items.length > 0 &&
        state.items.find(
          (item) => item?.card?.info?.id === newItem?.card?.info?.id
        );
      console.log(existingItem);
      if (existingItem) {
        // Update quantity if item already exists
        state.count += 1;
        console.log(existingItem.card.info.quantity);
        existingItem.card.info.quantity = state.count;
      } else {
        state.count = 1;
        // If item doesn't exist, set quantity to 1 and add it to the cart
        newItem.card.info.quantity = 1;
        state.items.push(newItem);
      }

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
        let currentUserCart = users[userIndex].cartId;
        if (userIndex !== -1 && state.cartId !== null) {
          console.log("if block....");
          users[userIndex].cartId = state.cartId;
        }
        console.log(users);
        // find user & update specific data
        localStorage.setItem("user", JSON.stringify(users));

        // storing to cart
        // let cartData = JSON.parse(localStorage.getItem("cart")) || {};
        // console.log(cartData);
        console.log(state.cartId, currentUserCart);
        if (currentUserCart) {
          const cartData = state.items;
          // {
          //   items: state.items,
          // restaurantId: state.currentRestaurantId,
          // totalItems: state.totalItems,
          // };
          console.log(cartData);
          let existingCartData = JSON.parse(localStorage.getItem("cart")) || {};

          // Check if the current cartId already exists in the object
          if (!existingCartData[currentUserCart]) {
            existingCartData[currentUserCart] = {
              items: [],
              restaurantId: state.restaurantId,
              totalItems: 0,
              cartId: currentUserCart,
            };
          }

          // Add the new item to the appropriate cart

          // Check if item already exists in the cart
          if (existingItem) {
            // Update quantity if item already exists
            existingCartData[currentUserCart].items = state.items;
          } else {
            existingCartData[currentUserCart].items.push(newItem);
          }
          existingCartData[currentUserCart].totalItems += 1;
          // existingCartData[state.cartId].cartId = state.cartId;

          // Save the updated cart array back to local storage
          localStorage.setItem("cart", JSON.stringify(existingCartData));
        } else {
          console.error("Cart ID is missing! Unable to save cart data.");
        }
      }
    },

    setCart: (state, action) => {
      const storedCart = action.payload;
      console.log("storedCart..... from cartSlice");
      console.log(storedCart); // object
      // Check if storedCart.items is an array and is not empty
      if (
        storedCart &&
        Array.isArray(storedCart.items) &&
        storedCart.items.length > 0
      ) {
        // Assign storedCart items to the state
        state.items = storedCart.items;

        // Set the restaurant ID from the first item in the array
        state.currentRestaurantId = storedCart.items[0]?.resId;

        // Set totalItems from storedCart or fallback to length of the items array
        state.totalItems = storedCart.totalItems;
      } else {
        // Log or handle the case when storedCart is not valid
        console.warn("Invalid storedCart structure", storedCart);
        // Initialize state with default values
        state.items = [];
        state.currentRestaurantId = null;
        state.totalItems = 0;
        state.count = 0;
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

        const storedCart = JSON.parse(localStorage.getItem("cart"));
        console.log("storedCart.....");
        const loggedInUser = localStorage.getItem("loggedInUser");
        let userData = JSON.parse(localStorage.getItem("user"));
        // console.log(typeof userData);
        if (!Array.isArray(userData)) {
          userData = userData ? [userData] : []; // If users exists, make it an array; otherwise, an empty array
        }

        if (storedCart && loggedInUser) {
          const loginUser = userData?.find(
            (user) => user?.userId === loggedInUser
          );
          if (loginUser) {
            console.log(loginUser?.cartId);
            if (storedCart[loginUser?.cartId]) {
              console.log(storedCart[loginUser?.cartId]);
              let userCart = storedCart[loginUser?.cartId];
              console.log(userCart?.items);
              const existingItem = userCart.items.find(
                (item) => item?.card?.info?.id === itemId
              );
              if (existingItem) {
                // Decrease quantity
                if (existingItem.card.info.quantity > 1) {
                  existingItem.card.info.quantity -= 1;
                } else {
                  // Remove item if quantity is 1
                  userCart.items = userCart.items.filter(
                    (item) => item?.card?.info?.id !== itemId
                  );
                }
              }
              userCart.totalItems -= 1;
              console.log(userCart?.items);
              storedCart[loginUser?.cartId] = userCart;
              // delete storedCart[loginUser?.cartId];
            }
          }
        }

        // Update total items in the cart
        state.totalItems -= 1;

        // Save updated cart to local storage
        localStorage.setItem("cart", JSON.stringify(storedCart));
      } else {
        console.warn("Item not found in cart:", itemId);
      }
    },

    clearCart: (state, action) => {
      try {
        // Check the type of action: 'LOGOUT' or 'NEW_RESTAURANT'
        const { type } = action.payload || {};
        // Log the current state before clearing
        console.log(
          "Clear Cart action:",
          type,
          "Clearing entire cart:",
          state.items
        );

        // Clear all items from the cart state
        state.currentUserId = null; // Clear user ID
        state.cartId = null; // Clear cartId (if specific to user)
        state.currentRestaurantId = null; // Clear restaurant data
        state.items = []; // Reset cart items
        state.totalItems = 0; // Reset total items count
        state.count = 0; // Reset quantity count
        // state.items = {};

        if (type === "NEW_RESTAURANT") {
          const storedCart = JSON.parse(localStorage.getItem("cart"));
          console.log("storedCart.....");
          const loggedInUser = localStorage.getItem("loggedInUser");
          let userData = JSON.parse(localStorage.getItem("user"));
          // console.log(typeof userData);
          if (!Array.isArray(userData)) {
            userData = userData ? [userData] : []; // If users exists, make it an array; otherwise, an empty array
          }

          if (storedCart && loggedInUser) {
            const loginUser = userData?.find(
              (user) => user?.userId === loggedInUser
            );
            if (loginUser) {
              console.log(loginUser?.cartId);
              if (storedCart[loginUser?.cartId]) {
                console.log(storedCart[loginUser?.cartId]);
                delete storedCart[loginUser?.cartId];
                console.log("Cart cleared for user:", loginUser.userId);
                localStorage.setItem("cart", JSON.stringify(storedCart));
              }
            }
          }
        }

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
