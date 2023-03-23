import * as React from 'react';
import Box from '@mui/material/Box';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { loadFilms } from './../../sagas/filmsSagaActions';
import { useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearFilms, getPage, setPage } from '../../store/filmsData/filmsDataReducer';

export const FilmsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const page = useAppSelector(getPage);

    const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/page/${page}`);
        dispatch(setPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadFilms(page)), [dispatch, page]);

    const getNewData = () => {
        dispatch(clearFilms());
        updateFilms();
    };
    getNewData();


    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: 1200, margin: '0 auto', maxHeight: 'calc(100vh - 64px)' }}>
            <Scrollbars style={{ height: '100vh' }}>
                <Pagination count={5} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }} onChange={onChange} />
                <FilmsList />
            </Scrollbars>
        </Box>
    );
};

