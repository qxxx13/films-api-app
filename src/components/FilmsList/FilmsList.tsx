import React from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../store/hooks';
import { FilmItem } from './FilmItem/FilmItem';
import { getFilms, getIsLoading } from './../../store/filmsData/filmsDataReducer';
import { useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export const FilmsList: React.FC = () => {
    const films = useAppSelector(getFilms);
    const isLoading = useAppSelector(getIsLoading);

    const setFilmsList = useCallback(() => films.map(film => <FilmItem film={film} key={film.kinopoiskId} />), [films]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {!isLoading ?
                setFilmsList()
                :
                <CircularProgress color='secondary' sx={{ mt: 2 }} />
            }
        </Box>
    );
};
