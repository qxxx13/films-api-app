import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        clearFilms: (state) => {
            state.data.items = [];
        },
        setFilmsData: (state, action: PayloadAction<FilmsModel>) => {
            state.data = action.payload;
        }
    }
});

export const { setFilmsCurrentPage, clearFilms, setFilmsData } = filmsSLice.actions;

//? Selectors
export const getData = (store: RootStoreType): FilmsModel => store.filmsData.data;
export const getFilms = (store: RootStoreType): FilmsItemModel[] => store.filmsData.data.items;
export const getFilmsCurrentPage = (store: RootStoreType): number => store.filmsData.currentPage;
export const getTotalPage = (store: RootStoreType): number => store.filmsData.data.totalPages;

export default filmsSLice.reducer;
