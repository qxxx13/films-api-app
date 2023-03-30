import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../rootStore";
import { initialAppState } from "./appReducerModel";

const appSlice = createSlice({
    name: "appReducer",
    initialState: initialAppState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setError, setIsLoading } = appSlice.actions;

//? Selectors

export const getIsLoading = (store: RootState): boolean => store.appReducer.isLoading;

export default appSlice.reducer;
