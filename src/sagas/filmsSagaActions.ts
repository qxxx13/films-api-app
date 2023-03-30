import { createAction } from "@reduxjs/toolkit";

export const loadFilms = createAction<number>("LOAD_FILMS");
export const loadFilmById = createAction<string>("LOAD_FILM_BY_ID");
export const loadBestFilms = createAction<number>("LOAD_BEST_FILMS");
export const loadFilmsByKeyWords = createAction<number>("LOAD_FILMS_BY_KEYWORDS");
