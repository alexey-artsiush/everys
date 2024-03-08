import { AxiosInstance } from "axios";
import { IProductSchema } from "@/entities/Product/model/types/productTypes";
import { ISearchBarSchema } from "@/features/SearchBar/model/types/searchBarTypes";

export interface IStateSchema {
  productReducer: IProductSchema;
  searchBarReducer: ISearchBarSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: IStateSchema;
}
