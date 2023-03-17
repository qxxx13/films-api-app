/** @format */

import { CombinedState, combineReducers, Reducer } from "redux";

export const initialState = {};

export type RootStoreType = typeof initialState;

export const createRootReducer = (): Reducer<CombinedState<RootStoreType>> =>
    combineReducers<RootStoreType>({});
