import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import { Pagination, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

import { loadFilms } from './../../sagas/filmsSagaActions';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { FilmsPageList } from './FilmsPageList/FilmsPageList';
import { SideBar } from './SideBar/SideBar';
import { clearFilms, getFilms, getFilmsCurrentPage, getTotalPage, setFilmsCurrentPage } from '../../store/filmsByGenresData/filmsByGenresDataReducer';

export const FilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentPage = useAppSelector(getFilmsCurrentPage);
    const totalPages = useAppSelector(getTotalPage);
    const films = useAppSelector(getFilms);
    const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/films/page/${page}`);
        dispatch(setFilmsCurrentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadFilms(currentPage)), [dispatch, currentPage]);

    useEffect(() => {
        dispatch(clearFilms());
        updateFilms();
    }, [updateFilms, dispatch]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 1200, margin: '0 auto', maxHeight: 'calc(100vh - 64px)' }}>
            <Scrollbars style={{ height: '100vh' }}>
                <SideBar />
                {totalPages ?
                    <Pagination count={totalPages} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }} onChange={onChange} page={currentPage} />
                    :
                    <Skeleton variant="rectangular" width={'100%'} height={45} sx={{ mt: 2 }} />
                }
                <FilmsPageList films={films} />
            </Scrollbars>
        </Box>
    );
};

