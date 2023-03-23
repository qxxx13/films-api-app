import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiItemModel } from "../../models/ApiItemModel";
import { ApiResponseModel } from "../../models/ApiResponseModel";
import { RootStoreType } from "../rootReducer";
import { initialFilmsState } from "./filmsDataModel";

const filmsSLice = createSlice({
    name: "filmsData",
    initialState: initialFilmsState,
    reducers: {
        setFilms: (state, action: PayloadAction<ApiItemModel[]>) => {
            state.data.items.push(...action.payload);
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setTotal: (state, action: PayloadAction<number>) => {
            state.data.total = action.payload;
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.data.totalPages = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        clearFilms: (state) => {
            state.data.items = [];
        }
    }
});

export const {
    setFilms,
    setIsLoading,
    setTotal,
    setTotalPages,
    setPage,
    clearFilms
} = filmsSLice.actions;

//? Selectors
export const getData = (store: RootStoreType): ApiResponseModel =>
    store.filmsData.data;
export const getFilms = (store: RootStoreType): ApiItemModel[] =>
    store.filmsData.data.items;
export const getPage = (store: RootStoreType): number => store.filmsData.page;
export const getIsLoading = (store: RootStoreType): boolean =>
    store.filmsData.isLoading;

export default filmsSLice.reducer;
