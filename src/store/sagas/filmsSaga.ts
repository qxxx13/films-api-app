import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { BestFilmsModel } from "../../models/BestFilmsModel";
import { FilmsItemModel } from "../../models/FilmsItemModel";
import { FilmsModel } from "../../models/FilmsModel";
import { FiltersModel } from "../../models/FiltersModel";
import { fetchBestFilmsFromApi, fetchFilmById, fetchFilmsByGenresFromApi } from "../../services/apiService";
import { setIsLoading } from "../appReducer/appReducer";
import { setBestFilmsData } from "../bestFilmsData/bestFilmsDataReducer";
import { setFilmById } from "../currentFilmData/currentFilmReducer";
import { getFilters, setFilmsData } from "../filmsData/filmsDataReducer";
import { loadBestFilms, loadFilmById, loadFilms } from "./filmsSagaActions";

export const filmsSaga = [
    takeLatest(loadFilms, fetchFilmsWorker),
    takeLatest(loadFilmById, fetchFilmByIdWorker),
    takeLatest(loadBestFilms, fetchBestFilmsWorker)
];

function* fetchFilmsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        const filters = (yield select(getFilters)) as FiltersModel;
        const data = (yield call(fetchFilmsByGenresFromApi, action.payload, filters)) as FilmsModel;
        yield put(setFilmsData(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* fetchBestFilmsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchBestFilmsFromApi, action.payload)) as BestFilmsModel;
        yield put(setBestFilmsData(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

function* fetchFilmByIdWorker(action: PayloadAction<string>): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchFilmById, action.payload)) as FilmsItemModel;
        yield put(setFilmById(data));
        yield put(setIsLoading(false));
    } catch (error) {
        console.log(error);
    }
}
