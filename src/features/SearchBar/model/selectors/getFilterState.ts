import { IStateSchema } from "@/app/providers/storeProvider/config/stateSchema";

export const getFilterState = (state: IStateSchema) => state.searchBarReducer;
