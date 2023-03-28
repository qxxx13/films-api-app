import { CombinedState, combineReducers, Reducer } from "redux";
import filmsDataReducer from "./filmsData/filmsDataReducer";
import { initialFilmsState } from "./filmsData/filmsDataModel";
import bestFilmsDataReducer from "./bestFilmsData/bestFilmsDataReducer";
import { initialBestFilmsState } from "./bestFilmsData/bestFilmsDataModel";

export const initialState = {
    filmsData: initialFilmsState,
    bestFilmsData: initialBestFilmsState
};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> =>
    combineReducers<RootStoreType>({
        filmsData: filmsDataReducer,
        bestFilmsData: bestFilmsDataReducer
    });
