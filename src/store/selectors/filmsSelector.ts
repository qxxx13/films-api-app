import { createSelector } from "@reduxjs/toolkit";

import { getBestFilms } from "../bestFilmsData/bestFilmsDataReducer";
import { getFilms } from "../filmsData/filmsDataReducer";

export const getBestFilmsForList = createSelector(getBestFilms, (bestFilms) => {
    return bestFilms.map((film) => {
        return {
            id: film.filmId,
            posterUrl: film.posterUrl,
            nameRu: film.nameRu,
            nameEn: film.nameEn,
            year: film.year
        };
    });
});

export const getFilmsForList = createSelector(getFilms, (films) => {
    return films.map((film) => {
        return {
            id: film.kinopoiskId,
            posterUrl: film.posterUrl,
            nameRu: film.nameRu,
            nameEn: film.nameEn || film.nameOriginal,
            year: film.year as unknown as string
        };
    });
});
