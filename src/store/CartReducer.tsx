import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

// Define the state for the cart
interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
