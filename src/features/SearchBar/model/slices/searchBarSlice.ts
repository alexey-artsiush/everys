import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchBarSchema } from "../types/searchBarTypes";

const initialState: ISearchBarSchema = {
  filter: {
    Take: 3,
    Filter: "",
  },
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setFilterTake: (state, action: PayloadAction<number>) => {
      state.filter.Take = action.payload;
    },
    setFilterText: (state, action: PayloadAction<string>) => {
      state.filter.Filter = action.payload;
    },
  },
});

export const { actions: searchBarActions, reducer: searchBarReducer } = searchBarSlice;
