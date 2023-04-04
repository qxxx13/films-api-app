import React from 'react';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { clearFilmById, getFilmById } from '../../store/currentFilmData/currentFilmReducer';
import { loadFilmById } from '../../store/sagas/filmsSagaActions';

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
            <Stack sx={{ width: '30%' }}>
                <img src={film?.posterUrl} alt='123' style={{ maxWidth: 425, maxHeight: 637 }} />
            </Stack>
            <Stack sx={{ width: '70%' }}>
                <Paper sx={{ padding: 3, height: '100%' }}>
                    <Stack sx={{ width: '100%' }}>
                        <Typography variant='h3' gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
                        <Box sx={{ display: 'flex', maxHeight: 250, overflow: 'auto' }}>
                            <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                        </Box>
                        <Typography variant='body1' gutterBottom>{film?.type}</Typography>
                    </Stack>
                </Paper>
            </Stack>
        </Stack>
    );
};
