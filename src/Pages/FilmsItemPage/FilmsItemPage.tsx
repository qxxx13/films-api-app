import React from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Skeleton, Stack, Typography, useMediaQuery } from '@mui/material';
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
    const matches = useMediaQuery('(min-width:900px)');
    let direction = 'row';
    matches ? direction = 'row' : direction = 'column';

    const isLoading = useAppSelector(getIsLoading);
    const film = useAppSelector(getFilmById);

    const updateFilm = useCallback(() => dispatch(loadFilmById(id!)), [dispatch, id]);

    useEffect(() => {
        dispatch(clearFilmById());
        updateFilm();
    }, [dispatch, updateFilm]);

    const filmInfo = useMemo(() => {
        if (isLoading) return null;
        return Object.entries(film).map((entry) => {
            const [key, value] = entry;
            if (typeof value === 'number' && key !== 'kinopoiskId') {
                return <FilmsItemInfo key={key} value={value} keyName={key} />;
            }
        });
    }, [isLoading]);

    return (
        <Container>
            <Stack sx={{ m: '0 auto', maxWidth: 1200, marginTop: 2 }} flexDirection='row' justifyContent='center'>
                {!isLoading ?
                    <Paper sx={{ display: 'flex', padding: 3, height: '100%', flexDirection: `${direction}` }} elevation={15}>
                        <Stack sx={{ width: '30%' }}>
                            <img src={film?.posterUrl} alt='123' style={{ maxWidth: 425, maxHeight: 515 }} />
                        </Stack>
                        <Stack sx={{ width: '100%', ml: 2 }}>
                            <Typography variant='h3' gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
                            <Box sx={{ display: 'flex', maxHeight: 250, overflow: 'auto' }}>
                                <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                            </Box>
                            <hr style={{ width: '100%' }} />
                            {filmInfo}
                        </Stack>
                    </Paper>
                    :
                    <Skeleton variant='rectangular' width={'100%'} height={500} />
                }
            </Stack>
        </Container>
    );
};
