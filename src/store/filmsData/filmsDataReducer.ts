import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FiltersModel } from "./../../models/FiltersModel";
import { FilmsItemModel } from "../../models/FilmsItemModel";
import { FilmsModel } from "../../models/FilmsModel";
import { RootStoreType } from "../rootReducer";
import { initialFilmsState } from "./filmsDataModel";

const filmsSLice = createSlice({
    name: "filmsData",
    initialState: initialFilmsState,
    reducers: {
        setFilmsCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilmsData: (state, action: PayloadAction<FilmsModel>) => {
            state.data = action.payload;
        },
        setFilters: (state, action: PayloadAction<FiltersModel>) => {
            state.filters = action.payload;
        },
        setKeyWords: (state, action: PayloadAction<string>) => {
            state.keyWords = action.payload;
        },
        clearTotalPage: (state) => {
            state.data.totalPages = 0;
        }
    }
});

export const { setKeyWords, setFilmsCurrentPage, setFilmsData, setFilters, clearTotalPage } = filmsSLice.actions;

//? Selectors
export const getData = (store: RootStoreType): FilmsModel => store.filmsData.data;
export const getFilms = (store: RootStoreType): FilmsItemModel[] => store.filmsData.data.items;
export const getFilmsCurrentPage = (store: RootStoreType): number => store.filmsData.currentPage;
export const getTotalPage = (store: RootStoreType): number => store.filmsData.data.totalPages;
export const getFilters = (store: RootStoreType): FiltersModel => store.filmsData.filters;
export const getKeyWords = (store: RootStoreType): string => store.filmsData.keyWords;

export default filmsSLice.reducer;
