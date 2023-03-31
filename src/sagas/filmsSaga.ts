import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { fetchFilmsByKeyWords } from "./../services/api";
import { BestFilmsModel } from "../models/BestFilmsModel";
import { FilmsByKeyWordsModel } from "../models/FilmsByKeyWordsModel";
import { FilmsItemModel } from "../models/FilmsItemModel";
import { FilmsModel } from "../models/FilmsModel";
import { FiltersModel } from "../models/FiltersModel";
import { fetchBestFilmsFromApi, fetchFilmById, fetchFilmsByGenresFromApi } from "../services/api";
import { setIsLoading } from "../store/appReducer/appReducer";
import { setBestFilmsData } from "../store/bestFilmsData/bestFilmsDataReducer";
import { setFilmById } from "../store/currentFilmData/currentFilmReducer";
import { getFilters, setFilmsData } from "../store/filmsByGenresData/filmsByGenresDataReducer";
import { getKeyWords, setFilmsByKeyWordsData } from "../store/searchReducer/searchReducer";
import { loadBestFilms, loadFilmById, loadFilms, loadFilmsByKeyWords } from "./filmsSagaActions";

export const filmsSaga = [
    takeLatest(loadFilms, fetchFilmsWorker),
    takeLatest(loadFilmById, fetchFilmByIdWorker),
    takeLatest(loadBestFilms, fetchBestFilmsWorker),
    takeLatest(loadFilmsByKeyWords, fetchFilmsByKeyWordsWorker)
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

function* fetchFilmsByKeyWordsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        const keyWords = (yield select(getKeyWords)) as string;
        const data = (yield call(fetchFilmsByKeyWords, keyWords, action.payload)) as FilmsByKeyWordsModel;
        yield put(setFilmsByKeyWordsData(data));
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
