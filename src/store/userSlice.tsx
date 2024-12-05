import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsResponse } from "../types/Type";

export const productsLoader:any = createAsyncThunk<ProductsResponse, void>("user/fetchData", async () => {
  const response = await fetch("https://dummyjson.com/products");
  console.log(response, "yyyyyyyyyyyyyy");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
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
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
