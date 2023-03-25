import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { loadBestFilms } from './../../sagas/filmsSagaActions';
import { useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Pagination, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearFilms, getPage, setPage } from '../../store/filmsData/filmsDataReducer';
import { getTotalPage } from './../../store/filmsData/filmsDataReducer';

export const BestFilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const page = useAppSelector(getPage);
    const totalPages = useAppSelector(getTotalPage);

    const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/bestfilms/page/${page}`);
        dispatch(setPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadBestFilms(page)), [dispatch, page]);

    useEffect(() => {
        dispatch(clearFilms());
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
                <FilmsList />
            </Scrollbars>
        </Box>
    );
};

