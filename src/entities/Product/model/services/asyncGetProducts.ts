import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/storeProvider";
import { api } from "@/shared/api/api";
import { IProductItem } from "@/entities/Product/model/types/productTypes";

export const asyncGetProducts = createAsyncThunk<IProductItem[] | any, undefined, ThunkConfig<string>>(
  "product/getProduct",
  async (filter, thunkAPI: any) => {
    try {
      const response = await api.get(`/v1/Stock`, { params: filter }).then((res) => res.data);

      thunkAPI.fulfillWithValue(response);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue("err");
    }
  }
);
