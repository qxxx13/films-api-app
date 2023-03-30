import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { BestFilmsItemModel } from "../../models/BestFilmsItemModel";
import { FilmsByKeyWordsModel } from "../../models/FilmsByKeyWordsModel";
import { RootState } from "../rootStore";
import { initialSearchState } from "./searchReducerModel";

const searchSlice = createSlice({
    name: "search",
    initialState: initialSearchState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilmsByKeyWordsData: (state, action: PayloadAction<FilmsByKeyWordsModel>) => {
            state.data = action.payload;
        },
        setKeyWords: (state, action: PayloadAction<string>) => {
            state.data.keyword = action.payload;
        },
        clearFilmsByKeyWords: (state) => {
            state.data.films = [];
        }
    }
});

export const { clearFilmsByKeyWords, setCurrentPage, setFilmsByKeyWordsData, setKeyWords } = searchSlice.actions;

//? Selectors

export const getFilmsByKeyWords = (store: RootState): BestFilmsItemModel[] => store.search.data.films;
export const getFilmsByKeyWordsPagesCount = (store: RootState): number => store.search.data.pagesCount;
export const getKeyWords = (store: RootState): string => store.search.data.keyword;
export const getCurrentPage = (store: RootState): number => store.search.currentPage;
export const getTotalPage = (store: RootState): number => store.search.data.pagesCount;

export default searchSlice.reducer;
