import React from 'react';
import { useCallback, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Container, Pagination } from '@mui/material';
import Box from '@mui/material/Box';

import { getBestFilmsCurrentPage, getBestFilmsPagesCount, setBestFilmsCurrentPage } from './../../store/bestFilmsData/bestFilmsDataReducer';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { loadBestFilms } from '../../store/sagas/filmsSagaActions';
import { getBestFilmsForList } from '../../store/selectors/filmsSelector';

export const BestFilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const page = useAppSelector(getBestFilmsCurrentPage);
    const totalPages = useAppSelector(getBestFilmsPagesCount);
    const films = useAppSelector(getBestFilmsForList);

    const onPaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setBestFilmsCurrentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadBestFilms(page)), [dispatch, page]);

    useEffect(() => {
        updateFilms();
    }, [updateFilms]);

    return (
        <Container>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxHeight: 'calc(100vh - 64px)' }}>
                {totalPages ?
                    <Pagination count={totalPages} sx={{ display: 'flex', justifyContent: 'center', m: '16px 0 16px 0' }} onChange={onPaginationChange} page={page} />
                    :
                    <></>
                }
                <Scrollbars style={{ height: '100vh' }}>
                    <FilmsList films={films} />
                </Scrollbars>
            </Box>
        </Container>
    );
};
