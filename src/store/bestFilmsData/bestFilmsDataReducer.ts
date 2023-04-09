import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";
import { BestFilmsModel } from "../../models/BestFilmsModel";
import { RootStoreType } from "../rootReducer";
import { initialBestFilmsState } from "./bestFilmsDataModel";

const bestFilmsSlice = createSlice({
    name: "bestFilmsData",
    initialState: initialBestFilmsState,
    reducers: {
        setBestFilmsData: (state, action: PayloadAction<BestFilmsModel>) => {
            state.data = action.payload;
        },
        setBestFilmsCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    }
});

export const { setBestFilmsCurrentPage, setBestFilmsData } = bestFilmsSlice.actions;

//? Selectors
export const getBestFilms = (store: RootStoreType): BestFilmsItemModel[] => store.bestFilmsData.data.films;
export const getBestFilmsPagesCount = (store: RootStoreType): number => store.bestFilmsData.data.pagesCount;
export const getBestFilmsCurrentPage = (store: RootStoreType): number => store.bestFilmsData.currentPage;

export default bestFilmsSlice.reducer;
