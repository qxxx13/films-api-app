import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsItemModel } from "../../models/FilmsItemModel";
import { FilmsModel } from "../../models/FilmsModel";
import { FiltersModel } from "../../models/FiltersModel";
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
        setOrder: (state, action: PayloadAction<string>) => {
            state.filters.order = action.payload;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.filters.type = action.payload;
        },
        setRatingFrom: (state, action: PayloadAction<number>) => {
            state.filters.ratingFrom = action.payload;
        },
        setKeyWords: (state, action: PayloadAction<string>) => {
            state.filters.keyWords = action.payload;
        }
    }
});

export const { setKeyWords, setFilmsCurrentPage, setFilmsData, setOrder, setRatingFrom, setType } = filmsSLice.actions;

//? Selectors
export const getData = (store: RootStoreType): FilmsModel => store.filmsData.data;
export const getFilms = (store: RootStoreType): FilmsItemModel[] => store.filmsData.data.items;
export const getFilmsCurrentPage = (store: RootStoreType): number => store.filmsData.currentPage;
export const getTotalPage = (store: RootStoreType): number => store.filmsData.data.totalPages;
export const getFilters = (store: RootStoreType): FiltersModel => store.filmsData.filters;
export const getKeyWords = (store: RootStoreType): string => store.filmsData.filters.keyWords;

export default filmsSLice.reducer;
