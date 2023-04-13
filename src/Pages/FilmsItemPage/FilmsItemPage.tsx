import React from 'react';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Skeleton, Stack, useMediaQuery } from '@mui/material';
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
    }, [updateFilm]);

    return (
        <Container sx={{ pt: 2 }}>
            <Stack direction='row' justifyContent='center'>
                {!isLoading ?
                    <Paper sx={{ display: 'flex', padding: 3, flexDirection: isDesktop ? 'row' : 'column' }} elevation={15}>
                        <Stack sx={{ minWidth: 330 }} alignItems='center'>
                            <img src={film?.posterUrl} alt='poster' style={{ minWidth: '100%', maxWidth: '100%', maxHeight: 515 }} />
                        </Stack>
                        <Stack sx={{ minWidth: isDesktop ? 758 : 300, ml: 2 }}>
                            <FilmInfo film={film} />
                        </Stack>
                    </Paper>
                    :
                    <Paper elevation={15} sx={{ width: '100%', height: 600 }}>
                        <Skeleton variant='rectangular' width={'100%'} height={600} />
                    </Paper>
                }
            </Stack>
        </Container>
    );
};
