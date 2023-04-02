import React from 'react';
import { useCallback } from 'react';
import { Button, Slider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { getFilters, setFilmsCurrentPage, setOrder, setRatingFrom, setRatingTo, setType } from '../../../store/filmsData/filmsDataReducer';
import { useAppDispatch } from '../../../store/hooks';
import { useAppSelector } from '../../../store/hooks';
import { loadFilms } from '../../../store/sagas/filmsSagaActions';


export const SideBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(getFilters);

    const updateOrder = useCallback((order: SelectChangeEvent) => dispatch(setOrder(order.target.value as string)), [dispatch]);
    const updateType = useCallback((type: SelectChangeEvent) => dispatch(setType(type.target.value as string)), [dispatch]);
    const updateRatingFrom = useCallback((ratingFrom: number | number[]) => dispatch(setRatingFrom(ratingFrom as number)), [dispatch]);
    const updateRatingTo = useCallback((ratingTo: number | number[]) => dispatch(setRatingTo(ratingTo as number)), [dispatch]);

    const updateFilms = useCallback(() => dispatch(loadFilms(1)), [dispatch]);

    const onClick = () => {
        dispatch(setFilmsCurrentPage(1));
        updateFilms();
    };

    return (
        <Box sx={{ m: 2, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex' }}>
                <Select label='Сортировать по' value={filters.order} onChange={(order) => updateOrder(order)} sx={{ width: '100%' }}>
                    <MenuItem value={'RATING'}>RATING</MenuItem>
                    <MenuItem value={'NUM_VOTE'}>NUM_VOTE</MenuItem>
                    <MenuItem value={'YEAR'}>YEAR</MenuItem>
                </Select>
                <Select label="Тип фильма" value={filters.type} onChange={(type) => updateType(type)} sx={{ width: '100%', ml: 2 }}>
                    <MenuItem value={'ALL'}>ALL</MenuItem>
                    <MenuItem value={'FILM'}>FILM</MenuItem>
                    <MenuItem value={'TV_SHOW'}>TV_SHOW</MenuItem>
                    <MenuItem value={'TV_SERIES'}>TV_SERIES</MenuItem>
                    <MenuItem value={'MINI_SERIES'}>MINI_SERIES</MenuItem>
                </Select>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, flexDirection: 'column' }}>
                <Typography color='primary'>Минимальный рейтинг</Typography>
                <Slider step={1} min={1} max={10} marks valueLabelDisplay='auto' value={filters.ratingFrom} onChange={(event: Event, newValue: number | number[]) => updateRatingFrom(newValue)} />
                <Typography color='primary'>Максимальный рейтинг</Typography>
                <Slider step={1} min={1} max={10} marks valueLabelDisplay='auto' value={filters.ratingTo} onChange={(event: Event, newValue: number | number[]) => updateRatingTo(newValue)} />
            </Box>
            <Stack>
                <Button sx={{ mt: 2 }} variant='outlined' onClick={onClick}>Сортировать</Button>
            </Stack>
        </Box>
    );
};
