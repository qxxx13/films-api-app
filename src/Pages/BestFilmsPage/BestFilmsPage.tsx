import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import { Pagination, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

import { loadBestFilms } from './../../sagas/filmsSagaActions';
import { clearBestFilms, getBestFilms, getBestFilmsCurentPage, getBestFilmsPagesCount, setBestFilmsCurentPage } from './../../store/bestFilmsData/bestFilmsDataReducer';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmsList } from '../../components/FilmsList/FilmsList';

export const BestFilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const page = useAppSelector(getBestFilmsCurentPage);
    const totalPages = useAppSelector(getBestFilmsPagesCount);
    const films = useAppSelector(getBestFilms);
    const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/bestfilms/page/${page}`);
        dispatch(setBestFilmsCurentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadBestFilms(page)), [dispatch, page]);

    useEffect(() => {
        dispatch(clearBestFilms());
        updateFilms();
    }, [updateFilms, dispatch]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 1200, margin: '0 auto', maxHeight: 'calc(100vh - 64px)' }}>
            <Scrollbars style={{ height: '100vh' }}>
                {totalPages ?
                    <Pagination count={totalPages} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }} onChange={onChange} page={page} />
                    :
                    <Skeleton variant="rectangular" width={'100%'} height={45} />
                }
                <FilmsList films={films} />
            </Scrollbars>
        </Box>
    );
};

