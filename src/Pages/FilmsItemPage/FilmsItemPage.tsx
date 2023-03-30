import React from 'react';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { loadFilmById } from '../../sagas/filmsSagaActions';
import { clearFilmById, getFilmById } from '../../store/currentFilmData/currentFilmReducer';

export const FilmsItemPage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const updateFilm = useCallback(() => dispatch(loadFilmById(id!)), [dispatch, id]);

    useEffect(() => {
        dispatch(clearFilmById());
        updateFilm();
    }, []);

    const film = useAppSelector(getFilmById);


    return (
        <Stack sx={{ m: '0 auto', maxWidth: 1200, marginTop: 2 }} flexDirection='row'>
            <Stack>
                <img src={film?.posterUrl} alt='123' style={{ width: 425, height: 637 }} />
            </Stack>
            <Stack>
                <Paper>
                    <Typography variant='h2' gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
                    <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                </Paper>

            </Stack>
        </Stack>
    );
};
