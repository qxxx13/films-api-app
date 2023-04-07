import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, Pagination, Stack, TextField, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { SideBar } from './SideBar/SideBar';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { getFilmsCurrentPage, getKeyWords, getTotalPage, setFilmsCurrentPage, setKeyWords } from '../../store/filmsData/filmsDataReducer';
import { loadFilms } from '../../store/sagas/filmsSagaActions';
import { getFilmsForList } from '../../store/selectors/filmsSelector';


export const SearchPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const films = useAppSelector(getFilmsForList);
    const totalPage = useAppSelector(getTotalPage);
    const currentPage = useAppSelector(getFilmsCurrentPage);
    const keyWords = useAppSelector(getKeyWords);
    const isLoading = useAppSelector(getIsLoading);

    const [searchValue, setSearchValue] = useState<string>(keyWords);

    const updateSearch = useCallback(() => dispatch(setKeyWords(searchValue)), [dispatch, searchValue]);
    const updateFilms = useCallback(() => dispatch(loadFilms(currentPage)), [dispatch, currentPage]);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onPaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setFilmsCurrentPage(page));
    };

    useEffect(() => {
        updateFilms();
    }, [dispatch, updateFilms]);

    const onSearch = () => {
        dispatch(setFilmsCurrentPage(1));
        updateSearch();
        updateFilms();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.code === 'Enter' && onSearch();
    };

    return (
        <Stack direction='row' sx={{ m: '0 auto', maxWidth: 1200, maxHeight: 'calc(100vh - 64px)' }}>
            <SideBar />
            <Stack direction='column' sx={{ width: '100%' }}>
                <TextField
                    id="search"
                    label="Поиск"
                    variant="outlined"
                    value={searchValue}
                    onChange={onSearchChange}
                    sx={{ mt: 2 }}
                    onKeyDown={onKeyDown}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={onSearch}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Pagination count={totalPage} sx={{ display: 'flex', justifyContent: 'center', m: '16px 0 16px 0' }} onChange={onPaginationChange} page={currentPage} />
                <Scrollbars style={{ height: '100vh' }}>
                    {films.length < 1 && !isLoading
                        ?
                        <Typography color="textPrimary" variant='h3' sx={{ display: 'flex', justifyContent: 'center' }}>По вашему запросу ничего не найдено</Typography>
                        :
                        <FilmsList films={films} gap={14.5} />
                    }
                </Scrollbars>
            </Stack>
        </Stack>
    );
};

