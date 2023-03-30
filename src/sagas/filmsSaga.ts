import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { instance } from "./../services/api";
import { BestFilmsModel } from "../models/BestFilmsModel";
import { FilmsByKeyWordsModel } from "../models/FilmsByKeyWordsModel";
import { FilmsItemModel } from "../models/FilmsItemModel";
import { FilmsModel } from "../models/FilmsModel";
import { setBestFilms, setBestFilmsPagesCount } from "../store/bestFilmsData/bestFilmsDataReducer";
import { setFilmById } from "../store/currentFilmData/currentFilmReducer";
import { setFilmsData, setIsLoading } from "../store/filmsData/filmsDataReducer";
import { getKeyWords, setFilmsByKeyWords, setFilmsByKeyWordsPagesCount } from "../store/searchReducer/searchReducer";
import { loadBestFilms, loadFilmById, loadFilms, loadFilmsByKeyWords } from "./filmsSagaActions";

export const filmsSaga = [
    takeLatest(loadFilms, fetchFilmsWorker),
    takeLatest(loadFilmById, fetchFilmByIdWorker),
    takeLatest(loadBestFilms, fetchBestFilmsWorker),
    takeLatest(loadFilmsByKeyWords, fetchFilmsByKeyWordsWorker)
];

const fetchFilmsFromApi = (pageId: number): Promise<AxiosResponse<FilmsModel>> => {
    const response = instance.get(`v2.2/films?page=${pageId}`).then((res) => res.data);
    return response;
};

const fetchBestFilmsFromApi = (pageId: number): Promise<AxiosResponse<BestFilmsModel>> => {
    const response = instance.get(`v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pageId}`).then((res) => res.data);
    return response;
};

const fetchFilmsByKeyWords = (keyWords: string, pageId: number): Promise<AxiosResponse<FilmsByKeyWordsModel>> => {
    const response = instance
        .get(`v2.1/films/search-by-keyword?keyword=${keyWords}&page=${pageId}`)
        .then((res) => res.data);
    return response;
};

const fetchFilmById = (filmId: string): Promise<AxiosResponse<FilmsItemModel>> => {
    const response = instance.get(`v2.2/films/${filmId}`).then((res) => res.data);
    return response;
};

function* fetchFilmsWorker(action: PayloadAction<number>): Generator {
    try {
        yield put(setIsLoading(true));
        const data = (yield call(fetchFilmsFromApi, action.payload)) as FilmsModel;
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
        yield put(setBestFilmsPagesCount(data.pagesCount));
        yield put(setBestFilms(data.films));
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
        yield put(setFilmsByKeyWords(data.films));
        yield put(setFilmsByKeyWordsPagesCount(data.pagesCount));
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
