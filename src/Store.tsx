// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userSlice"; // Adjusted import based on file location
import cartReducer from "./store/CartReducer"; // Adjusted import based on file location

// Configure the Redux store with both reducers
const store = configureStore({
  reducer: {
    user: userReducer, // user reducer for managing user state
    cart: cartReducer, // cart reducer for managing shopping cart state
  },
});

export default store;
