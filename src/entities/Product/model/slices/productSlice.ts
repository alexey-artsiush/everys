import { createSlice } from "@reduxjs/toolkit";
import { IProductSchema } from "../types/productTypes";
import { asyncGetProducts } from "../services/asyncGetProducts";

const initialState: IProductSchema = {
  products: null,
  totalItems: 0,
  error: undefined,
  isLoading: false,
  isError: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(asyncGetProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(asyncGetProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload.result.items;
        state.totalItems = action.payload.result.totalItems;
      })
      .addCase(asyncGetProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { actions: productActions, reducer: productReducer } = productSlice;
