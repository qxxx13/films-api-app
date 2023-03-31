import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilmsItemModel } from "../../models/FilmsItemModel";
import { FilmsModel } from "../../models/FilmsModel";
import { FiltersModel } from "../../models/FiltersModel";
import { RootStoreType } from "../rootReducer";
import { initialFilmsByGenresState } from "./filmsByGenresDataModel";

const filmsSLice = createSlice({
    name: "filmsData",
    initialState: initialFilmsByGenresState,
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
        setRatingTo: (state, action: PayloadAction<number>) => {
            state.filters.ratingTo = action.payload;
        },
        clearFilms: (state) => {
            state.data.items = [];
        }
    }
});

export const { setFilmsCurrentPage, clearFilms, setFilmsData, setOrder, setRatingFrom, setRatingTo, setType } =
    filmsSLice.actions;

//? Selectors
export const getData = (store: RootStoreType): FilmsModel => store.filmsByGenresData.data;
export const getFilms = (store: RootStoreType): FilmsItemModel[] => store.filmsByGenresData.data.items;
export const getFilmsCurrentPage = (store: RootStoreType): number => store.filmsByGenresData.currentPage;
export const getTotalPage = (store: RootStoreType): number => store.filmsByGenresData.data.totalPages;
export const getFilters = (store: RootStoreType): FiltersModel => store.filmsByGenresData.filters;

export default filmsSLice.reducer;
