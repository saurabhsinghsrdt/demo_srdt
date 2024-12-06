import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsResponse } from "../types/Type";

// Define async action for loading products using GET request
export const productsLoader:any = createAsyncThunk<ProductsResponse, void>(
  "user/fetchData",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products data");
    }
    return response.json();
  }
);

// Define async action for posting new product using POST request
export const postProduct:any = createAsyncThunk(
  "user/postProduct",
  async (newProduct: { title: string; price: string; description: string; image: string; category: string }) => {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to post product");
    }

    return response.json(); // Return the response which includes the created product data
  }
);

// Initial state
interface UserState {
  loading: boolean;
  data: ProductsResponse | null;
  error: string | null;
  postedProduct: any | null; // To store the newly posted product
}

const initialState: UserState = {
  loading: false,
  data: null,
  error: null,
  postedProduct: null,
};

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle loading products (GET request)
    builder
      .addCase(productsLoader.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsLoader.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(productsLoader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });

    // Handle posting new product (POST request)
    builder
      .addCase(postProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.postedProduct = action.payload; // Store the posted product data
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to post product";
      });
  },
});

export default userSlice.reducer;
