import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBestFilmsState } from "./bestFilmsDataModel";
import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";
import { RootStoreType } from "../rootReducer";

const bestFilmsSlice = createSlice({
    name: "bestFilmsData",
    initialState: initialBestFilmsState,
    reducers: {
        setBestFilms: (state, action: PayloadAction<BestFilmsItemModel[]>) => {
            state.films.push(...action.payload);
        },
        setBestFilmsPagesCount: (state, action: PayloadAction<number>) => {
            state.pagesCount = action.payload;
        },
        setBestFilmsCurentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        clearBestFilms: (state) => {
            state.films = [];
        }
    }
});

export const { setBestFilms, setBestFilmsPagesCount, clearBestFilms, setBestFilmsCurentPage } = bestFilmsSlice.actions;

//? Selectors
export const getBestFilms = (store: RootStoreType): BestFilmsItemModel[] => store.bestFilmsData.films;
export const getBestFilmsPagesCount = (store: RootStoreType): number => store.bestFilmsData.pagesCount;
export const getBestFilmsCurentPage = (store: RootStoreType): number => store.bestFilmsData.currentPage;

export default bestFilmsSlice.reducer;
