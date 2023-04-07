import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Pagination, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

import { getBestFilmsCurentPage, getBestFilmsPagesCount, setBestFilmsCurentPage } from './../../store/bestFilmsData/bestFilmsDataReducer';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { loadBestFilms } from '../../store/sagas/filmsSagaActions';
import { getBestFilmsForList } from '../../store/selectors/filmsSelector';

export const BestFilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const page = useAppSelector(getBestFilmsCurentPage);
    const totalPages = useAppSelector(getBestFilmsPagesCount);
    const films = useAppSelector(getBestFilmsForList);

    const onPaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setBestFilmsCurentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadBestFilms(page)), [dispatch, page]);

    useEffect(() => {
        updateFilms();
    }, [updateFilms, dispatch]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 1200, m: '0 auto', maxHeight: 'calc(100vh - 64px)' }}>
            {totalPages ?
                <Pagination count={totalPages} sx={{ display: 'flex', justifyContent: 'center', m: '16px 0 16px 0' }} onChange={onPaginationChange} page={page} />
                :
                <Skeleton variant="rectangular" width={'100%'} height={45} sx={{ mt: 2 }} />
            }
            <Scrollbars style={{ height: '100vh' }}>
                <FilmsList films={films} gap={7.5} />
            </Scrollbars>
        </Box>
    );
};

