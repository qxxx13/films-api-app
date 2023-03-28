import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { loadFilms } from './../../sagas/filmsSagaActions';
import { useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Pagination, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearFilms, getFilmsCurrentPage, setFilmsCurrentPage, getTotalPage, getFilms } from '../../store/filmsData/filmsDataReducer';
import { FilmsPageList } from './FilmsPageList/FilmsPageList';

export const FilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const page = useAppSelector(getFilmsCurrentPage);
    const totalPages = useAppSelector(getTotalPage);
    const films = useAppSelector(getFilms);
    const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/films/page/${page}`);
        dispatch(setFilmsCurrentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadFilms(page)), [dispatch, page]);

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
                <FilmsPageList films={films} />
            </Scrollbars>
        </Box>
    );
};

