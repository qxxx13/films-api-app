import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";
import { RootState } from "../rootStore";
import { initialSearchState } from "./searchReducerModel";

const searchSlice = createSlice({
    name: "search",
    initialState: initialSearchState,
    reducers: {
        setKeyWords: (state, action: PayloadAction<string>) => {
            state.keyWords = action.payload;
        },
        setFilmsByKeyWordsPagesCount: (state, action: PayloadAction<number>) => {
            state.pagesCount = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilmsByKeyWords: (state, action: PayloadAction<BestFilmsItemModel[]>) => {
            state.films.push(...action.payload);
        },
        clearFilmsByKeyWords: (state) => {
            state.films = [];
        }
    }
});

export const { setKeyWords, setFilmsByKeyWordsPagesCount, setFilmsByKeyWords, clearFilmsByKeyWords, setCurrentPage } =
    searchSlice.actions;

//? Selectors

export const getFilmsByKeyWords = (store: RootState): BestFilmsItemModel[] => store.search.films;
export const getFilmsByKeyWordsPagesCount = (store: RootState): number => store.search.pagesCount;
export const getKeyWords = (store: RootState): string => store.search.keyWords;
export const getCurrentPage = (store: RootState): number => store.search.currentPage;
export const getTotalPage = (store: RootState): number => store.search.pagesCount;

export default searchSlice.reducer;
