/** @format */

import { CombinedState, combineReducers, Reducer } from "redux";
import filmsDataReducer from "./filmsData/filmsDataReducer";
import { initialFilmsState } from "./filmsData/filmsDataModel";

export const initialState = {
    filmsData: initialFilmsState
};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> =>
    combineReducers<RootStoreType>({
        filmsData: filmsDataReducer
    });
