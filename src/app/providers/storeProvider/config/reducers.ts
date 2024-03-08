import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "@/entities/Product";
import { searchBarReducer } from "@/features/SearchBar";

export const rootReducer = combineReducers({
  productReducer,
  searchBarReducer,
});
