import React from 'react';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Skeleton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmsItemInfo } from './FilmsItemInfo/FilmsItemInfo';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { clearFilmById, getFilmById } from '../../store/currentFilmData/currentFilmReducer';
import { loadFilmById } from '../../store/sagas/filmsSagaActions';

export const FilmsItemPage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(getIsLoading);
    const film = useAppSelector(getFilmById);

    const updateFilm = useCallback(() => dispatch(loadFilmById(id!)), [dispatch, id]);

    useEffect(() => {
        dispatch(clearFilmById());
        updateFilm();
    }, []);

    //? Обернуть в useMemo (но чтобы проверялось условие !isLoading)
    const filmInfo = () => {
        return Object.entries(film).map((entry) => {
            const [key, value] = entry;
            if (typeof value === 'number' && key !== 'kinopoiskId') {
                return <FilmsItemInfo key={key} value={value} keyName={key} />;
            }
        });
    };

    return (
        <Stack sx={{ m: '0 auto', maxWidth: 1200, marginTop: 2 }} flexDirection='row'>
            <Stack sx={{ width: '30%' }}>
                {!isLoading ?
                    <img src={film?.posterUrl} alt='123' style={{ maxWidth: 425, maxHeight: 637 }} />
                    :
                    <Skeleton variant="rectangular" width={'100%'} height={637} />
                }
            </Stack>
            <Stack sx={{ width: '70%' }}>
                <Paper sx={{ padding: 3, height: '100%' }}>
                    {!isLoading ?
                        <Stack sx={{ width: '100%' }}>
                            <Typography variant='h3' gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
                            <Box sx={{ display: 'flex', maxHeight: 250, overflow: 'auto' }}>
                                <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                            </Box>
                            <hr style={{ width: '100%' }} />
                            {filmInfo()}
                        </Stack>
                        :
                        <Skeleton variant='rectangular' width={'100%'} height={'100%'} />
                    }
                </Paper>
            </Stack>
        </Stack>
    );
};
