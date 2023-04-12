import React from 'react';
import { useCallback } from 'react';
import { Button, FormControl, InputLabel, Slider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { translate } from '../../../common/translate/translate';
import { getIsLoading } from '../../../store/appReducer/appReducer';
import { getFilters, setFilmsCurrentPage, setOrder, setRatingFrom, setType } from '../../../store/filmsData/filmsDataReducer';
import { useAppDispatch } from '../../../store/hooks';
import { useAppSelector } from '../../../store/hooks';
import { loadFilms } from '../../../store/sagas/filmsSagaActions';

export const SideBar: React.FC = () => {
    const dispatch = useAppDispatch();

    const filters = useAppSelector(getFilters);
    const isLoading = useAppSelector(getIsLoading);

    const updateOrder = useCallback((order: SelectChangeEvent) => dispatch(setOrder(order.target.value as string)), [dispatch]);
    const updateType = useCallback((type: SelectChangeEvent) => dispatch(setType(type.target.value as string)), [dispatch]);
    const updateRatingFrom = useCallback((ratingFrom: number | number[]) => dispatch(setRatingFrom(ratingFrom as number)), [dispatch]);
    const updateFilms = useCallback(() => dispatch(loadFilms(1)), [dispatch]);

    const setDisabled = () => {
        if (isLoading) return true;
        else return false;
    };

    const setSort = () => {
        dispatch(setFilmsCurrentPage(1));
        updateFilms();
    };

    return (
        <Box sx={{ m: 2, minWidth: '10.5em' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControl fullWidth>
                    <InputLabel id='order'>{translate('order')}</InputLabel>
                    <Select labelId='order' label='Порядок' value={filters.order} onChange={(order) => updateOrder(order)} sx={{ width: '100%', mb: 2 }}>
                        <MenuItem value={'RATING'}>{translate('rating')}</MenuItem>
                        <MenuItem value={'NUM_VOTE'}>{translate('voteCount')}</MenuItem>
                        <MenuItem value={'YEAR'}>{translate('year')}</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel id='type'>{translate('type')}</InputLabel>
                    <Select labelId='type' label="Тип" value={filters.type} onChange={(type) => updateType(type)} sx={{ width: '100%' }}>
                        <MenuItem value={'ALL'}>{translate('all')}</MenuItem>
                        <MenuItem value={'FILM'}>{translate('film')}</MenuItem>
                        <MenuItem value={'TV_SHOW'}>{translate('tvShow')}</MenuItem>
                        <MenuItem value={'TV_SERIES'}>{translate('tvSerial')}</MenuItem>
                        <MenuItem value={'MINI_SERIES'}>{translate('miniSerial')}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, flexDirection: 'column' }}>
                <Typography color='textPrimary' variant='body2'>{translate('ratingFrom')}</Typography>
                <Slider step={1} min={1} max={10} marks valueLabelDisplay='auto' value={filters.ratingFrom} onChange={(event: Event, newValue: number | number[]) => updateRatingFrom(newValue)} />
            </Box>
            <Stack>
                <Button sx={{ mt: 2 }} variant='outlined' onClick={setSort} disabled={setDisabled()}>{translate('sort')}</Button>
            </Stack>
        </Box>
    );
};