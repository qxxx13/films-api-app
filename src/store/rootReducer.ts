import { CombinedState, combineReducers, Reducer } from "redux";

import appReducer from "./appReducer/appReducer";
import { initialAppState } from "./appReducer/appReducerModel";
import { initialBestFilmsState } from "./bestFilmsData/bestFilmsDataModel";
import bestFilmsDataReducer from "./bestFilmsData/bestFilmsDataReducer";
import { initialCurrentFilmState } from "./currentFilmData/currentFilmDataModel";
import currentFilmReducer from "./currentFilmData/currentFilmReducer";
import { initialFilmsState } from "./filmsData/filmsDataModel";
import filmsDataReducer from "./filmsData/filmsDataReducer";

export const initialState = {
    appReducer: initialAppState,
    filmsData: initialFilmsState,
    bestFilmsData: initialBestFilmsState,
    currentFilmData: initialCurrentFilmState
};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> =>
    combineReducers<RootStoreType>({
        appReducer: appReducer,
        filmsData: filmsDataReducer,
        bestFilmsData: bestFilmsDataReducer,
        currentFilmData: currentFilmReducer
    });
