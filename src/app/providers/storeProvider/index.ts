import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { StateSchema, ThunkConfig } from "./config/stateSchema";
import { AppDispatch, RootState } from "@/app/providers/storeProvider/config/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { StateSchema, AppDispatch, ThunkConfig };
