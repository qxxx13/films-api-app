import React, { useMemo } from 'react';
import { useCallback, useState } from 'react';
import { Button, FormControl, InputLabel, Slider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { translate } from '../../../common/translate/translate';
import { getIsLoading } from '../../../store/appReducer/appReducer';
import { clearTotalPage, getFilters, setFilmsCurrentPage, setFilters } from '../../../store/filmsData/filmsDataReducer';
import { useAppDispatch } from '../../../store/hooks';
import { useAppSelector } from '../../../store/hooks';
import { loadFilms } from '../../../store/sagas/filmsSagaActions';

const typeName = [
    'ALL',
    'FILM',
    'TV_SHOW',
    'TV_SERIES',
    'MINI_SERIES'
];

const orderName = [
    'RATING',
    'NUM_VOTE',
    'YEAR',
];

export const SideBar: React.FC = () => {
    const dispatch = useAppDispatch();

    const filters = useAppSelector(getFilters);
    const isLoading = useAppSelector(getIsLoading);

    const typeLits = useMemo(() => {
        return typeName.map(type => {
            return <MenuItem value={type} key={type}>{translate(type)}</MenuItem>;
        });
    }, []);

    const orderLists = useMemo(() => {
        return orderName.map((order) => {
            return <MenuItem value={order} key={order}>{translate(order)}</MenuItem>;
        });
    }, []);

    const [order, setOrder] = useState(filters.order);
    const [type, setType] = useState(filters.type);
    const [ratingFrom, setRatingFrom] = useState(filters.ratingFrom);

    const updateFilms = () => dispatch(loadFilms(1));
    const updateFilters = () => dispatch(setFilters({ order, type, ratingFrom }));

    const setDisabled = () => {
        if (isLoading) return true;
        else return false;
    };

    const setSort = useCallback(() => {
        updateFilters();
        dispatch(clearTotalPage());
        dispatch(setFilmsCurrentPage(1));
        updateFilms();
    }, [dispatch, updateFilms, updateFilters]);

    return (
        <Box sx={{ m: 2, minWidth: '10.5em' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControl fullWidth>
                    <InputLabel id='order'>{translate('order')}</InputLabel>
                    <Select labelId='order' label='Порядок' value={order} onChange={(event: SelectChangeEvent) => setOrder(event.target.value)} sx={{ width: '100%', mb: 2 }}>
                        {orderLists}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel id='type'>{translate('type')}</InputLabel>
                    <Select labelId='type' label="Тип" value={type} onChange={(event: SelectChangeEvent) => setType(event.target.value)} sx={{ width: '100%' }}>
                        {typeLits}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, flexDirection: 'column' }}>
                <Typography color='textPrimary' variant='body2'>{translate('ratingFrom')}</Typography>
                <Slider step={1} min={1} max={10} marks valueLabelDisplay='auto' value={ratingFrom} onChange={(event: Event, newValue: number | number[]) => setRatingFrom(newValue as number)} />
            </Box>
            <Stack>
                <Button sx={{ mt: 2 }} variant='outlined' onClick={setSort} disabled={setDisabled()}>{translate('sort')}</Button>
            </Stack>
        </Box>
    );
};
