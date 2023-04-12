import React, { useCallback, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, IconButton, InputAdornment, TextField } from '@mui/material';

import { translate } from '../../../common/translate/translate';
import { clearTotalPage, getFilmsCurrentPage, getKeyWords, setFilmsCurrentPage, setKeyWords } from '../../../store/filmsData/filmsDataReducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { loadFilms } from '../../../store/sagas/filmsSagaActions';
import { SideBar } from '../SideBar/SideBar';

export const SearchField: React.FC = () => {
    const dispatch = useAppDispatch();

    const currentPage = useAppSelector(getFilmsCurrentPage);
    const keyWords = useAppSelector(getKeyWords);

    const [searchValue, setSearchValue] = useState(keyWords);
    const [openMenu, setOpenMenu] = useState(false);

    const updateSearch = useCallback(() => dispatch(setKeyWords(searchValue)), [dispatch, searchValue]);
    const updateFilms = useCallback(() => dispatch(loadFilms(currentPage)), [dispatch, currentPage]);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        updateFilms();
    }, [updateFilms]);

    const onSearch = () => {
        dispatch(clearTotalPage());
        dispatch(setFilmsCurrentPage(1));
        updateSearch();
        updateFilms();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.code === 'Enter' && onSearch();
    };

    return (
        <TextField
            id="search"
            label={translate('search')}
            variant="outlined"
            value={searchValue}
            onChange={onSearchChange}
            sx={{ m: '16px 16px 0px 16px' }}
            onKeyDown={onKeyDown}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <IconButton onClick={() => setOpenMenu(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
                            <SideBar />
                        </Drawer>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={onSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};
