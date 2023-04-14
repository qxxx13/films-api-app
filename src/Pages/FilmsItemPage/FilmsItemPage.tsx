import React from 'react';
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Container, IconButton, Skeleton, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmInfo } from './FilmInfo/FilmInfo';
import { translate } from '../../common/translate/translate';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { getFilmById } from '../../store/currentFilmData/currentFilmReducer';
import { loadFilmById } from '../../store/sagas/filmsSagaActions';

export const FilmsItemPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isDesktop = useMediaQuery('(min-width:900px)');

    const isLoading = useAppSelector(getIsLoading);
    const film = useAppSelector(getFilmById);

    const goBack = useCallback(() => navigate(-1), [navigate]);
    const updateFilm = useCallback(() => dispatch(loadFilmById(id!)), [dispatch, id]);

    useEffect(() => {
        updateFilm();
    }, [updateFilm]);

    return (
        <>
            <Tooltip title={<Typography variant='body2'>{translate('back')}</Typography>} arrow>
                <IconButton sx={{ position: 'absolute', top: isDesktop ? 8 : 4, left: 8 }} color='primary' onClick={goBack} size='large'>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Tooltip>

            <Container sx={{ pt: 2 }}>
                <Stack direction='row' justifyContent='center'>
                    {!isLoading ?
                        <Paper sx={{ display: 'flex', padding: 3, flexDirection: isDesktop ? 'row' : 'column' }} elevation={15}>
                            <Stack sx={{ minWidth: 330 }} alignItems='center'>
                                <img src={film?.posterUrl} alt='poster' style={{ width: '100%', maxHeight: 515 }} />
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
        </>
    );
};
