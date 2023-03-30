import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsItemModel } from "../../models/FilmsItemModel";
import { RootStoreType } from "../rootReducer";
import { initialCurrentFilmState } from "./currentFilmDataModel";

const currentFilmSlice = createSlice({
    name: "bestFilmsData",
    initialState: initialCurrentFilmState,
    reducers: {
        setFilmById: (state, action: PayloadAction<FilmsItemModel>) => {
            state.data = action.payload;
        },
        clearFilmById: (state) => {
            state.data = null as unknown as FilmsItemModel;
        }
    }
});

export const { setFilmById, clearFilmById } = currentFilmSlice.actions;

//? Selectors
export const getFilmById = (store: RootStoreType): FilmsItemModel => store.currentFilmData.data;

export default currentFilmSlice.reducer;
