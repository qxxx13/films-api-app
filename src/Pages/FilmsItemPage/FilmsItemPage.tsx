import React from 'react';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Skeleton, Stack, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmInfo } from './FilmInfo/FilmInfo';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { getFilmById } from '../../store/currentFilmData/currentFilmReducer';
import { loadFilmById } from '../../store/sagas/filmsSagaActions';

export const FilmsItemPage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const isDesktop = useMediaQuery('(min-width:900px)');

    const isLoading = useAppSelector(getIsLoading);
    const film = useAppSelector(getFilmById);

    const updateFilm = useCallback(() => dispatch(loadFilmById(id!)), [dispatch, id]);

    useEffect(() => {
        updateFilm();
    }, [dispatch, updateFilm]);

    return (
        <Container>
            <Stack sx={{ m: '0 auto', maxWidth: 1200, marginTop: 2 }} flexDirection='row' justifyContent='center'>
                {!isLoading ?
                    <Paper sx={{ display: 'flex', padding: 3, flexDirection: isDesktop ? 'row' : 'column' }} elevation={15}>
                        <Stack sx={{ minWidth: 330 }}>
                            <img src={film?.posterUrl} alt='poster' style={{ maxWidth: 330, maxHeight: 515 }} />
                        </Stack>
                        <Stack sx={{ minWidth: isDesktop ? 758 : 300, ml: 2 }}>
                            <Typography variant={isDesktop ? 'h3' : 'h4'} gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
                            <div style={{ width: '100%', border: '2px solid', margin: '8px 0 8px 0' }} />
                            <Box sx={{ display: 'flex', maxHeight: 250, overflow: 'auto' }}>
                                <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                            </Box>
                            <div style={{ width: '100%', border: '2px solid', margin: '8px 0 8px 0' }} />
                            <FilmInfo film={film} />
                        </Stack>
                    </Paper>
                    :
                    <Skeleton variant='rectangular' width={'100%'} height={500} />
                }
            </Stack>
        </Container>
    );
};
