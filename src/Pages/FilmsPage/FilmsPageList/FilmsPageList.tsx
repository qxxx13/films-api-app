import React from 'react';
import Box from '@mui/material/Box';
import { useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { getIsLoading } from '../../../store/filmsData/filmsDataReducer';
import { FilmPageItem } from './FilmPageItem';
import { useAppSelector } from '../../../store/hooks';
import { FilmsItemModel } from '../../../models/FilmsItemModel';

type FilmsListProps = {
    films: FilmsItemModel[];
};

export const FilmsPageList: React.FC<FilmsListProps> = (props) => {
    const isLoading = useAppSelector(getIsLoading);

    const setFilmsList = useCallback(() => props.films.map(film => <FilmPageItem film={film} key={film.kinopoiskId} />), [props.films]);

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
