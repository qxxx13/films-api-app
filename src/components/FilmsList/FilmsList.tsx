import React from 'react';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { FilmListItem } from './FilmListItem/FilmListItem';
import { BestFilmsItemModel } from '../../models/BestFilmsItemModel';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { useAppSelector } from '../../store/hooks';

type FilmsListProps = {
    films: BestFilmsItemModel[];
};

export const FilmsList: React.FC<FilmsListProps> = (props) => {
    const isLoading = useAppSelector(getIsLoading);

    const setFilmsList = useCallback(() => props.films.map(film => <FilmListItem film={film} key={film.filmId} />), [props.films]);

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
