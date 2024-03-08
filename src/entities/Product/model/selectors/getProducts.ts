import { IStateSchema } from "@/app/providers/storeProvider/config/stateSchema";

export const getProducts = (state: IStateSchema) => state.productReducer;
