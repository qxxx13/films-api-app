import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, Pagination, Stack, TextField, Typography } from '@mui/material';

import { loadFilmsByKeyWords } from './../../sagas/filmsSagaActions';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { getCurrentPage } from './../../store/searchReducer/searchReducer';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { clearFilmsByKeyWords, getFilmsByKeyWords, getKeyWords, getTotalPage, setCurrentPage, setKeyWords } from '../../store/searchReducer/searchReducer';


export const SearchPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const keyWords = useAppSelector(getKeyWords);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState<string>(keyWords);

    const films = useAppSelector(getFilmsByKeyWords);
    const totalPage = useAppSelector(getTotalPage);
    const currentPage = useAppSelector(getCurrentPage);
    const updateSearch = useCallback(() => dispatch(setKeyWords(searchValue)), [dispatch, searchValue]);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onPaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/${page}`);
        dispatch(setCurrentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadFilmsByKeyWords(currentPage)), [dispatch, currentPage]);

    useEffect(() => {
        dispatch(clearFilmsByKeyWords());
        updateFilms();
    }, [dispatch, updateFilms]);

    const onClick = () => {
        dispatch(setCurrentPage(1));
        navigate('/1');
        dispatch(clearFilmsByKeyWords());
        updateSearch();
        updateFilms();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.code === 'Enter' && onClick();
    };

    return (
        <Stack sx={{ m: '0 auto', maxWidth: 1200, maxHeight: 'calc(100vh - 64px)' }}>
            <TextField
                id="search"
                label="Search"
                variant="outlined"
                value={searchValue}
                onChange={onChange}
                sx={{ mt: 2 }}
                onKeyDown={onKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={onClick}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Scrollbars style={{ height: '100vh' }}>
                <Pagination count={totalPage} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }} onChange={onPaginationChange} page={currentPage} />
                <FilmsList films={films} />
            </Scrollbars>
        </Stack>
    );
};

