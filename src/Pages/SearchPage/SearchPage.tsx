import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, Pagination, Stack, TextField, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { SideBar } from './SideBar/SideBar';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getFilmsCurrentPage, getKeyWords, getTotalPage, setFilmsCurrentPage, setKeyWords } from '../../store/filmsData/filmsDataReducer';
import { loadFilms } from '../../store/sagas/filmsSagaActions';
import { getFilmsForList } from '../../store/selectors/filmsSelector';


export const SearchPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const keyWords = useAppSelector(getKeyWords);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState<string>(keyWords);

    const films = useAppSelector(getFilmsForList);
    const totalPage = useAppSelector(getTotalPage);
    const currentPage = useAppSelector(getFilmsCurrentPage);
    const updateSearch = useCallback(() => dispatch(setKeyWords(searchValue)), [dispatch, searchValue]);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onPaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/${page}`);
        dispatch(setFilmsCurrentPage(page));
    };

    const updateFilms = useCallback(() => dispatch(loadFilms(currentPage)), [dispatch, currentPage]);

    useEffect(() => {
        updateFilms();
    }, [dispatch, updateFilms]);

    const onClick = () => {
        dispatch(setFilmsCurrentPage(1));
        navigate('/1');
        updateSearch();
        updateFilms();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.code === 'Enter' && onClick();
    };

    return (
        <Stack direction='row' sx={{ m: '0 auto', maxWidth: 1200, maxHeight: 'calc(100vh - 64px)' }}>
            <SideBar />
            <Stack direction='column' sx={{ width: '100%' }}>
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
                    {films.length > 0 ?
                        <>
                            <Pagination count={totalPage} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }} onChange={onPaginationChange} page={currentPage} />
                            <FilmsList films={films} />
                        </>
                        :
                        <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>404</Typography>
                    }
                </Scrollbars>
            </Stack>
        </Stack>
    );
};

