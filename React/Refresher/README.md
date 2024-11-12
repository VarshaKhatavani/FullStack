# Swiggy Clone App - React JS ⚛️

This project is a Swiggy Clone built with React JS, mimicking the core functionality of Swiggy's food delivery platform.

It includes dynamic features like

- Home Page,
- Search,
- Sign In / Sign Up,
- Guest User functionality,
- Cart management using Redux, and more.

## Features

### 1. Home Page 🍽️

- Fetches live data from Swiggy's API.
- Displays restaurants based on the user's location (includes a default location).
- Shimmer UI for smooth loading experience.
- Tailwind CSS is used for styling and responsiveness.

### 2. Search Functionality 🔍

- Allows users to search for restaurants or dishes.
- Implements debouncing for efficient searching.
- Maintains the last 5 search history using `localStorage`.

### 3. Authentication 🔐

- **Sign In / Sign Up** pages created using `react-hook-form`.
- **Guest User Functionality**: Guest users can browse the app and add items to the cart, but their data is not saved in `localStorage`.

### 4. Context API 📌

- Common component created to fetch data for both the Home Page and Search component.
- Displays the logged-in user's details using Context API.

### 5. Restaurant Menu Page 📋

- Displays the menu for each restaurant.
- Users can add multiple items from the same restaurant to their cart.

### 6. Cart Management 🛒

- **Cart with Redux**: The cart data is managed using Redux, allowing users to view and modify their orders.
- If a user tries to add items from a different restaurant, a prompt asks whether to reset the cart.
- Cart data is saved in `localStorage` for logged-in users.
- Guest users can add items to the cart for viewing but do not store data in `localStorage`.

### 7. Cart Page 📝💵

- Displays the restaurant name and added items.
- Includes a link to the restaurant menu for adding more items.
- Users can remove items from the cart and `localStorage` as well.

## Technology Stack </>🖥️

- **React JS**: Core frontend framework.
- **Redux**: For managing cart state.
- **Context API**: For global state management (e.g., user data).
- **react-hook-form**: For managing forms (Sign In / Sign Up).
- **Tailwind CSS**: For styling and responsive design.
- **LocalStorage**: Used for maintaining cart and search history.
- **Debouncing**: Implemented for Search functionality to optimize performance.

## Future Enhancements 🚀🎯

- Add more user authentication and profile features.
- Implement payment gateway integration.
- Optimize the UI and improve overall performance.
