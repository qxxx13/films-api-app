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
        setBestFilmsCurentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        clearBestFilms: (state) => {
            state.data.films = [];
        }
    }
});

export const { clearBestFilms, setBestFilmsCurentPage, setBestFilmsData } = bestFilmsSlice.actions;

//? Selectors
export const getBestFilms = (store: RootStoreType): BestFilmsItemModel[] => store.bestFilmsData.data.films;
export const getBestFilmsPagesCount = (store: RootStoreType): number => store.bestFilmsData.data.pagesCount;
export const getBestFilmsCurentPage = (store: RootStoreType): number => store.bestFilmsData.currentPage;

export default bestFilmsSlice.reducer;
