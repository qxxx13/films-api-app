import React, { useMemo } from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { FilmListItem } from './FilmListItem/FilmListItem';
import { getIsLoading } from '../../store/appReducer/appReducer';
import { useAppSelector } from '../../store/hooks';

type FilmsListProps = {
    films: {
        id: number,
        posterUrl: string,
        nameRu: string,
        nameEn: string,
        year: string;
    }[];
    gap: number;
};

export const FilmsList: React.FC<FilmsListProps> = (props) => {

    const isLoading = useAppSelector(getIsLoading);

    const FilmsList = useMemo(() => props.films.map(film => <FilmListItem film={film} key={film.id} />), [props.films]);
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', rowGap: 5, columnGap: props.gap, m: 1 }}>
            {!isLoading ?
                FilmsList
                :
                <Stack sx={{ width: '100%' }} alignItems='center'>
                    <CircularProgress color='secondary' sx={{ mt: 2 }} />
                </Stack>
            }
        </Box>
    );
};
